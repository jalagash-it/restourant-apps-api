var express = require('express');
var router = express.Router();

const auth = require('./auth')
const products = require('./products');
const users = require('./users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/auth', auth);
router.use('/users', users);
router.use('/products', products);

module.exports = router;
