var http = require('http');


const route = require('./02-route')

const api = require('./api')


const Router = {}
Object.assign(Router,route)
Object.assign(Router,api)


function use(obj){
    Object.assign(Router,obj)
}




function start(){
    http.createServer(function (request, response) {

        const myUrl = new URL(request.url,"http://127.0.0.1:3000");
        
        console.log(myUrl.pathname)
        
                // route(response,myUrl.pathname)
                try{
        
                    Router[myUrl.pathname](response)
        
                }catch(err){
                    Router["/404"](response)
                }
        
                response.end()
        
        
        }).listen(3000);
}

console.log('Server running at http://127.0.0.1:3000/');



exports.start = start
exports.use = use