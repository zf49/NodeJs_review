const server = require('./01-route')


const route = require('./02-route')
const api = require('./api')




server.use(route)
server.use(api)

server.start()