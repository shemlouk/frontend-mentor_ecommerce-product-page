import IconNext from "@/assets/icon-next.svg";
import IconPrevious from "@/assets/icon-previous.svg";
import { useState } from "react";

export function ProductViewer({ pictures }: { pictures: string[] }) {
  const [pictureIndex, setPictureIndex] = useState(0);

  return (
    <div className="relative">
      <img src={pictures[pictureIndex]} alt="product picture" />

      <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-6">
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
