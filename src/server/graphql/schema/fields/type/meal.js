import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} from 'graphql'

const mealType = new GraphQLObjectType({
  name: 'meal',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    UrlImage: { type: GraphQLString },
    description: { type: GraphQLString }
  }
})
export default mealType
