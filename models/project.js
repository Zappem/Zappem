var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var projectSchema = new Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	created_at: Date,
	updated_at: Date
});

projectSchema.pre('save', function(next){
	
	var now = new Date();

	this.updated_at = now

	if(!this.created_at){
		this.created_at = now; 
	}

	next();

});

var Project = mongoose.model('projects', projectSchema);

module.exports = Project;