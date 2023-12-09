import CloseIcon from "@/assets/icon-close.svg?react";
import { useEffect, useRef } from "react";
import { ProductViewerCarousel } from "./carousel";

export function ProductViewerModal({
  pictures,
  toggleModal,
}: {
  pictures: string[];
  toggleModal: boolean;
}) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    modalRef.current?.showModal();
  }, [toggleModal]);

  useEffect(() => {
    modalRef.current?.close();
  }, []);

  return (
    <dialog
      ref={modalRef}
      onClick={(e) => e.currentTarget === e.target && modalRef.current?.close()}
      className="hidden w-2/5 animate-fade flex-col items-end gap-6 overflow-visible bg-transparent animate-duration-200 backdrop:bg-black/60 md:open:flex"
    >
      <CloseIcon
        fill="#FF7D1A"
        className="cursor-pointer"
        onClick={() => modalRef.current?.close()}
      />

      <ProductViewerCarousel pictures={pictures} showAsModal={true} />
    </dialog>
  );
}
