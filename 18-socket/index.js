const  express = require('express')
const app = express()
const port = 3000

app.use(express.static('./public'))


// http 响应
app.get('/', (req, res) => res.send({ok:1}))









app.listen(port, () => console.log(`Example app listening on port ${port}!`))




// webSocket

const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
//   ws.on('message', function message(data) {
//     console.log('received: %s', data);
//   });

  ws.send('welcome,聊天室');
});