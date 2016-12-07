var mongoose = require('mongoose');

var traceSchema = new mongoose.Schema({
	class: {type: String},
	file: {type: String},
	line: {type: String}
});

var exceptionSchema = new mongoose.Schema({
	exception_id: {type: mongoose.Schema.Types.ObjectId, required: true},
	resolved: {type: Boolean, default: 0}
});

var userSchema = new mongoose.Schema({
	user_id: {type: String},
	name: {type: String}
});

var instanceSchema = new mongoose.Schema({
	message: {type: String},
	user: userSchema,
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
	source: {type: Object},
	trace: [traceSchema],
	env: {type: Object},
	cookies: {type: Object},
	data: {type: Object},
	exception: exceptionSchema,
	project: mongoose.Schema.Types.ObjectId,
	short_id: {type: String},
	created_at: Date,
	updated_at: Date
});

instanceSchema.pre('save', function(next){
	
	var now = new Date();
	var i = this;

	i.updated_at = now

	if(!i.created_at){
		i.created_at = now;
		var idString = String(i._id);
		i.short_id = (idString.substring(idString.length - 6)).toUpperCase();
	}

	next();
	// Now put this instance inside the exception that it belongs in.
	//var Exception = require('./Exception.js');
	//
	//Exception.findById(i.exception.exception_id, function(err, exception){
	//	exception.last_occurred = now;
	//	exception.last_message = i.message;
	//	exception.resolved.state = false;
	//	exception.instances.push({
	//		instance_id: i._id,
	//		occurred_at: now
	//	});
	//	exception.save(function(err){
	//		next();
	//	});
	//});

});

module.exports = mongoose.model('instances', instanceSchema);