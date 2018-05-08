import mongoose from 'mongoose'
// Schema for mongoose then model for complie schema
const mySchema = new mongoose.Schema({
  name: String,
  price: Number,
  UrlImage: String,
  description: String
})
// model for mongoose
const mealModel = mongoose.model('meal', mySchema, 'meals')
export default mealModel
