import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../entities/product";
import {Order} from "../../entities/order";

//Module to generate post-queries with creating entities on server-side
@Injectable({
  providedIn: 'root'
})
export class SaveService {

  private JavaServer = "http://localhost:8001";
  constructor(private Http :HttpClient) {}

  saveProduct(newProduct :Product){
    return this.Http.post<string>(this.JavaServer+"/create/product", newProduct);
  }

  addToLastOrder(id,qty){
    alert(id);
    return this.Http.post<string>(this.JavaServer+"/add_to_cart", {product_id: id, qty: qty, date: new Date()})
  }

  createOrder(email){
    alert(new Date());
    return this.Http.post<string>(this.JavaServer+"/create/order", new Order(email,0, new Date()));
  }
}
