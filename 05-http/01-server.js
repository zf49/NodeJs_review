import http from 'http'


// create server


http.createServer((req,res)=>{
    // recieve brower's param, return render content
    // req -> brower param
    // res -> return data 

// method 1 :
    // res.write("123123")
    // res.write("1231231111111")
    // res.write("1231232222222")
    // res.write("1231233333333333")
    // res.end()


// method 2 :
//         res.end("[1,2,3,4,5]")

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write(`<html>
    <b>bold+asd啊时间快点好zxc</b></html>`)
    res.end()




}).listen(3000,()=>{
    console.log("server start")
})




