export function ProductDescription() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold tracking-wider text-orange">
          SNEAKER COMPANY
        </h3>

        <h1 className="text-3xl font-bold">Fall Limited Edition Skeakers</h1>
      </div>

      <p className="text-darkGrayishBlue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold">$125.00</h2>

          <span className="rounded bg-paleOrange px-2 py-1 text-sm font-bold text-orange">
            50%
          </span>
        </div>

        <span className="font-bold text-grayishBlue line-through">$250.00</span>
      </div>
    </div>
  );
}
