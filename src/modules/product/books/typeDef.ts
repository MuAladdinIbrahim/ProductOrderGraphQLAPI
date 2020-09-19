import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    findByName(name: String): Book
    findById(id: String): Book
    booksNamesAndPrices:[Int]

  }
  type Mutation {
    addBook(book: BookInput): Book
  }
  type Book {
    id: ID
    name: String
    price: Float
    description: String
    category: String
  }
  input BookInput {
    id: String
    name: String!
    price: Float
    description: String
    category: String
  }
`;
