import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//{_id: asd, name: "tesla"}
const CarSchema = new Schema({
  name: String,
  model: String
});

const Car = mongoose.model('cars', CarSchema)
export default Car;