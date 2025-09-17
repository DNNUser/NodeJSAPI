export interface Product {
  id: string;
   publicName: string;
  category: string;
  brand: string;
  isWholesaleProduct: boolean;
  visibleTo: ('admin' | 'doctor')[];
  createdAt: string;
  priceCents: number;
  tags: string[];
}