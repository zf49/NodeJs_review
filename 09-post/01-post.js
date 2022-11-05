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
                httppost(res)
                break
            default :
                return res.end("404")
        }


    


}).listen('3000',()=>{
    console.log('success')
})





function httppost(resp){
    let data = ""

    console.log("asdasdasdasdasdasdasd")
    
    let option = {
        hostname:"m.xiaomiyoupin.com",
        port:"443",
        path:'/mtop/mf/resource/data/batchList',
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        }
    }

   let req = https.request(option,(res)=>{
        res.on("data",chunk=>{
            data+=chunk
        })
        res.on("end",()=>{
            console.log(data)
            resp.end(data)

        })
    })

    req.write(JSON.stringify([{},["newer_popup_ad","download_options"]]))
    req.end()
    


}
    