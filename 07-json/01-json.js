
// import http from 'http'
const http = require('http')

// const url = require('url')



http.createServer((req,res)=>{

    let urlobj = new URL(req.url,'http://localhost:3000')
    
    console.log(urlobj)

    res.writeHead(200,{
        "Content-Type":"application/json:charset=utf-8",
        "access-control-allow-origin":"*"

    })






    switch(urlobj.pathname){
        case "/name":
           return res.end(`${
                JSON.stringify({
                name:'Chris-json',
                age:100
            })
           }`)
        case "/detail":
           return res.end(JSON.stringify({
                name:'Zhifang Wang',
                age:26
            }))
        default :
            return res.end('404')
    }




   


}).listen("3000",()=>{
    console.log('jsonp')
})