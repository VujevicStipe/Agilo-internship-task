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
  bodyFit: string;
};

type Order = {
  size: string;
  color: string;
  quantity: number;
}

type Filter = {
  type: string;
  size: string;
  color: string;
  brand: string;
  bodyFit: string;
}
