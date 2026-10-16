export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Aster Daily Tote',
    category: 'Bags',
    price: 128,
    imageUrl: '/assets/products/aster-daily-tote.jpg',
  },
  {
    id: 2,
    name: 'Lumen Travel Mug',
    category: 'Home',
    price: 42,
    imageUrl: '/assets/products/lumen-travel-mug.jpg',
  },
  {
    id: 3,
    name: 'Ridge Knit Throw',
    category: 'Living',
    price: 96,
    imageUrl: '/assets/products/ridge-knit-throw.jpg',
  },
];
