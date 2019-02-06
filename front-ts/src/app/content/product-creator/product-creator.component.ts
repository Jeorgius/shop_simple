import { Component, OnInit } from '@angular/core';
import {Product} from "../entities/product";
import {SaveService} from "../services/save.service";

@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: [
    './product-creator.component.css',
    '../../app.component.css'
  ]
})
export class ProductCreatorComponent implements OnInit {

  public newProduct = new Product('',0,'');
  public resultMsg = "";
  constructor(private Save :SaveService) { }

  ngOnInit() {}

  submitProduct(){
    this.Save.saveProduct(this.newProduct)
      .subscribe(data => this.resultMsg = data,
                error => this.resultMsg = error);
  }
}
