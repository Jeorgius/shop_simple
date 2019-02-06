import { Component, OnInit } from '@angular/core';
import {DisplayService} from "../services/display.service";
import {Router} from "@angular/router";
import {SaveService} from "../services/save.service";

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

  constructor(
    private Display :DisplayService,
    private Save :SaveService,
    private ReRoute :Router
  ) { }

  ngOnInit() {
    this.Display.displayOrders().subscribe(data=>this.orderList = data);
  }

  goToOrder(order){
    this.ReRoute.navigate(["/orders", order.order_id]);
  }

  createOrder(email){
    this.Save.createOrder(email);
  }

}
