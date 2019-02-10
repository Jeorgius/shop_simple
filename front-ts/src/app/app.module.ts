import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './content/products/products.component';
import { OrdersComponent } from './content/orders/orders.component';
import { OrderDetailComponent } from './content/order-detail/order-detail.component';
import { ProductCreatorComponent } from './content/product-creator/product-creator.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './content/main/main.component';
import {DisplayService} from "./content/services/display/display.service";
import {SaveService} from "./content/services/save/save.service";
import {XmlMarshallerService} from "./content/services/xml/xml-marshaller.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdersComponent,
    OrderDetailComponent,
    ProductCreatorComponent,
    NavigationComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DisplayService,
    SaveService,
    XmlMarshallerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
