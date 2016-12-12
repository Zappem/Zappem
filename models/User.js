var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
	project_id: {type: mongoose.Schema.Types.ObjectId, required: true},
	project_name: {type: String, required: true}
});

var userSchema = new mongoose.Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	img: {type: String, default: 'placeholder.svg'},
	projects: [projectSchema],
	created_at: Date,
	updated_at: Date
});

userSchema.pre('save', function(next){
	
	var now = new Date();

	this.updated_at = now

	if(!this.created_at){
		this.created_at = now; 
	}

	// TODO: Find any other instances where this user is stored and update it.
	// eg, Projects, exceptions users are assigned to

	next();

});

module.exports = mongoose.model('users', userSchema);