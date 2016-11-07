module.exports = function(app){

	return {
		isAuth: function(req, res){
			// Are they authenticated?
			return true;
		}
	};

};