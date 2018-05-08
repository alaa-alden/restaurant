const secrets = {
  data: {
    db_uri_online: 'mongodb://',
    db_uri: 'mongodb://'
  },
  cloudinary: {
    cloud_name: 'name',
    api_key: 'key',
    api_secret: 'secret'
  }
}
const requestSecret = (type, element) => {
  if (element) return secrets[type][element]
  return secrets[type]
}

export default requestSecret
