import { Component, OnInit } from '@angular/core';
import {DisplayService} from "../services/display/display.service";
import {SaveService} from "../services/save/save.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [
    './products.component.css',
    '../../app.component.css'
  ]
})
export class ProductsComponent implements OnInit {

  public products = [];
  public message = "";

  constructor(
    private Display:DisplayService,
    private Add :SaveService
  ) { }

  ngOnInit() {
    this.Display.displayProducts().subscribe(data => this.products = data);
  }

  addToOrder(product_id,qty){
    this.Add.addToLastOrder(product_id,qty).subscribe(
      data=>this.message=data,
      error=>this.message=error
    );
  }

  msgClass(){
    return this.message.includes("Success")? "message" : "error";
  }
}
