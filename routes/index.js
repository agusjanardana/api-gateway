var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
var express = require('express');
var router = express.Router();
const { APP_NAME } = process.env;

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(APP_NAME);
});

module.exports = router;
