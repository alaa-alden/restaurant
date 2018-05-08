import logger from '../../../logger'
import { MealModel } from '../../../data/model'

const SaveMeal = (name, price, UrlImage, description) => {
  if (UrlImage) {
    MealModel.create({ name, price, UrlImage, description }, (e) => {
      if (e) logger.error(e)
      else logger.info('successful data')
    })
  } else logger.error('not found image')
}
export default SaveMeal

