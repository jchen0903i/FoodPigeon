const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The document schema should have 3 things
// A "firstName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here
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
});

// You must export your model through module.exports
// The collection name should be 'student'
module.exports = mongoose.model('restaurant', restaurantSchema);
