import { Product } from "@/lib/definitions";
import { ProductForm } from "@/ui/product/form";
import { ProductInformation } from "@/ui/product/information";
import { ProductViewerCarousel } from "@/ui/product/viewer/carousel";

export function ProductPage(product: Product) {
  return (
    <main className="flex flex-col pb-16 md:flex-row md:items-center md:gap-20">
      <ProductViewerCarousel pictures={product.pictures} />

      <div className="flex flex-col gap-8 p-5">
        <ProductInformation {...product} />
        <ProductForm product={product} />
      </div>
    </main>
  );
}
