const express = require('express')
const app = express()
const port = 3000

app.use((req,res,next)=>{
    console.log("11111")
    next()
    console.log("33333333")
    res.send("hello world")
})


app.use((req,res,next)=>{
  console.log("222222222")
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))