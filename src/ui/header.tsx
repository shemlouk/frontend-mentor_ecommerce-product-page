import CloseIcon from "@/assets/icon-close.svg?react";
import MenuIcon from "@/assets/icon-menu.svg?react";
import Logo from "@/assets/logo.svg?react";
import ProfilePicture from "/image-avatar.png";

import { CartContext } from "@/lib/contexts/cart";
import { useContext, useRef, useState } from "react";
import { CartIcon } from "./cart/icon";
import { CartModal } from "./cart/modal";

const pages = ["Collections", "Men", "Women", "About", "Contact"];

export function Header() {
  const [openCart, setOpenCart] = useState(false);

  const { quantity } = useContext(CartContext);

  const navBarRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <header className="sticky left-0 top-0 z-10 flex h-16 items-center justify-between gap-10 bg-white px-6 md:h-24 md:border-b md:border-grayishBlue md:px-0">
        <div className="flex h-full items-center gap-4 md:gap-14">
          <MenuIcon
            onClick={() => navBarRef.current?.showModal()}
            className="md:hidden"
          />

          <Logo className="mb-1" />

          <nav className="hidden h-full md:block">
            <ul className="flex h-full gap-4">
              {pages.map((page, index) => (
                <li
                  key={index}
                  onClick={() => navBarRef.current?.close()}
                  className="group flex h-full w-24 items-center border-orange hover:border-b-2"
                >
                  <a
                    href="#"
                    className="text-md w-full text-center text-darkGrayishBlue group-hover:text-veryDarkBlue"
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="relative flex items-center gap-6">
          <button className="relative" onClick={() => setOpenCart(!openCart)}>
            <CartIcon state={openCart ? "selected" : "idle"} />

            {quantity > 0 && (
              <div className="absolute -right-3 -top-3 animate-jump-in rounded-full bg-orange px-2 pt-[2px] text-xs font-semibold text-white animate-duration-200">
                {quantity}
              </div>
            )}
          </button>

          <CartModal open={openCart} />

          <img
            src={ProfilePicture}
            alt="profile picture"
            className="h-8 cursor-pointer rounded-full hover:outline hover:outline-2 hover:outline-orange md:h-10"
          />
        </div>
      </header>

      <dialog ref={navBarRef} className="group m-0 bg-transparent md:hidden">
        <nav className="fixed flex h-screen w-2/3 flex-col gap-8 bg-white p-6 group-open:animate-fade-right group-open:animate-duration-300">
          <CloseIcon
            fill="#69707d"
            onClick={() => navBarRef.current?.close()}
          />

          <ul className="flex flex-col gap-4">
            {pages.map((page, index) => (
              <li key={index} onClick={() => navBarRef.current?.close()}>
                <a href="#" className="text-lg font-bold">
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </>
  );
}
