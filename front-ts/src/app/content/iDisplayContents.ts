// Interfaces to display content are all located here, so the files with them won't multiply very quickly

export interface iProductList {
  product_id: number,
  price_actual: number,
  title: string,
  description: string
}

export interface iOrderList{
  order_id: number,
  email: string,
  createdDate: string,
  orderdetail: [iOrderDetail],
  sum: number
}

export interface iOrderDetail {
  orderdetail_id:number,
  price_added: number,
  qty: number,
  price_total: number
}
