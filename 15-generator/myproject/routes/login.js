var express = require('express');
var router = express.Router();

var userModel = require('./../model/UserModel')




/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("get请求")
  res.render('login');

});















module.exports = router;
