import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {iOrderList,iOrderDetail,iProductList} from "./iDisplayContents";

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  private JavaServer = "http://localhost:8001";
  constructor(private Http: HttpClient) {}

  displayProducts(){
    return this.Http.get<iProductList[]>(this.JavaServer+"/products");
  }
  displayOrders(){
    return this.Http.get<iOrderList[]>(this.JavaServer+"/orders")
  }
  displayOrderDetails(orderId){
    return this.Http.get<iOrderDetail[]>(this.JavaServer+"/orders/"+orderId);
  }
}
