import { Component, OnInit } from '@angular/core';
import {DisplayService} from "../services/display.service";
import {SaveService} from "../services/save.service";

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
  public quantity = 0;
  constructor(
    private Display:DisplayService,
    private Add :SaveService
  ) { }

  ngOnInit() {
    this.Display.displayProducts().subscribe(data => this.products = data);
  }

  addToOrder(product_id,qty){
    this.Add.addToLastOrder(product_id,qty);
    alert("Product " + product_id + " added to Order");
  }
}
