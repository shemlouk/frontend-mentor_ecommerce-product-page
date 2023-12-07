import MenuIcon from "@/assets/images/icon-menu.svg?react";
import ProfilePicture from "@/assets/images/image-avatar.png";
import Logo from "@/assets/images/logo.svg?react";
import { CartIcon } from "./cart-icon";

export function Header() {
  return (
    <header className="sticky left-0 top-0 z-10 flex h-16 items-center justify-between bg-white px-6">
      <div className="flex items-center gap-4">
        <MenuIcon />
        <Logo className="mb-1" />
      </div>

      <div className="flex items-center gap-6">
        <CartIcon state="idle" />
        <img src={ProfilePicture} alt="profile picture" className="h-8" />
      </div>
    </header>
  );
}
