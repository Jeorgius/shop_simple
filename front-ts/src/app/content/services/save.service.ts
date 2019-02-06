import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NewProduct} from "../product-creator/new-product";

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  private JavaServer = "http://localhost:8001";
  constructor(private Http :HttpClient) {}

  saveProduct(newProduct :NewProduct){
    return this.Http.post<string>(this.JavaServer+"/create/product", newProduct);
  }

  addToLastOrder(product_id,qty){
    return this.Http.post<string>(this.JavaServer+"/add_to_order", [product_id,qty])
  }

  createOrder(email){
    return this.Http.post<string>(this.JavaServer+"/create/order",[email])
  }
}
