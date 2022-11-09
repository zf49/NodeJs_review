var express = require('express');
var router = express.Router();
var userModel = require('./../model/UserModel')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





router.post('/login',async function(req,res){
  console.log(req.body)

  const {username,pwd} = req.body

 const data =  await userModel.find({username,pwd})

  console.log(data)

  if(data.length >= 1 ){
      // 设置session对象
      req.session.user=data[0]
      console.log(123)
      res.send({
        ok:1
      })
     
  }else{
      
      res.send({
          failed:1
      })
  }


})






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




// 获取id
router.post("/user/add/:id",(req,res)=>{
    console.log(req.body,req.params.id)

    const {username,pwd,age} = req.body



    userModel.updateOne({_id:req.params.id},{username,pwd,age}).then(data=>{

      res.send({ok:1})

    })






})




router.get("/user/delete/:id",(req,res)=>{

    userModel.deleteOne({_id:req.params.id}).then((data)=>{
        res.send({ok:1})
    })


})




router.get('/user/list',(req,res)=>{

// console.log(req.path)
  userModel.find({},["username","age"]).sort({age:-1}).then((data)=>{
    console.log(data)

    res.send(data)

  })


})






module.exports = router;
