import { Department } from './department';
import { Product } from './product';

export class Order  {
    id: number;
    orderDate: string;
    totalPrice: number;
    departmentId: number;
    department: Department;
    products: Product[];
}