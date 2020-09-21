import IProduct from "../product/IProduct";
import { Schema } from "mongoose";

export default interface IOrder {
  // status: string
  // order_no: string
  // total_price: number
  // ordered_at?:Date
  // shipped_at?:Date
  // delievered_at?:Date
  // ship_to?:String

  placeAnOrder(productId: Schema.Types.ObjectId): any;
  changeOrderState(order: any, state: string): Promise<any>;
  //   getProductsInOrder(order_no:string):Promise<IProduct[]>
  findNewOrSavedOrderOfCustomer(customerId: any): any;
  addProductToOrder(productId:any,customerId:any): any;
  saveAnOrder(customerId: any):Promise<any>
  cancelAnOrder(customerId: any):Promise<any>
}
