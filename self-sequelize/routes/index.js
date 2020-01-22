var express = require('express');
var router = express.Router();
var { User } = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  User.findAll()
    .then(users => {
      res.render('sequelize', { title: 'sequelize', users: users });
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
