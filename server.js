// server.js
var express        = require('express');  
var app            = express();  
var httpServer = require("http").createServer(app);  
var five = require("johnny-five");  
var io=require('socket.io')(httpServer);

var port = 3000; 
var temp=0;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {  
        res.sendFile(__dirname + '/public/index.html');
});

httpServer.listen(port);  
console.log('Server available at http://localhost:' + port);  
var led;

//Arduino board connection

//var board = new five.Board();  
//board.on("ready", function() {  
    console.log('Arduino connected');
 //   led = new five.Led(13);
//});
//Socket connection handler
io.on('connection', function (socket) {
  console.log('esperando eventos'); 
  console.log(socket.id);

  socket.on('cuartoOn', function (data) {
    //led.on();
    console.log('CUARTO ON');
  });

  socket.on('cuartoOff', function (data) {
    // led.off();
    console.log('CUARTO OFF');
  });
  socket.on('salaOn', function (data) {
    // led.off();
    console.log('SALA On');
  });
  socket.on('salaOff', function (data) {
    // led.off();
    console.log('SALA OFF');
  });
});

console.log('Waiting for connection');