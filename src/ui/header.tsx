import MenuIcon from "@/assets/icon-menu.svg?react";
import Logo from "@/assets/logo.svg?react";
import { CartContext } from "@/lib/contexts/cart";
import { useContext } from "react";
import { CartIcon } from "./cart-icon";
import ProfilePicture from "/image-avatar.png";

export function Header() {
  const { quantity } = useContext(CartContext);

  return (
    <header className="sticky left-0 top-0 z-10 flex h-16 items-center justify-between bg-white px-6">
      <div className="flex items-center gap-4">
        <MenuIcon />
        <Logo className="mb-1" />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative">
          <CartIcon state="idle" />
          {quantity > 0 && (
            <div className="absolute -right-3 -top-3 rounded-full bg-orange px-2 pt-[2px] text-xs font-semibold text-white">
              {quantity}
            </div>
          )}
        </button>

        <img src={ProfilePicture} alt="profile picture" className="h-8" />
      </div>
    </header>
  );
}
