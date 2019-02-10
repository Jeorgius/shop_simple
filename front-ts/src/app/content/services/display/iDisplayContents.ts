// Interfaces to display content are all located here, so the files with them won't multiply very quickly

import {Order} from "../../entities/order";
import {Product} from "../../entities/product";

export interface iProductList {
  id: number,
  price: number,
  title: string,
  description: string
}

export interface iOrderList{
  id: number,
  email: string,
  date: Date,
  orderDetailList: [iOrderDetail],
  sum: number
}

export interface iOrderDetail {
  id: number,
  price: number,
  qty: number,
  total: number,
  order: Order,
  product: Product
}
