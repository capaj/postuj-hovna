'use strict'
require('chokidar-socket-emitter')({port: 8090})
const httpServer = require('http-server')
const server = httpServer.createServer({
  root: 'www',
  robots: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
})
server.listen(8080)
