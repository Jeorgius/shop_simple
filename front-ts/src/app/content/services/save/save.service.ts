import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../entities/product";
import {Order} from "../../entities/order";
import {iOrderList} from "../display/iDisplayContents";

//Module to generate post-queries with creating entities on server-side
@Injectable({
  providedIn: 'root'
})
export class SaveService {

  private JavaServer = "http://localhost:8001";
  constructor(private Http :HttpClient) {}

  saveProduct(newProduct :Product){
    return this.Http.post(this.JavaServer+"/create/product", newProduct,
      {responseType: 'text'}); //I want to receive plain text to display it as result
  }

  addToLastOrder(id,qty){
    return this.Http.post(
      this.JavaServer+"/add_to_cart",
      {product_id: id, qty: qty, date: new Date()},
      {responseType: 'text'}
      )
  }

  createOrder(email){
    return this.Http.post(
      this.JavaServer+"/create/order",
      new Order(email,0, new Date()),
      {responseType: 'text'}
    );
  }

  editOrder(order:iOrderList){
    return this.Http.post(
      this.JavaServer+"/edit/order",
      order,
      {responseType: 'text'}
    );
  }
}
