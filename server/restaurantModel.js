const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  url: { type: String, required: true },
  user: { type: String, required: true },
  rating: { type: Number },
  comment: { type: String },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('restaurant', restaurantSchema);
