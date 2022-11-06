



function render(response,data,type=""){
    response.writeHead(200,{
        'Content-Type':`${type?type:"application/json"};charset=utf-8`
    })
    response.write((data),"utf-8")
}

const apiRouter = {
    "/api/login":(res)=>{
        render(res,`{ok:1}`)
    }
}




module.exports = apiRouter