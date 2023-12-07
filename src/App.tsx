import { ProductPage } from "./layout/product";
import { Header } from "./ui/header";

export function App() {
  return (
    <div className="flex flex-col text-veryDarkBlue">
      <Header />
      <ProductPage />
    </div>
  );
}
