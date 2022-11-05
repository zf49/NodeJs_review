const { EventEmitter } = require('events')
let http = require('http')
let https = require('https')
let event


http.createServer((req,res)=>{

        let url = new URL(req.url,"http://localhost:3000/")



        console.log(url)
        

        res.writeHead(200,{
            "Content-Type":"text/html:charset=utf-8",
            "access-control-allow-origin":"*"
    
        })





        switch(url.pathname){
            case "/api/nowplaying":
                // get data

                event = new EventEmitter()


                event.on("play",(data)=>{
                    console.log(data)
                    res.end(data)
                })

                httpget()
                break
            default :
                return res.end("404")
        }


    


}).listen('3000',()=>{
    console.log('success')
})





function httpget(){
    let data = ""
    https.get(`https://www.eventcinemas.co.nz/Movies/GetNowShowing`,(res)=>{
        res.on("data",(chunk)=>{
            data+=chunk
        })

        res.on("end",()=>{
            console.log(data)
            event.emit("play",data)
            // response.end(data)
        })



    })

    


}
    