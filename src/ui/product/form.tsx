"use client";

import IconMinus from "@/assets/icon-minus.svg?react";
import IconPlus from "@/assets/icon-plus.svg?react";

import { useContext, useState } from "react";

import { CartContext } from "@/lib/contexts/cart";
import { Product } from "@/lib/definitions";
import { CartIcon } from "../cart/icon";
import { SubmitButton } from "../form/submit-button";

export function ProductForm({ product }: { product: Product }) {
  const { updateCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateCartItems({ ...product, quantity });
      }}
      className="flex flex-col gap-4 md:flex-row"
    >
      <div className="flex h-14 w-full items-center justify-between rounded-lg bg-lightGrayishBlue md:w-3/5">
        <button
          onClick={() => quantity > 0 && setQuantity(quantity - 1)}
          type="button"
          className="group flex h-full w-1/3 cursor-pointer items-center justify-start pl-6 disabled:cursor-not-allowed"
          disabled={quantity === 0}
        >
          <IconMinus className="group-disabled:opacity-50" />
        </button>

        <input
          type="number"
          name="quantity"
          required
          min={0}
          readOnly
          value={quantity}
          className="h-full w-1/3 bg-transparent text-center text-lg font-bold outline-none"
        />

        <button
          onClick={() => setQuantity(quantity + 1)}
          type="button"
          className="group flex h-full w-1/3 cursor-pointer items-center justify-end pr-6"
        >
          <IconPlus />
        </button>
      </div>

      <SubmitButton>
        <CartIcon state="static" />
        <strong>Add to cart</strong>
      </SubmitButton>
    </form>
  );
}
