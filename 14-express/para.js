const express = require('express')
const app = express()
const port = 3000
// 配置post 参数的middleware
app.use(express.urlencoded({extended:false}))
// 可接收前端json格式的请求
app.use(express.json())



app.use(express.static('public'))
app.use(express.static('static'))




const homeRouter = require('./Router3/HomeRouter')
const loginRouter = require('./Router3/loginRouter')

app.get('/', (req, res) => res.send('参数请求'))

app.use('/home',homeRouter)
app.use('/login',loginRouter)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))