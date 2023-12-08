export interface Product {
  id: string;
  name: string;
  company: string;
  description: string;
  price: number;
  discount: number;
  pictures: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
