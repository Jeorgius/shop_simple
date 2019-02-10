import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {iOrderDetail, iOrderList} from "../services/display/iDisplayContents";
import {DisplayService} from "../services/display/display.service";
import {Order} from "../entities/order";
import {SaveService} from "../services/save/save.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  public order = new Order('',0,new Date());
  public message: string;

  constructor(
    private SelectedLink :ActivatedRoute,
    private Display :DisplayService,
    private Save :SaveService
  ) { }

  //passes the link taken from the URL to REST service and get OrderDetailList
  //based on its order_id
  ngOnInit() {
    this.Display.displayOrderDetails(
      this.SelectedLink.snapshot.paramMap.get("id")
    ).subscribe(data=>this.order = data);
  }

  qtyEdit(event: any, oD : iOrderDetail) {
    let i: number = this.order.orderDetailList.indexOf(oD);
    let qty: number = event.target.value;
    //set new qty
    this.order.orderDetailList[i].qty = qty;
    //recalculate total sum to price*qty
    this.order.orderDetailList[i].total = qty * this.order.orderDetailList[i].price;
    this.recalculateOrderSum();
  }

  private recalculateOrderSum(){
    this.order.sum = 0;
    for (let oD of this.order.orderDetailList){
      this.order.sum += oD.total;
    }
  }

}
