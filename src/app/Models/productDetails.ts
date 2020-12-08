import { Product } from './product';

export class ProductDetails  {
    id: number;
    code: string;
    unitPrice: number;
    qty: number;
    receivedDate: string;
    productId: number;
    product: Product;
}