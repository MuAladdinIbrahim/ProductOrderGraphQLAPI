import IOrder from "./IOrder";
import { injectable } from "inversify";
import orderModel from "./order.model";

@injectable()
export default class Order implements IOrder {
  public constructor() {}
  
  async placeAnOrder(customerId: any): Promise<any> {
    const order = await this.findNewOrSavedOrderOfCustomer(customerId);
    //change status of order to PLACED
    let resultOrder = await this.changeOrderStatus(order, "PLACED");
    return resultOrder;
  }
  async cancelAnOrder(customerId: any): Promise<any> {
    const order = await this.findNewOrSavedOrderOfCustomer(customerId);
    //change status of order to CANCELLED
    let resultOrder = await this.changeOrderStatus(order, "CANCELLED");
    return resultOrder;
  }
  async saveAnOrder(customerId: any): Promise<any> {
    const order = await this.findNewOrSavedOrderOfCustomer(customerId);
    //change status of order to SAVED
    let resultOrder = await this.changeOrderStatus(order, "SAVED");
    return resultOrder;
  }
  async changeOrderStatus(order: any, status: string): Promise<any> {
    let updated = await orderModel.findByIdAndUpdate(order._id,{$set: { status }}, (err: any, success: any) => {
      if (err) return err;
      if (success) return true;
    });
    return updated;
  }

  async findNewOrSavedOrderOfCustomer(customerId: any): Promise<any> {
    const order = await orderModel
      .find({ customer: customerId })
      .where({ status: { $in: ["NEW", "SAVED"] } });
    return order[0];
  }

  createNewOrder() {
    const order = orderModel.create({
      order_no: "1",
      status: "NEW",
      ordered_at: new Date().toLocaleString(),
    });
    return order;
  }

  async addProductToOrder(productId: any, customerId: any): Promise<any> {
    //get order for current user with new or saved status
    //if that order is exist -> add product to it
    //if not -> create order with new status and add product to it
    let order = await this.findNewOrSavedOrderOfCustomer(customerId);
    console.log("order to be checked",order)
    if (order) {
      //add products to existing order
      //TODO update total price
      let resultedOrder = await orderModel.findByIdAndUpdate(
        order._id ,
        {$push: {products:productId},customer:customerId}
      );
      return resultedOrder;
    } else {
      console.log("in else")
      // create new order and add product to it
      let order = await this.createNewOrder();
      //TODO update total price, ship_to:customer.shippingAddress,
      let resultedOrder = await orderModel.findByIdAndUpdate(
        order._id,
        {customer:customerId,$push: {products:productId}}
      );
      return resultedOrder;
    }
  }
}
