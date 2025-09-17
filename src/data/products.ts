import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Product } from '../types/product';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let products: Product[] = [];

export function loadProducts(): void {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'products.json'), 'utf-8');
    products = JSON.parse(data) as Product[];
    console.log('Products --> ', products);
  } catch (error) {
    console.error('Error loading products:', error);
  }
}
export function getProducts(): Product[] {
  return products;
}