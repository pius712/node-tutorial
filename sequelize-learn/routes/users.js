var express = require('express');
var router = express.Router();
var { User } = require('../models');
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  User.findAll()
    .then(users => {
      res.json(users);
      // json으로 배열도 보낼 수 있다... json = { object, array, string ...}
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});

router.post('/', (req, res, next) => {
  User.create({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  })
    .then(result => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});
module.exports = router;
