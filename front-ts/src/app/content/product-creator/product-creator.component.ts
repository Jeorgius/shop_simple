import { Component, OnInit } from '@angular/core';
import {NewProduct} from "./new-product";

@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: [
    './product-creator.component.css',
    '../../app.component.css'
  ]
})
export class ProductCreatorComponent implements OnInit {
  newProduct = new NewProduct('',0,'');
  constructor() { }

  ngOnInit() {
  }

}
