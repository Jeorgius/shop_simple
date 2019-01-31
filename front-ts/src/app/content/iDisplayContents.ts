// Interfaces to display content are all located here, so the files with them won't multiply very quickly

export interface IProductList {
  product_id: number,
  price_actual: number,
  title: string,
  description: string
}

export interface IOrderList{
  order_id: number,
  email: string,
  createdDate: string,
  orderdetail: [IOrderDetail]
}

export interface IOrderDetail {
  orderdetail_id:number,
  price_added: number,
  qty: number,
  price_total: number
}
