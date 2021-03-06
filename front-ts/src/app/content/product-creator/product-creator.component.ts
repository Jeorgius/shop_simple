import { Component, OnInit } from '@angular/core';
import {Product} from "../entities/product";
import {SaveService} from "../services/save/save.service";

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
  public message :string = "";

  constructor(private Save :SaveService) { }

  ngOnInit() {}

 submitProduct(){
    this.Save.saveProduct(this.newProduct)
      .subscribe(
        data => this.message=data.toString(),
      error => this.message=error);
  }

  msgClass(){
    return this.message.includes("Success")? "message" : "error";
  }
}
