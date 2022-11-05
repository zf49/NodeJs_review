// import http from 'http'
const http = require('http')

// const url = require('url')



http.createServer((req,res)=>{

    let urlobj = new URL(req.url,'http://localhost:3000')
    
    console.log(urlobj)

    switch(urlobj.pathname){
        case "/name":
           return res.end(`jsonp(${
                JSON.stringify({
                name:'Chris',
                age:100
            })
           })`)
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