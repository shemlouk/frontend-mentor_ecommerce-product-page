import data from "./data.json";
import { ProductPage } from "./layout/product-page";
import { Header } from "./ui/header";

const { products } = data;

export function App() {
  return (
    <div className="flex flex-col text-veryDarkBlue">
      <Header />
      <ProductPage {...products[0]} />
    </div>
  );
}
