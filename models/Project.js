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
	set_up: {type: Boolean, default: false},
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
			found = false;
			user.projects.forEach(function(project){
				if(String(project.project_id) == String(p._id)) found = true;
			});
			if(!found){
				user.projects.push({
					project_id: p._id,
					project_name: p.project_name
				});	
			}else{
				user.projects.forEach(function(e){

				})				
			}
			user.save(function(err){
				if(err) console.log(err);
			});
		});
	});

	next();

});

module.exports = mongoose.model('projects', projectSchema);