import {iOrderDetail, iOrderList} from "../services/display/iDisplayContents";

export class Order implements iOrderList{
  public id;
  public orderDetailList :[iOrderDetail];
  //fields both in constructor and public fields in class
  constructor(
    public email: string,
    public sum: number,
    public date: Date
  ){}

}
