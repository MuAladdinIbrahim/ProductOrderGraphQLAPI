import IProduct from "../IProduct";
import { injectable } from "inversify";
import BookModel from "./book.model";

@injectable()
export default class Book implements IProduct {
  constructor(
    // public id: string,
    // public name: string,
    // public description: string,
    // public price: number,
    // public category?: string
  ) {}
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
    const bookEntity = await BookModel.find({ name });
    if (bookEntity.length !== 0) {
      return bookEntity[0];
    }
  }
  async addProductToCart(product:IProduct):Promise<any> {

  }
}
