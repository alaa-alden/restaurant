import graphqlHTTP from 'express-graphql'
import schema from './schema'

const graphqlConfig =
  graphqlHTTP({
    schema,
    graphiql: true
  })

export default graphqlConfig
