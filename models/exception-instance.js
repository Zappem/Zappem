var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Exception = require('./exception');

var foundBySchema = new Schema({
	id: {type: Number},
	user: {type: String},
	email: {type: String}
});

var exceptionInstanceSchema = new Schema({
	exception: {type: mongoose.Schema.Types.ObjectId, ref: 'Exception'},
	project: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
	created_at: Date,
	updated_at: Date,
	found_by: foundBySchema
});

exceptionInstanceSchema.pre('save', function(next){
	
	console.log('Pre save');
	var now = new Date();

	this.updated_at = now

	if(!this.created_at){
		this.created_at = now; 
	}

	next();



});

exceptionInstanceSchema.post('save', function(next){

	console.log('post save');

	
});

var ExceptionInstance = mongoose.model('exception-instances', exceptionInstanceSchema);

module.exports = ExceptionInstance;