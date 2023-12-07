import ProductPicture1 from "@/assets/images/image-product-1.jpg";
import ProductPicture2 from "@/assets/images/image-product-2.jpg";
import ProductPicture3 from "@/assets/images/image-product-3.jpg";
import ProductPicture4 from "@/assets/images/image-product-4.jpg";

import { ProductDescription } from "@/ui/product/description";
import { ProductForm } from "@/ui/product/form";
import { ProductViewer } from "@/ui/product/viewer";

export function ProductPage() {
  return (
    <main className="flex flex-col pb-16">
      <ProductViewer
        pictures={[
          ProductPicture1,
          ProductPicture2,
          ProductPicture3,
          ProductPicture4,
        ]}
      />

      <div className="flex flex-col gap-8 p-5">
        <ProductDescription />
        <ProductForm />
      </div>
    </main>
  );
}
