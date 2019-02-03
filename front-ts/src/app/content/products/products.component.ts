import { Component, OnInit } from '@angular/core';
import {DisplayService} from "../services/display.service";

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
  constructor(private Display:DisplayService) { }

  ngOnInit() {
    this.Display.displayProducts().subscribe(data => this.products = data);
  }
}
