var mongoose = require('mongoose');
var User = require('./User.js');

var memberSchema = new mongoose.Schema({
	user_id: {type: mongoose.Schema.Types.ObjectId},
	name: {type: String, required: true},
	email: {type: String, required: true},
	img: {type: String}
})
var projectSchema = new mongoose.Schema({
	project_name: {type: String, required: true},
	url: {type: String, required: false},
	members: [memberSchema],
	created_at: Date,
	updated_at: Date
});

projectSchema.pre('save', function(next){
	
	var now = new Date();

	this.updated_at = now

	if(!this.created_at){
		this.created_at = now; 
	}

	// TODO: Ensure that users with this project embedded are updated.
	var p = this;
	this.members.forEach(function(projuser){
		User.findById(projuser._id, function(err, user){
			console.log(user);
			user.projects.push({
				id: p._id,
				project_name: p.project_name
			});
			user.save(function(err){
				if(err) console.log(err);
				console.log('SAVED PROJECTS');
			});
		});
	});

	next();

});

module.exports = mongoose.model('projects', projectSchema);