var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
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

module.exports = mongoose.model('users', userSchema);