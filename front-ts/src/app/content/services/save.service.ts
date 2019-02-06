import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../entities/product";
import {Order} from "../entities/order";

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

  addToLastOrder(product_id,qty){
    return this.Http.post<string>(this.JavaServer+"/add_to_order", {product_id: product_id, qty: qty})
  }

  createOrder(email){
    return this.Http.post<string>(this.JavaServer+"/create/order", new Order(email, new Date(),0))
  }
}
