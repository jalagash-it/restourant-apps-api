var express = require('express');
var router = express.Router();
const authCtrl = require('../controllers/auth.controller');
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/login', authCtrl.login);
module.exports = router;
