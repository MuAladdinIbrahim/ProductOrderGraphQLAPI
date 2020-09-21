import { myContainer } from "../../../inversify.config";
import IOrder from "../IOrder";
import { TYPES } from "../../../types";

const order = myContainer.get<IOrder>(TYPES.IOrder);
export const mutation = {
    addProductToOrder: (parent:any,{productId,customerId}:any)=>{
        return order.addProductToOrder(productId,customerId);
    }
}