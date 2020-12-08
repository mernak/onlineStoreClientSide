import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getProducts(id){
    return this.http.get('https://localhost:44360/api/Product/' + id);
  }

  getProductPrice(id, count){
    return this.http.get('https://localhost:44360/api/Product/' + id + '/' + count);
  }
}
