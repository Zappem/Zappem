module.exports = function(){

	var io = require('socket.io')(8965);

	global.bridge.on('exception.new', function(e){
		console.log('emit exception.new');
		io.emit('exception.new', e);
		io.emit('notification', {
			title: "New Exception", 
			options: {
				body: e.exception.message
			}
		});
	});

	global.bridge.on('exception.existing', function(e){
		console.log('emit exception.existing');
		io.emit('exception.existing', e);
	});

}