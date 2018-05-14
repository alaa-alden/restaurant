import logger from '../../../../logger'
import { order } from '../../../../data/model'

const saveOrder = (name, image) => {
  logger.info(image)
  if (image) {
    order.create({ order: name, url_Image: image }, (e) => {
      if (e) logger.error(e)
      else logger.info('successful data')
    })
  } else logger.error('not found image')
}
export default saveOrder

