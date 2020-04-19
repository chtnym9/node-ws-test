var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

var wss = new WebSocketServer({server: server})
console.log("websocket server created")

  console.log("websocket connection open")

ws.on('open', function open() {
  console.log('connected');
  ws.send(Date.now());
});
 
ws.on('close', function close() {
  console.log('disconnected');
});
 
ws.on('message', function incoming(data) {
  console.log(`Roundtrip time: ${Date.now() - data} ms`);
 
  setTimeout(function timeout() {
    ws.send(Date.now());
  }, 500);
});
