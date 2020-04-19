var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/"))

//var server = http.createServer(app)
//server.listen(port)

//console.log("http server listening on %d", port)

//var wss = new WebSocketServer({server: server})
//console.log("websocket server created")
//
//ws.on("connection", function(ws) {
  ws.on('connection', function(ws) {
    ws.listen('message', function(msg) {
      ws.send('message', msg);
    });
    ws.on('close',function(){
      console.log("connection closed")
    });
  });
