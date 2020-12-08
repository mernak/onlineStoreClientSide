import { Category } from './category';
import { ProductDetails } from './productDetails';

export class Product  {
    id: number;
    name: string;
    categoryId: number;
    category: Category;
    productDetails: ProductDetails[];
    count: number;
}