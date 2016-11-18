var mongoose = require('mongoose');
var Exception = require('./Exception.js');

var instanceSchema = new mongoose.Schema({
	user: {type: String},
	browser: {type: String},
	os: {type: String},
	method: {type: String},
	url: {type: String},
	ip: {type: String},
	location: {type: String},
	useragent: {type: String},
	exception: mongoose.Schema.Types.ObjectId,
	project: mongoose.Schema.Types.ObjectId,
	created_at: Date,
	updated_at: Date
});

instanceSchema.pre('save', function(next){
	
	var now = new Date();
	var i = this;

	i.updated_at = now

	if(!i.created_at){
		i.created_at = now; 
	}
	// Now put this instance inside the exception that it belongs in.
	Exception.findById(i.exception, function(err, exception){
		exception.last_occured = now;
		exception.instances.push({
			instance_id: i._id,
			occured_at: now
		});
		exception.save(function(err){
			next();
		});
	});

});

module.exports = mongoose.model('instances', instanceSchema);