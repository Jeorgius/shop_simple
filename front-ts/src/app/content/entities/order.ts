export class Order{
  //fields both in constructor and public fields in class
  constructor(
    public email: string,
    public sum: number,
    public date: Date
  ){}

}
