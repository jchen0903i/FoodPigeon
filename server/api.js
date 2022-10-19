const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getUser, (req, res) => {
  return res.json(res.locals.feed);
});

router.post('/', controller.addRestaurant, (req, res) => {
  return res.json(res.locals.newRest);
});

module.exports = router;
