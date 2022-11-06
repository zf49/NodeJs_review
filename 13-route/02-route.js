const fs = require("fs")


// function route(response,pathname){
//     switch(pathname){
//         case "/login":
//             response.writeHead(200,{
//                 "Content-Type":"text/html;charset=utf-8"
//             })
//             response.write(fs.readFileSync('./static/login.html'),"utf-8")
//             break;
//         case "/home":
//             response.writeHead(200,{
//                 "Content-Type":"text/html;charset=utf-8"
//             })
//             response.write(fs.readFileSync('./static/home.html'))
//             break;
//         default :
//             response.writeHead(404,{
//             "Content-Type":"text/html;charset=utf-8"
//             })
//             response.write(fs.readFileSync('./static/404.html'),"utf-8")
//             break;
            
//     }
// }
function render(response,path,type=""){
    response.writeHead(200,{
        'Content-Type':`${type?type:"text/html"};charset=utf-8`
    })
    response.write(fs.readFileSync(path),"utf-8")
}


const route = {
    "/login":(response)=>{
        render(response,'./static/login.html')
    },
    "/home":(response)=>{
        render(response,'./static/home.html') 
    },
    "/404":(response)=>{
    response.writeHead(404,{
        "Content-Type":"text/html;charset=utf-8"
        })
        response.write(fs.readFileSync('./static/404.html'),"utf-8")
    },
    "/favicon.ico":(response)=>{

    render(response,'./static/favicon.ico',"image/x-icon") 

    }

}


module.exports = route