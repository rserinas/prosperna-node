module.exports = {
	index: (req, res, next) => {

		io.on('connection', function(socket){
			console.log('Made socket connection', socket.id);

			socket.on('chat', function(data){
				io.sockets.emit('chat', data);
			});
		});
		res.send("Real time notification");
	}
}