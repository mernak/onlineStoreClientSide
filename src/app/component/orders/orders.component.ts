import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/Models/order';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';
import { OrdersService } from 'src/app/Services/orders.service';
import { Department } from 'src/app/Models/department';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _Activatedroute: ActivatedRoute,
    // tslint:disable-next-line: variable-name
              private _router: Router, private productService: ProductsService, private orderService: OrdersService) { }
sub;
orders: Order[];
order: Order ;
ordersPrices: any[] = [];
department: Department ;
finalPrice: any = 0;
@Input() purchased: Product[];


  ngOnInit(): void {
    this.purchased.forEach(element => {
     this.calculatePrice(element.id, element.count);
    });
    console.log(this.ordersPrices);
  }

  calculatePrice(id, count){
   this.productService.getProductPrice(id, count).subscribe((data: any[]) => {
    this.ordersPrices.push(data);
    this.finalPrice += data;
    return data;
  });

  }

  checkOut(){

    const _department: Department = {
      id: 1,
      name: "Finance",
      orders: []
    }
    const newOrder: Order = {
     totalPrice : this.finalPrice,
      departmentId : 1,
      orderDate: '2019-01-16',
      department: _department,
      products : this.purchased,
      id: 0
};

    this.orderService.createOrder(this.order).subscribe();
  }
}
