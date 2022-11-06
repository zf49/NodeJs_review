var http = require('http');
var fs = require('fs');
const zlib = require('zlib')

const gzip = zlib.createGzip()




http.createServer(function (request, response) {

    const readStream = fs.createReadStream('./index.js')
    response.writeHead(200,{
        "Content-Type":"application/x-javascript;charset=utf-8",
        "Content-Encoding":"gzip"
    })
    readStream.pipe(gzip).pipe(response)

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');