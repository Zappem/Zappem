var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var Exception = require('./exception');

autoIncrement.initialize(mongoose);

var foundBySchema = new Schema({
	user_id: {type: String},
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

	this.updated_at = now;

	if(!this.created_at){
		this.created_at = now; 
	}

	next();



});

exceptionInstanceSchema.post('save', function(next){

});

exceptionInstanceSchema.plugin(autoIncrement.plugin, { 
	model: 'ExceptionInstance', 
	field: 'zappem_code',
	startAt: 100
});

var ExceptionInstance = mongoose.model('exception-instances', exceptionInstanceSchema);

module.exports = ExceptionInstance;