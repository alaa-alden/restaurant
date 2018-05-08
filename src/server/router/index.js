import { ReactApp } from './get'
import { add } from './post'
import upload from '../multer'

function appRouteHandler(req, res) {
  ReactApp(req, res)
}
function Add(req, res) {
  add(req, res)
}

function initRoutes(app) {
  app.get('*', appRouteHandler)
  // post
  app.post('/add', upload.single('image'), Add)
}

export default initRoutes
