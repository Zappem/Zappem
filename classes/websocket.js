module.exports = function(){

	var io = require('socket.io')(8965);

	global.bridge.on('exception.new', function(e){
		console.log('emit exception.new');
		io.emit('exception.new', e);
	});

	global.bridge.on('exception.existing', function(e){
		console.log('emit exception.existing');
		io.emit('exception.existing', e);
	});

}