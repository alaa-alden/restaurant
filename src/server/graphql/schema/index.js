import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql'

import { meals, meal } from './fields'

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'the root query',
  fields: {
    meals,
    meal
  }
})
const schema = new GraphQLSchema({
  query: RootQuery
})
export default schema
