import { query as booksQuery } from "./product/books/resolvers/query"
import { mutation as booksMutation} from "./product/books/resolvers/mutation"

export const resolvers = {
    Query: {
        ...booksQuery
    }, 
    Mutation:{
        ...booksMutation
    }
}