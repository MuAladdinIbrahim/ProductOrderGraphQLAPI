import { Container } from "inversify";
import { TYPES } from "./types";
import IProduct from "./modules/product/IProduct"
import Book from "./modules/product/books/Book"
import IOrder from "./modules/order/IOrder";
import Order from "./modules/order/Order";

const myContainer = new Container();
myContainer.bind<IProduct>(TYPES.IProduct).to(Book);
myContainer.bind<IOrder>(TYPES.IOrder).to(Order);

export { myContainer };