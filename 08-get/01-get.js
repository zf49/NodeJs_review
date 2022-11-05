let http = require('http')
let https = require('https')




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
                httpget(res)
                break
            default :
                return res.end("404")
        }


    


}).listen('3000',()=>{
    console.log('success')
})





function httpget(response){
    let data = ""
    https.get(`https://www.eventcinemas.co.nz/Movies/GetNowShowing`,(res)=>{
        res.on("data",(chunk)=>{
            data+=chunk
        })

        res.on("end",()=>{
            console.log(data)
            response.end(data)
        })



    })

    


}
    