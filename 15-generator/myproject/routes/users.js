var express = require('express');
var router = express.Router();
var userModel = require('./../model/UserModel')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





router.post('/user/add',(req,res)=>{
    console.log(req.body)
    // 插入数据库，
    // 创建一个模型，一一对应数据库集合


    const {username ,pwd, age} = req.body

    // console.log(username,pwd,age)



    userModel.create({
      username:username,
      pwd:pwd,
      age:age
    }).then(data=>{
      console.log(123123)

      console.log(data)
    })





    res.send({
      ok:1
    })
})


module.exports = router;
