import { Product } from "@/lib/definitions";

export function ProductInformation({
  company,
  name,
  description,
  price,
  discount,
}: Product) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 md:gap-6">
        <h3 className="text-sm font-semibold tracking-wider text-orange">
          {company.toUpperCase()}
        </h3>

        <h1 className="text-3xl font-bold md:text-4xl">{name}</h1>
      </div>

      <p className="text-darkGrayishBlue md:leading-7">{description}</p>

      <div className="flex items-center justify-between md:flex-col md:items-start md:gap-2">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold">${price.toFixed(2)}</h2>

          <span className="rounded bg-paleOrange px-2 py-1 text-sm font-bold text-orange">
            {(discount * 100).toFixed(0)}%
          </span>
        </div>

        <span className="font-bold text-grayishBlue line-through">
          ${(price / discount).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
