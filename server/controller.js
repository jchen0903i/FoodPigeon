const restaurantModel = require('./restaurantModel');
const { aggregate } = require('./restaurantModel');
const db = require('./restaurantModel');
const User = require('./userModel');

const controller = {};

controller.getFeed = async (req, res, next) => {
  const feed = await db.find({});
  res.locals.feed = feed;
  return next();
};

controller.addRestaurant = async (req, res, next) => {
  console.log(req.body);
  const newRest = new db(req.body);
  newRest.save();
  res.locals.newRest = newRest;

  next();
};

controller.removePost = async (req, res, next) => {
  const id = req.params.id;
  await db.findByIdAndDelete(id);
  next();
};

controller.login = async (req, res, next) => {
  const account = await User.findOne(req.body);
  console.log(account);
  account ? (res.locals.found = true) : (res.locals.found = false);
  next();
};

controller.newUser = async (req, res, next) => {
  const account = req.body;
  const newUser = new User(account);
  newUser.save();
  next();
};

controller.updateLikes = async (req, res, next) => {
  const id = req.params.id;

  const foundPost = await db.findByIdAndUpdate(
    id,
    { $inc: { likes: 1 } },
    { new: true }
  );

  res.locals.likes = foundPost.likes;
  next();
};

module.exports = controller;
