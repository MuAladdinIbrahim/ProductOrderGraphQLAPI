import IOrder from "./IOrder";
import { injectable } from "inversify";
import { Schema } from "mongoose";
import orderModel from "./order.model";

@injectable()
export default class Order implements IOrder {

  public constructor() {}

  async placeAnOrder(customerId: any): Promise<any> {
    const order = this.findNewOrSavedOrderOfCustomer(customerId);
    //change status of order to PLACED
    let result = await this.changeOrderState(order, "PLACED");
    if(!result) return result; 
    return order;
  }
  async cancelAnOrder(customerId: any):Promise<any>{
    const order = this.findNewOrSavedOrderOfCustomer(customerId);
    //change status of order to CANCELLED
    let result = await this.changeOrderState(order, "CANCELLED");
    if(!result) return result; 
    return order;
  }
  async saveAnOrder(customerId: any):Promise<any>{
    const order = this.findNewOrSavedOrderOfCustomer(customerId);
    //change status of order to SAVED
    let result = await this.changeOrderState(order, "SAVED");
    if(!result) return result; 
    return order;
  }
  async changeOrderState(order: any, state: string): Promise<any> {
    await order.updateOne({ status: state }, (err: any, success: any) => {
      if (err) return err;
      if (success) return true;
    });
    return false;
  }

  async findNewOrSavedOrderOfCustomer(customerId: any): Promise<any> {
    const order = orderModel
      .find({ customer: customerId })
      .where({ status: { $in: ["NEW", "SAVED"] } });
    return order;
  }
  
  createNewOrder() {
    const order = orderModel.create({
      order_no: Schema.Types.ObjectId,
      status: "NEW",
      ordered_at: new Date().toLocaleString(),
    });
    return order;
  }

  async addProductToOrder(productId: any, customerId: any): Promise<any> {
    //get order for current user with new or saved status
    //if that order is exist -> add product to it
    //if not -> create order with new status and add product to it
    const order = await this.findNewOrSavedOrderOfCustomer(customerId);
    if (order) {
      //add products to existing order
      //TODO update total price
      order.updateOne(
        { $push: { products: productId } },
        (err: any, success: any) => {
          if (err) console.log(err);
          if (success) console.log(success);
        }
      );
    } else {
      // create new order and add product to it
      const order = await this.createNewOrder();
      //TODO update total price, ship_to:customer.shippingAddress,
      order.updateOne(
        { customer: customerId },
        { $push: { products: productId } },
        (err: any, success: any) => {
          if (err) console.log(err);
          if (success) console.log(success);
        }
      );
    }
  }
}
