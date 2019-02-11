import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {iOrderDetail} from "../services/display/iDisplayContents";
import {DisplayService} from "../services/display/display.service";
import {Order} from "../entities/order";
import {SaveService} from "../services/save/save.service";
import {XmlMarshallerService} from "../services/xml/xml-marshaller.service";
import {saveAs} from "file-saver";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  public order = new Order('',0,new Date());
  public message = "";

  constructor(
    private SelectedLink :ActivatedRoute,
    private Display :DisplayService,
    private Save :SaveService,
    private Xml :XmlMarshallerService
  ) { }

  ngOnInit() {
    this.getOrder();
  }

  private getOrder(){
    //passes the link taken from the URL to REST service and gets OrderDetailList
    //based on its order_id
    this.Display.displayOrderDetails(
      this.SelectedLink.snapshot.paramMap.get("id")
    ).subscribe(data=>this.order = data);
  }

  qtyEdit(qty:number, oD : iOrderDetail) {
    let i :number = this.order.orderDetailList.indexOf(oD); //index of edited orderDetail
    if(qty<0) qty=0;
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

  //async to wait for unnecessary rows being deleted from database
  public async saveOrder(){
    await this.Save.editOrder(this.order).subscribe(
      data => this.message = data,
      error => this.message = error
    );
    this.getOrder();
  }

  msgClass(){
    return this.message.startsWith("S")? "message" : "error";
  }



  public downloadXml(){
    this.Xml.downloadXml(this.order).subscribe(
      data => {
        //save incoming data in xml to filename = 'order' + order_id
        saveAs(data,"order"+this.order.id);
      }
    )
  }
}
