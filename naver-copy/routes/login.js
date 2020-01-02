var express = require('express');
var router = express.Router();
const path = require('path');
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.sendFile(path.join(__dirname, '../views', 'login.html'));
  // res.end();
});

module.exports = router;
