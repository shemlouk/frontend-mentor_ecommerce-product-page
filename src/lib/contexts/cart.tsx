import { createContext, useCallback, useEffect, useState } from "react";
import { CartItem } from "../definitions";

type CartContextValue = {
  quantity: number;
  items: Map<string, CartItem>;
  updateCartItems(item: CartItem): void;
};

export const CartContext = createContext<CartContextValue>({
  quantity: 0,
  items: new Map(),
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

  useEffect(() => {
    let total = 0;
    items.forEach((item) => (total += item.quantity));
    setQuantity(total);
  }, [items]);

  return (
    <CartContext.Provider value={{ quantity, items, updateCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
