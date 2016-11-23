module.exports = function(){

	var io = require('socket.io')(8965);
	var Project = require('../models/Project.js');

	var manager = {

		connectedUsers: [],

		getException: function(e, callback){
			// TODO
			callback(e);
		},

		getUsers: function(e, callback){
			// Was the exception passed through?
			var projectid;
			if(e.users){
				callback(e);
			}else if(e.exception){
				projectid = e.exception.project;
			}else if(e.instance){
				projectid = e.instance.project;
			}else{
				console.log('no instance or project provided');
				e.users = [];
				return e;
			}

			this.getProject(projectid, function(members){
				e.users = [];
				members.forEach(function(member){
					e.users.push(member._id);
				});
				callback(e);
			});

		},

		getProject: function(projectid, callback){
			Project.findById(projectid, function(err, project){
				callback(project.members);	
			});
		},

		sendToUsers: function(title, data, users){
			this.connectedUsers.forEach(function(socket){
				if(users.indexOf(socket.user) > -1){
					socket.emit(title, data);
				}
			});
		}

	};

	io.use(function(socket, next){
		if(socket.handshake.query.user){
			// TODO: To avoid MITM attacks, a token should be passed through and this should be related to the user by db lookup.
			socket.user = socket.handshake.query.user;
		}else{
			socket.user = false;
		}
		next();
	});

	io.on('connect', function(e){
		manager.connectedUsers.push(e);

		e.on('disconnect', function(e){
			var i = manager.connectedUsers.indexOf(e);
			manager.connectedUsers.splice(i, 1);
		});

	});

	global.bridge.on('exception.new', function(e){
		console.log('emit exception.new');
		// Send to all users in this project.
		manager.getUsers(e, function(e){
			manager.sendToUsers('exception.new', e, e.users);
		});
	});

	global.bridge.on('exception.existing', function(e){
		console.log('emit exception.existing');
		// Send to all users in this project.
		manager.getUsers(e, function(e){
			manager.sendToUsers('exception.new', e, e.users);
		});
	});

}