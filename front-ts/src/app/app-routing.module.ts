import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router";
import {MainComponent} from "./content/main/main.component";
import {ProductCreatorComponent} from "./content/product-creator/product-creator.component";
import {ProductsComponent} from "./content/products/products.component";
import {OrdersComponent} from "./content/orders/orders.component";
import {OrderDetailComponent} from "./content/order-detail/order-detail.component";


const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full' },
  {path: 'main', component: MainComponent},
  {path: 'product_create', component: ProductCreatorComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'orders/:orderdetail', component: OrderDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [
  MainComponent,
  ProductCreatorComponent,
  ProductsComponent,
  OrdersComponent,
  OrderDetailComponent
];
