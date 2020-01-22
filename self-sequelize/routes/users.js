var express = require('express');
var router = express.Router();
var { User } = require('../models');
/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll()
    .then(result => {
      console.log('result');
      console.log(result);
      res.json(result);
    })
    .catch(err => {
      console.error(err);
    });
});
router.post('/', (req, res, next) => {
  console.log(req.body);
  User.create({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.error(err);
    });
});
module.exports = router;
