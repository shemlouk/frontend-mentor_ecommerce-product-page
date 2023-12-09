import DeleteIcon from "@/assets/icon-delete.svg?react";
import { CartContext } from "@/lib/contexts/cart";
import { CartItem as CartItemType } from "@/lib/definitions";
import { useContext } from "react";

export function CartItem({
  id,
  name,
  price,
  pictures,
  quantity,
}: CartItemType) {
  const { deleteItem } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between gap-4">
      <img
        src={pictures[0]}
        alt="product picture"
        className="w-14 rounded-md"
      />

      <div className="flex h-full flex-1 flex-col text-darkGrayishBlue">
        <p className="line-clamp-1">{name}</p>

        <p className="flex gap-4">
          {quantity > 1 && (
            <span>
              ${price.toFixed(2)} x {quantity}
            </span>
          )}

          <strong className="text-veryDarkBlue">
            ${(quantity * price).toFixed(2)}
          </strong>
        </p>
      </div>

      <DeleteIcon onClick={() => deleteItem(id)} />
    </div>
  );
}
