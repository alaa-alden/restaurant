import mongoose from 'mongoose'

import secrets from '../../secrets'

const connect = () => {
  const DB_URL = secrets('data', 'db_uri_online')
  mongoose.connect(DB_URL)
}
export default connect
