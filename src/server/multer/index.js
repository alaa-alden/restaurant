import multer from 'multer'
import path from 'path'

// Init Upload
const storage = multer.diskStorage({
  destination: path.join(__dirname, '/files/'),
  filename(req, file, cb) {
    cb(null, file.originalname)
  }
})
// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  // Check mime
  const mimetype = filetypes.test(file.mimetype)

  if (mimetype && extname) {
    return cb(null, true)
  }
  return cb('Error: Images Only!')
}
// big upload
const upload = multer({
  storage,
  limits: { fileSize: 10000000 },
  fileFilter(req, file, cb) {
    checkFileType(file, cb)
  }
})
// end config upload with multer
export default upload
