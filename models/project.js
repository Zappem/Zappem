var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
	name: {type: String, required: true},
	url: {type: String, required: true},
	members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
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