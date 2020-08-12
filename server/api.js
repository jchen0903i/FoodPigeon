const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/login', controller.login, (req, res) => {
  return res.status(200).json(res.locals.found);
});

router.post('/signup', controller.newUser, (req, res) => {
  return res.status(200).json('Signed up!');
});

router.get('/', controller.getFeed, (req, res) => {
  return res.json(res.locals.feed);
});

router.post('/', controller.addRestaurant, (req, res) => {
  return res.json(res.locals.newRest);
});

router.delete('/:id', controller.removePost, (req, res) => {
  return res.status(200).json('deleted');
});

router.patch('/:id', controller.updateLikes, (req, res) => {
  return res.status(200).json(res.locals.likes);
});

router.patch('/:id', controller.updateLikes, (req, res) => {
  return res.status(200).json(res.locals.likes);
});

module.exports = router;
