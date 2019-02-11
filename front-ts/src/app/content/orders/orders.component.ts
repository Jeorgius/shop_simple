import { Component, OnInit } from '@angular/core';
import {DisplayService} from "../services/display/display.service";
import {Router} from "@angular/router";
import {SaveService} from "../services/save/save.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [
    './orders.component.css',
    '../../app.component.css'
  ]
})
export class OrdersComponent implements OnInit {

  public orderList = [];
  public message = "";

  constructor(
    private Display :DisplayService,
    private Save :SaveService,
    private ReRoute :Router
  ) { }

  ngOnInit() {
    this.Display.displayOrders().subscribe(data=>this.orderList = data);
  }

  goToOrder(order_id){
    this.ReRoute.navigate(["/orders", order_id]);
  }

  createOrder(email){
    this.Save.createOrder(email).subscribe(
      data=>this.message=data,
      error => this.message=error
    );
  }

  msgClass(){
    return this.message.includes("Success")? "message" : "error";
  }
}
