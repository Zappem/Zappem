module.exports = function(){

	var io = require('socket.io')(8965);
	var Project = require('../models/Project.js');
	var dashboard = require('../controllers/dashboard.js');

	// TODO: On application restart, emit a socket to tell all users to refresh
	
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
					e.users.push(String(member._id));
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
		},

		sendToUsersOnPage: function(page, title, data, users){
			var split = page.split('.');
			var page = {};
			page.base = split[0];
			page.sub = (split.length > 1) ? split[1] : false;

			this.connectedUsers.forEach(function(socket){

				// TODO: Also check they're on the right project!!

				if(users.indexOf(socket.user) > -1 && page.base == socket.page.base){
					console.log('we have a match');
					if(page.sub && page.sub == socket.page.sub){ // A subpage has been specified

					}else if(!page.sub){
						socket.emit(title, data);
					}
				}
			});
		}

	};

	io.use(function(socket, next){
		socket.page = {};
		socket.user = false;
		if(socket.handshake.query.user){
			// TODO: To avoid MITM attacks, a token should be passed through and this should be related to the user by db lookup.
			// Possibly generate a hash for each user on app start up.
			socket.user = String(socket.handshake.query.user);
		}
		//if(socket.handshake.query.page){
			// TODO: Do some validation on this.
			socket.page.base = socket.handshake.query.page_base;
			socket.page.sub = socket.handshake.query.page_sub;
		//}
		next();
	});

	io.on('connect', function(e){
		manager.connectedUsers.push(e);

		e.on('page', function(page){
			// A connected socket has changed the page they're currently on.
			var i = manager.connectedUsers.indexOf(e);
			manager.connectedUsers[i].page = page;
		});

		e.on('disconnect', function(e){
			var i = manager.connectedUsers.indexOf(e);
			manager.connectedUsers.splice(i, 1);
		});

	});

	

	global.bridge.on('exception.new', function(e){
		console.log('emit exception.new');
		// Send to all users in this project.
		manager.getUsers(e, function(e){
			// We need new dash stats,
			var dashStats = {
				stat: [5, 6, 7, 8]
			};
			var exceptionStats = {};
			dashboard.getDashboardStats(e.instance.project, function(stats){
				manager.sendToUsersOnPage('dashboard', 'dashboard', stats, e.users);
			});

			// We need new exception table stats,
			manager.sendToUsersOnPage('exceptions', 'exceptions', exceptionStats, e.users);
			// We need new exception view stats,
			manager.sendToUsersOnPage('exceptions.'+e.exception._id, 'exceptions', exceptionStats, e.users);
			//manager.sendToUsers('exception.new', e, e.users);
		});
	});

	global.bridge.on('exception.existing', function(e){
		console.log('emit exception.existing');
		// Send to all users in this project.
		manager.getUsers(e, function(e){
			// We need new dash stats,
			var exceptionStats = {};
			dashboard.getDashboardStats(e.exception.project, function(stats){
				manager.sendToUsersOnPage('dashboard', 'dashboard', stats, e.users);
			});
			// We need new exception table stats,
			manager.sendToUsersOnPage('exceptions', 'exceptions', exceptionStats, e.users);
			// We need new exception view stats,
			manager.sendToUsersOnPage('exceptions.'+e.exception._id, 'exception', exceptionStats, e.users);
			//manager.sendToUsers('exception.new', e, e.users);
		});
	});

}