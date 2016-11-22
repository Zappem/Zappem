var mongoose = require('mongoose');

var instanceSchema = new mongoose.Schema({
	instance_id: mongoose.Schema.Types.ObjectId,
	occurred_at: Date
});

var memberSchema = new mongoose.Schema({
	user_id: {type: mongoose.Schema.Types.ObjectId},
	name: {type: String, required: true},
	email: {type: String, required: true},
	img: {type: String}
});

var exceptionSchema = new mongoose.Schema({
	last_message: {type: String},
	class: {type: String},
	file: {type: String},
	line: {type: Number},
	hash: {type: String, required: true},
	project: mongoose.Schema.Types.ObjectId,
	created_at: Date,
	updated_at: Date,
	last_occurred: Date,
	instances: [instanceSchema],
	resolved: {type: Boolean, default: false},
	assigned_to: memberSchema
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