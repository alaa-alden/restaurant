import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} from 'graphql'

const untitleType = new GraphQLObjectType({
  name: 'untitle',
  fields: {
    id: { type: GraphQLID },
    untitle: { type: GraphQLString }
  }
})
export default untitleType
