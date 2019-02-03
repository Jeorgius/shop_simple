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
    return this.Http.post<any>(this.JavaServer+"/product_save", newProduct);
  }
}
