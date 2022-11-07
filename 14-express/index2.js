const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./route2/indexRouter.js')


app.get('/', (req, res) => res.send('test'))

// 应用级别
app.use((req,res,next)=>{
    console.log("验证token")
    next()
})

// Route
// 只要路径走到/api 那么就会走到indexRouter 
// 相当于可以控制1级路由
app.use('/api',indexRouter)









app.listen(port, () => console.log(`Example app listening on port ${port}!`))