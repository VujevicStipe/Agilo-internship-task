/// <reference types="vite/client" />

type Product = {
  id: string;
  brand: string;
  description: string;
  type: string;
  colors: string[];
  sizes: string[];
  price: number;
  material: string;
};

type Order = {
  size: string;
  color: string;
  quantity: number;
}
