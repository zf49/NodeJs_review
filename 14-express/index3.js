const express = require('express')
const app = express()
const port = 3000

const HomeRouter = require('./Router3/HomeRouter')
const LoginRouter = require('./Router3/LoginRouter')

app.get('/', (req, res) => res.send('test123123123'))

// 应用级别
app.use((req,res,next)=>{
    console.log("验证token")
    next()
})

// Route
// 只要路径走到/api 那么就会走到indexRouter 
// 相当于可以控制1级路由
// app.use('/api',indexRouter)
app.use('/home',HomeRouter)
app.use('/login',LoginRouter)


app.use((req,res)=>{
    res.status(404).send("缺失文件")
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))