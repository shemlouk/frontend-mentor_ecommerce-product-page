import IconNext from "@/assets/icon-next.svg";
import IconPrevious from "@/assets/icon-previous.svg";
import clsx from "clsx";
import { useState } from "react";

export function ProductViewerCarousel({ pictures }: { pictures: string[] }) {
  const [pictureIndex, setPictureIndex] = useState(0);

  return (
    <div className="relative flex flex-col gap-8">
      <figure>
        <img
          src={pictures[pictureIndex]}
          alt="product picture"
          className="md:rounded-2xl"
        />

        <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-6 md:hidden">
          <SlideButton
            type="previous"
            handler={() => {
              const nextIndex = pictureIndex - 1;
              setPictureIndex(nextIndex < 0 ? pictures.length - 1 : nextIndex);
            }}
          />

          <SlideButton
            type="next"
            handler={() => {
              setPictureIndex((pictureIndex + 1) % pictures.length);
            }}
          />
        </div>
      </figure>

      <ul className="hidden w-full justify-between md:flex">
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
    </div>
  );
}

function SlideButton({
  type,
  handler,
}: {
  type: "next" | "previous";
  handler(): void;
}) {
  return (
    <button
      onClick={handler}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
    >
      <img
        src={type === "next" ? IconNext : IconPrevious}
        alt={type + " icon"}
        className={`${type === "previous" && "-"}translate-x-[1px]`}
      />
    </button>
  );
}
