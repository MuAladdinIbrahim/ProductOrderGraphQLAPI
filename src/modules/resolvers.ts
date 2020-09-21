import { query as booksQuery } from "./product/books/resolvers/query"
import { mutation as booksMutation} from "./product/books/resolvers/mutation"
import { query as ordersQuery } from "./order/resolvers/query"
import { mutation as ordersMutation} from "./order/resolvers/mutation"

export const resolvers = {
    Query: {
        // ...booksQuery,
        ...ordersQuery
    }, 
    Mutation:{
        // ...booksMutation,
        ...ordersMutation
    }
}