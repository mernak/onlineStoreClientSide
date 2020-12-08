import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../Models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  createOrder(order): Observable<Order> {
    return this.http.post<Order>('https://localhost:44360/api/Order/', JSON.stringify(order), this.httpOptions);
  }
}
