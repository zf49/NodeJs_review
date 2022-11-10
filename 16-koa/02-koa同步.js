const Koa = require('koa')


const app = new Koa()



app.use((cxt,next)=>{
    console.log("11111")
    next()
    console.log("33333333")
    
})


app.use((cxt,next)=>{
    console.log("2222222")
   
})



app.listen(3000,()=>{
    console.log("koa同步")
})



