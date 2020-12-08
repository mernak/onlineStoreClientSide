import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: Product[];
  purchasedProducts: Product[] = [];
  id;
  priceCounter;
  closeResult: string;
 
  // tslint:disable-next-line: variable-name
  constructor(private productService: ProductsService, private _Activatedroute: ActivatedRoute,
              // tslint:disable-next-line: variable-name
              private _router: Router, private modalService: NgbModal) { }
  sub;
  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
       this.id = params.get('id');
       this.productService.getProducts(this.id).subscribe((data: any[]) => {
        this.products = data;
        this.products.forEach(e => {
          e.count = 0 ;
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0 ; i < e.productDetails.length ; i++){
            e.count += e.productDetails[i].qty;
          }
        });
      });
      });
  }

  counter(i: number) {
    return new Array(i);
}

 addToCart(products){
   // tslint:disable-next-line: prefer-for-of
   for (let i = 0 ; i < products.length ; i++){
    let name = products[i].name;
    let val = document.getElementById(name).value;

    if (val > 0){
      products[i].count = val;
      this.purchasedProducts.push(products[i]);
    }
   }

   console.log("Purchased ");
   console.log(this.purchasedProducts);
 }
viewOrder(){
  this._router.navigate(['/order']);
}
open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
}
