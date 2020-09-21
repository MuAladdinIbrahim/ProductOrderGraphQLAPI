import { myContainer } from "../../../inversify.config";
import IOrder from "../IOrder";
import { TYPES } from "../../../types";

const order = myContainer.get<IOrder>(TYPES.IOrder);
export const mutation = {
    addProductToOrder: (parent:any,{productId,customerId}:any)=>{
        return order.addProductToOrder(productId,customerId);
    },
    saveAnOrder: (parent:any,{customerId}:any)=>{
        return order.saveAnOrder(customerId)
    },
    cancelAnOrder: (parent:any,{customerId}:any)=>{
        return order.cancelAnOrder(customerId)
    },
    placeAnOrder: (parent:any,{customerId}:any)=>{
        return order.placeAnOrder(customerId)
    },
}