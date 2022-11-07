const express = require('express')



const app =express()


app.get("/",(req,res)=>{
   res.send({
       "asd":23234
   })
})


app.get("/login",(req,res)=>{
    res.send("login")

})


// app.get("/home",(req,res,next)=>{

//     // 验证用户
//     console.log('验证token')
//     const isValid = false

//     if(isValid){
//         next()
//     }else{
//         // 返回错误
//         res.send('error')
//     }
// },(req,res)=>{
//     res.send({'list':[1,2,3]})
// })

const func1 = (req,res,next)=>{

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


app.get("/home",[func1,func2])




// app.get("/ab?cd",(req,res)=>{
//     res.send("ok")

// })

app.get("/ab/:id/:id2",(req,res)=>{
    res.send('ok')

})






app.listen(3000,()=>{
    console.log("localhost:3000")
})