import { Product } from "@/lib/definitions";
import { ProductForm } from "@/ui/product/form";
import { ProductInformation } from "@/ui/product/information";
import { ProductViewer } from "@/ui/product/viewer";

export function ProductPage(product: Product) {
  return (
    <main className="flex flex-col pb-16">
      <ProductViewer pictures={product.pictures} />

      <div className="flex flex-col gap-8 p-5">
        <ProductInformation {...product} />
        <ProductForm product={product} />
      </div>
    </main>
  );
}
