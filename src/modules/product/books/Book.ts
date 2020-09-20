import IProduct from "../IProduct";
import IOrder from "../../order/IOrder";
import { injectable, inject } from "inversify";
import BookModel from "./book.model";
import "reflect-metadata";
import { TYPES } from "../../../types";
import { myContainer } from "../../../inversify.config";
@injectable()
export default class Book implements IProduct {
  private __order: IOrder;
  constructor(
    // public id: string,
    // public name: string,
    // public description: string,
    // public price: number,
    // public category?: string
    @inject(TYPES.IOrder) order: IOrder
  ) {
    this.__order = order;
  }
  async add(product: IProduct): Promise<any> {
    console.log(product);
    return await BookModel.create(product);
  }
  //   async edit(product: IProduct): Promise<IProduct> {
  //     return;
  //   }
  //   async findAndEdit(id: string): Promise<IProduct> {
  //     return;
  //   }
  //   async findAndRemove(id: string): Promise<IProduct> {
  //     return;
  //   }
  //   async filter(filters: string[]): Promise<IProduct> {
  //     return;
  //   }
  async findById(id: string): Promise<any> {
    const bookEntity = await BookModel.findById(id);
    return bookEntity;
  }
  async findByName(name: string): Promise<any> {
    if (!name) return {};
    const bookEntity = await BookModel.find({ name });
    if (bookEntity.length !== 0) {
      return bookEntity[0];
    }
  }
  async booksNamesAndPrices(): Promise<any[]> {
    let prices = await BookModel.find({}).select("price name -_id");
    if (prices.length === 0) return [];
    return prices;
  }
  async addToCart(
    @inject(TYPES.IOrder) order: IOrder,
    customerId: any,
    productId: any
  ): Promise<any> {
    this.__order = order;
    await this.__order.addProductToOrder(productId, customerId);
  }
}
