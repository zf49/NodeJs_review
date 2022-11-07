const express = require('express')


const app = express();


app.get('/',(req,res)=>{
    res.send('asd')
})



const func1 = (req,res,next)=>{
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa')
    // 验证用户
    console.log('验证token')
    const isValid = true

    if(isValid){

        res.fnc1 = "这是func1"

        next()
    }else{
        // 返回错误
        res.send('error')
    }
}

const func2 = (req,res)=>{

    console.log(res.fnc1+"asdasdasd")

    res.send({'list':[1,2,3]})
}

app.use(func1)


app.get("/home",[func1,func2])




app.listen('3000',()=>{
    console.log('success')
})
