import {typeDefs as orderTypeDefs} from "../modules/order/typeDef";
import {typeDefs as bookTypeDefs} from "../modules/product/books/typeDef";
import { gql } from "apollo-server-express";

export const typeDefs = gql`${
    orderTypeDefs
}`;

