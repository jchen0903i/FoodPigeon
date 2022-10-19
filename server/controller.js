const restaurantModel = require('./restaurantModel');
const { aggregate } = require('./restaurantModel');
const db = require('./restaurantModel');

const controller = {};

controller.getUser = async (req, res, next) => {
  const feed = await db.find({});
  res.locals.feed = feed;
  return next();
};

controller.addRestaurant = async (req, res, next) => {
  const newRest = new db(req.body);
  newRest.save();
  res.locals.newRest = newRest;

  next();
};

controller.getRecs = async (req, res, next) => {};

module.exports = controller;
