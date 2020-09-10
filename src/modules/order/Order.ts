import IOrder from "./IOrder";
import { injectable, inject } from "inversify";
import IProduct from "../product/IProduct";
import { TYPES } from "../../../src/types";

@injectable()
export default class Order implements IOrder {
    private __product:IProduct;
    
    public constructor(
        @inject(TYPES.IProduct) product: IProduct
    ){
        this.__product = product;
    }

//   placeAnOrder(): Promise<IOrder> {
//     return ;
//   }
//   changeOrderState(state: string): Promise<IOrder> {
//     return ;
//   }
//   getProductsInOrder(order_no: string): Promise<IProduct[]>{
//     return ;
//   }
}
