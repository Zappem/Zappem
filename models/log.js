var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logSchema = new Schema({
	file: {type: String},
	line: {type: Number},
	function: {type: String},
	args: {type: Schema.Types.Mixed}
});

logSchema.pre('save', function(next){
	
	var now = new Date();

	this.updated_at = now

	if(!this.created_at){
		this.created_at = now; 
	}

	next();

});

var Log = mongoose.model('logs', logSchema);

module.exports = Log;