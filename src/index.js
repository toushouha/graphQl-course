import {
    GraphQLServer
} from 'graphql-yoga'
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

// String, Int, Float, Boolean, ID

// title-String price-number, releaseYear-number(optional), rating-number(float optional), inStock(boolean)

const typeDefs = `
  type Query {
    title:String!,
    price:Float!,
    releaseYear:Int,
    rating:Float,
    inStock:Boolean!
  }
`

const resolvers = {
    Query: {
        title: () => 'Hello title',
        price: () => 123.4,
        inStock: () => true
    },
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(() => console.log('Server is running on localhost:4000'))