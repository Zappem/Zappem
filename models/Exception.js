var mongoose = require('mongoose');

var traceSchema = new mongoose.Schema({
	class: {type: String},
	file: {type: String},
	line: {type: String}
});

var instanceSchema = new mongoose.Schema({
	instance_id: mongoose.Schema.Types.ObjectId,
	occured_at: Date
});

var exceptionSchema = new mongoose.Schema({
	message: {type: String, required: true},
	class: {type: String},
	file: {type: String},
	line: {type: Number},
	trace: [traceSchema],
	hash: {type: String, required: true},
	project: mongoose.Schema.Types.ObjectId,
	created_at: Date,
	updated_at: Date,
	last_occured: Date,
	instances: [instanceSchema]
});

exceptionSchema.pre('save', function(next){
	
	var now = new Date();

	this.updated_at = now

	if(!this.created_at){
		this.created_at = now;
	}

	next();

});

module.exports = mongoose.model('exceptions', exceptionSchema);