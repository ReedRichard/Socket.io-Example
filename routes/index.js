var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

server.listen(8080);

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


io.on('connect', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

module.exports = app;
