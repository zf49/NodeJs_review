const express = require('express')



const app =express()


app.get("/",(req,res)=>{
   res.send({
       "asd":23234
   })
})


app.get("/login",(req,res)=>{
    
})


app.listen(3000,()=>{
    console.log("localhost:3000")
})