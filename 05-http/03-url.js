import http from 'http'
import {renderHTML,renderState} from './module/renderState.js'

import url from 'url'





// http.createServer((req,res)=>{

  

//     if(req.url==='/favicon.ico'){
//         return
//     }


//     console.log(req.url)

//     res.writeHead(renderState(req.url),{"Content-Type":"text/html;charset=utf-8"})

//     res.write(renderHTML(req.url))
//     res.end()
// }
// )




let server = http.createServer()

server.on("request",(req,res)=>{


        if(req.url==='/favicon.ico'){
            return
        }
    




    
        // console.log(url.parse(req.url).pathname)



        // parse 解析url地址，
        // url.parse(req.url,true)
        // 第二个参数为true时query解析为对象
        // 返回此类型
        // Url {
        //     protocol: null,
        //     slashes: null,
        //     auth: null,
        //     host: null,
        //     port: null,
        //     hostname: null,
        //     hash: null,
        //     search: '?id=1&name=chris',
        //     query: [Object: null prototype] { id: '1', name: 'chris' },
        //     pathname: '/api/home',
        //     path: '/api/home?id=1&name=chris',
        //     href: '/api/home?id=1&name=chris'
        //   }



    
        let pathname= url.parse(req.url).pathname


        let urlobj = url.parse(req.url,true)
        console.log(urlobj)


        res.writeHead(renderState(pathname),{"Content-Type":"text/html;charset=utf-8"})
    
        res.write(renderHTML(pathname))

        res.end()
    })

server.listen(3000,()=>{
    console.log('success')
})





var a =url.resolve('/one/two/',"three")

console.log(a)