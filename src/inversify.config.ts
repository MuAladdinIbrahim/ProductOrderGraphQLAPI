import { Container } from "inversify";
import { TYPES } from "./types";
import IProduct from "./modules/product/IProduct"
import Book from "./modules/product/books/Book"

const myContainer = new Container();
myContainer.bind<IProduct>(TYPES.IProduct).to(Book);

export { myContainer };