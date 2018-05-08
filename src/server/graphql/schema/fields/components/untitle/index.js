/* eslint no-unused-vars:0  */
import {
  GraphQLList,
  GraphQLID
  } from 'graphql'
import { person as personModel } from '../../../../../data/model'

import { untitleType } from '../../type'


const untitles = {
  type: new GraphQLList(untitleType),
  description: 'the query for persons',
  resolve(parent, args) {
    return personModel.find({})
  }
}

const untitle = {
  type: untitleType,
  description: 'the query for person',
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return personModel.findById(args.id)
  }
}
export {
  untitles,
  untitle
}
