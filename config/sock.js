var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var api = require('./api');
var chatbaseclient = require('./chatbaseclient');

var conn = function() {
  server.listen(8010);

  app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });
};

var fromClient = function() {

io.on('connection', function (socket) {
  socket.on('fromClient', function (data) {
    console.log(data.client);
         api.getRes(data.client).then(function(res){
           console.log('response', res);
		   
		//ChatbaseClient (intent, fromClient, fromServer)
		   chatbaseclient(  
				'not available',
				data.client,
				res
			);
			
            socket.emit('fromServer', { server: res });
         });
  });
});
}
module.exports = {conn,fromClient}
