import { myContainer } from "../../../../inversify.config";
import { TYPES } from "../../../../types";
import IProduct from "../../IProduct";
const book = myContainer.get<IProduct>(TYPES.IProduct);

export const mutation = {
  addBook: (parent: any, args: any) => {
    return book.add(args.book);
  },
};
