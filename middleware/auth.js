module.exports = function(app){

	var User = require('../models/User.js')(app.mongoose);

	return {
		isAuth: function(req, res){
			// Are they authenticated?
			console.log(User.findOne());

			return true;
		}
	};

};