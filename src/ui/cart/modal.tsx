import { CartContext } from "@/lib/contexts/cart";
import { useContext, useEffect, useRef } from "react";
import { SubmitButton } from "../form/submit-button";
import { CartItem } from "./item";

export function CartModal({ open }: { open: boolean }) {
  const { items, emptyCart } = useContext(CartContext);

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    open ? modalRef.current?.show() : modalRef.current?.close();
  }, [open]);

  return (
    <dialog
      ref={modalRef}
      className="open:animate-fade open:animate-duration-500 top-20 w-[95%] overflow-hidden rounded-xl bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] outline-none"
    >
      <h1 className="border-b border-grayishBlue p-5 text-lg font-semibold">
        Cart
      </h1>

      {items.size > 0 ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            emptyCart();
          }}
          className="flex flex-col gap-8 p-5"
        >
          <ul className="flex flex-col gap-4">
            {Array.from(items.values()).map((item) => (
              <li key={item.id}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>

          <SubmitButton>
            <strong>Checkout</strong>
          </SubmitButton>
        </form>
      ) : (
        <span className="flex h-44 items-center justify-center font-bold text-darkGrayishBlue">
          Your cart is empty.
        </span>
      )}
    </dialog>
  );
}
