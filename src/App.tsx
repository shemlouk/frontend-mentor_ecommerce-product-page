import data from "./data.json";

import { ProductPage } from "./layout/product-page";
import { CartContextProvider } from "./lib/contexts/cart";
import { Header } from "./ui/header";

const { products } = data;

export function App() {
  return (
    <CartContextProvider>
      <div className="flex justify-center">
        <div className="flex min-w-min flex-col text-veryDarkBlue md:max-w-screen-lg md:gap-20">
          <Header />
          <ProductPage {...products[0]} />
        </div>
      </div>
    </CartContextProvider>
  );
}
