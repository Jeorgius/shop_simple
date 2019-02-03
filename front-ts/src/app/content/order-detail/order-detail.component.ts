import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {iOrderDetail} from "../iDisplayContents";
import {DisplayService} from "../display.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  public orderDetailList = [];
  constructor(
    private SelectedLink :ActivatedRoute,
    private Display :DisplayService
  ) { }

  //pass the link taken from the URL to REST service and get OrderDetailList
  //based on its orderId
  ngOnInit() {
    this.Display.displayOrderDetails(
      this.SelectedLink.snapshot.paramMap.get("order")
    );
  }

}
