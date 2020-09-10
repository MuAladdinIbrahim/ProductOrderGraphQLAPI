import { myContainer } from "../../../../inversify.config";
import { TYPES } from "../../../../types";
import IProduct from "../../IProduct";

const book = myContainer.get<IProduct>(TYPES.IProduct);

export const query = {
    findByName: async (parent:any, {name}:any)=>{
        return await book.findByName(name)
    },
    findById: async (parent:any, {id}:any)=>{
        return await book.findById(id)
    }
}
