import logger from '../../../../logger'
import { untitle } from '../../../../data/model'


const Data = (req, res) => {
  // logger.info(req.body.name)
  const Name = req.body.name

  untitle.create({ name: Name }, (e) => {
    if (e) logger.error(e)
  })

  res.send(`sucessfully save name in DATABASE for this >>>>${req.body.name}`)
}
export default Data

