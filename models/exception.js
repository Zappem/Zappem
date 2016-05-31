var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');


var traceSchema = new Schema({
	file: {type: String},
	line: {type: Number},
	function: {type: String},
	args: {type: Schema.Types.Mixed}
});

var exceptionSchema = new Schema({
	'class': {type: String},
	message: {type: String, required: true},
	file: {type: String, required: true},
	code: {type: String, required: true},
	line: {type: Number, required: true},
	trace: [traceSchema],
	project: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
	instances: [{type: mongoose.Schema.Types.ObjectId, ref: 'ExceptionInstance'}],
	block: {type: String},
	created_at: Date,
	updated_at: Date,
	last_received: Date
});

exceptionSchema.pre('save', function(next){
	
	var now = new Date();

	this.updated_at = now

	if(!this.created_at){
		this.created_at = now; 
		this.last_received = now;
	}

	next();

});

var Exception = mongoose.model('exceptions', exceptionSchema);

module.exports = Exception;