const express = require('express')


const router = express.Router()


// 相应前端的get
router.get('/',(req,res)=>{

    console.log(req.query)


    res.send('Login')

})

// post
router.post('/',(req,res)=>{

    console.log(req.body)
    res.send({ok:1})
})



module.exports = router