/* eslint no-unused-vars:0  */
import {
  GraphQLList,
  GraphQLID
  } from 'graphql'
import { MealModel } from '../../../../../data/model'

import { mealType } from '../../type'


const meals = {
  type: new GraphQLList(mealType),
  description: 'the query for meals',
  resolve(parent, args) {
    return MealModel.find({})
  }
}

const meal = {
  type: mealType,
  description: 'the query for meal',
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return MealModel.findById(args.id)
  }
}
export {
  meals,
  meal
}
