import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {iOrderDetail, iOrderList} from "../services/display/iDisplayContents";
import {DisplayService} from "../services/display/display.service";
import {Order} from "../entities/order";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  public order: iOrderList;

  constructor(
    private SelectedLink :ActivatedRoute,
    private Display :DisplayService
  ) { }

  //passes the link taken from the URL to REST service and get OrderDetailList
  //based on its order_id
  ngOnInit() {
    this.Display.displayOrderDetails(
      this.SelectedLink.snapshot.paramMap.get("id")
    ).subscribe(data=>this.order = data);
  }


}
