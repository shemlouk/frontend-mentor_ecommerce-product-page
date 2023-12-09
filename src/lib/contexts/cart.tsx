import { createContext, useCallback, useEffect, useState } from "react";
import { CartItem } from "../definitions";

type CartContextValue = {
  quantity: number;
  items: Map<string, CartItem>;
  emptyCart(): void;
  deleteItem(id: string): void;
  updateCartItems(item: CartItem): void;
};

export const CartContext = createContext<CartContextValue>({
  quantity: 0,
  items: new Map(),
  emptyCart: () => {},
  deleteItem: () => {},
  updateCartItems: () => {},
});

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartContextValue["items"]>(new Map());
  const [quantity, setQuantity] = useState(0);

  const updateCartItems = useCallback(
    (item: CartItem) => {
      setItems(new Map(items.set(item.id, item)));
    },
    [items],
  );

  const deleteItem = useCallback(
    (id: string) => {
      items.delete(id);
      setItems(new Map(items));
    },
    [items],
  );

  const emptyCart = useCallback(() => {
    setItems(new Map());
  }, []);

  useEffect(() => {
    let total = 0;
    items.forEach((item) => (total += item.quantity));
    setQuantity(total);
  }, [items]);

  return (
    <CartContext.Provider
      value={{ quantity, items, emptyCart, deleteItem, updateCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
