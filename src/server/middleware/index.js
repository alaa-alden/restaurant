import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'
import connect from '../data/connect'
import graphqlConfig from '../graphql'

const initMiddleware = (app) => {
  // for connect any server or any client as phone , allow cross-origin request
  app.use(cors())
// for read data from page
// parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
  app.use(bodyParser.json())
// end config read
  app.use('', express.static(path.join(__dirname, '../../../bower_components')))
  app.use('/client', express.static(path.join(__dirname, '../../../build/client')))
  // connect with database
  connect()
  // config graphql server
  app.use('/graphql', graphqlConfig)
}
export default initMiddleware
