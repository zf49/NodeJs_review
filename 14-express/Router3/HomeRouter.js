const express = require('express')


const router = express.Router()



router.get('/',(req,res)=>{
    res.send('Home')

})


router.get('/swiper',(req,res)=>{
    res.send('swiper')

})


router.get('/slide',(req,res)=>{
    res.send('slide')

})




module.exports = router