import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getAllOrders:Order
  }
  type Mutation {
    addProductToOrder(productId:String,customedId:String): Order
  }
  type Order {
    status: String
    order_no: String
    total_price: Int
    ordered_at:String
    shipped_at:String
    delievered_at:String
    ship_to:String
  }
  input OrderInput {
    status: String
    order_no: String
    total_price: Int
    ordered_at:String
    shipped_at:String
    delievered_at:String
    ship_to:String
  }
`;
