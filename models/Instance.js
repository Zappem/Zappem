var mongoose = require('mongoose');
var Exception = require('./Exception.js');

var traceSchema = new mongoose.Schema({
	class: {type: String},
	file: {type: String},
	line: {type: String}
});

var instanceSchema = new mongoose.Schema({
	message: {type: String},
	user: {type: String},
	browser: {type: Object},
	engine: {type: Object},
	os: {type: Object},
	device: {type: Object},
	cpu: {type: Object},
	method: {type: String},
	url: {type: String},
	ip: {type: String},
	location: {type: String},
	useragent: {type: String},
	source: {type: Array},
	trace: [traceSchema],
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
		exception.last_occurred = now;
		exception.last_message = i.message;
		exception.instances.push({
			instance_id: i._id,
			occurred_at: now
		});
		exception.save(function(err){
			next();
		});
	});

});

module.exports = mongoose.model('instances', instanceSchema);