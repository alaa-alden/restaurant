import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql'

import { untitles, untitle } from './fields'

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'the root query',
  fields: {
    untitles,
    untitle
  }
})
const schema = new GraphQLSchema({
  query: RootQuery
})
export default schema
