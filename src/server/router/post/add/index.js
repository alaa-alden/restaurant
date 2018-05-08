import rimraf from 'rimraf'
import path from 'path'
import cloudinary from 'cloudinary'

import SaveData from './saveData'
import secrets from '../../../secrets/'
import logger from '../../../logger'

cloudinary.config(secrets('cloudinary'))

const add = (req, res) => {
  // save in cloudinay
  const name = req.file.filename
  const end = name.length - path.extname(name).toLowerCase().length
  cloudinary.v2.uploader.upload(
    req.file.path, {
      public_id: name.substr(0, end)
    },
    (error, result) => {
      // result from cloudinary
      // now save data
      SaveData(req.body.name, req.body.price, result.url, req.body.description)
    })

  // delete images from  sereve
  setTimeout(
    () => {
      rimraf(
        path.join(process.cwd(), 'src/server/multer/files/*'),
        () => {
          logger.info(`done from ${path.join(process.cwd(), 'src/server/multer/files/*')}`)
        })
    }, 30000)
  res.send('good')
}
export default add
