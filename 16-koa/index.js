const Koa = require("koa")

const app = new Koa()



app.use((ctx,next)=>{

    ctx.body = {name:"body"}


    console.log(ctx.request.path)




})

app.listen(3000,()=>{
    console.log("success")
})