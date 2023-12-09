import NextIcon from "@/assets/icon-next.svg?react";
import PreviousIcon from "@/assets/icon-previous.svg?react";
import clsx from "clsx";
import { useState } from "react";
import { ProductViewerModal } from "./modal";

export function ProductViewerCarousel({
  pictures,
  showAsModal,
}: {
  pictures: string[];
  showAsModal?: boolean;
}) {
  const [toggleModal, setToggleModal] = useState(false);
  const [pictureIndex, setPictureIndex] = useState(0);

  return (
    <div
      className={clsx("relative flex flex-col gap-8", {
        "w-full": showAsModal,
      })}
    >
      <figure className="relative">
        <img
          src={pictures[pictureIndex]}
          alt="product picture"
          onClick={() => !showAsModal && setToggleModal(!toggleModal)}
          className={clsx("md:rounded-2xl", {
            "cursor-zoom-in transition-all hover:brightness-75": !showAsModal,
          })}
        />

        <div
          className={clsx(
            "absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-6",
            {
              "px-0": showAsModal,
              "md:hidden": !showAsModal,
            },
          )}
        >
          <button
            onClick={() => {
              const nextIndex = pictureIndex - 1;
              setPictureIndex(nextIndex < 0 ? pictures.length - 1 : nextIndex);
            }}
            className={clsx(
              "group flex h-12 w-12 items-center justify-center rounded-full bg-white outline-none",
              {
                "-translate-x-full": showAsModal,
              },
            )}
          >
            <PreviousIcon className="-translate-x-[1px] stroke-[#1D2026] group-hover:stroke-[#FF7D1A]" />
          </button>

          <button
            onClick={() => {
              setPictureIndex((pictureIndex + 1) % pictures.length);
            }}
            className={clsx(
              "group flex h-12 w-12 items-center justify-center rounded-full bg-white outline-none",
              {
                "translate-x-full": showAsModal,
              },
            )}
          >
            <NextIcon className="translate-x-[1px] stroke-[#1D2026] group-hover:stroke-[#FF7D1A]" />
          </button>
        </div>
      </figure>

      <ul
        className={clsx("hidden w-full md:flex", {
          "justify-center gap-8": showAsModal,
          "justify-between": !showAsModal,
        })}
      >
        {pictures.map((picture, index) => (
          <li
            key={index}
            className={clsx("h-20 overflow-hidden rounded-xl", {
              "border-2 border-orange": index === pictureIndex,
            })}
          >
            <img
              src={picture}
              alt="product thumbnail"
              onClick={() => setPictureIndex(index)}
              className={clsx("h-full cursor-pointer hover:opacity-50", {
                "opacity-50": index === pictureIndex,
              })}
            />
          </li>
        ))}
      </ul>

      {!showAsModal && <ProductViewerModal {...{ pictures, toggleModal }} />}
    </div>
  );
}
