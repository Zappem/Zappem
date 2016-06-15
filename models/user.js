var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	img: {type: String},
	created_at: Date,
	updated_at: Date
});

userSchema.pre('save', function(next){
	
	var now = new Date();

	this.updated_at = now

	if(!this.created_at){
		this.created_at = now; 
	}

	next();

});

var User = mongoose.model('users', userSchema);

module.exports = User;