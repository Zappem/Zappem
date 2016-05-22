var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
	exception: {type: mongoose.Schema.Types.ObjectId, ref: 'Exception'},
	created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	comment: {type: String},
	auto_gen: {type: Boolean},
	created_at: Date,
	updated_at: Date
});

ActivitySchema.pre('save', function(next){
	var now = new Date();
	this.updated_at = now;

	if(!this.created_at){
		this.created_at = now;
	}

	next();
});

var Activity = mongoose.model('exception-activities', ActivitySchema);

module.exports = Activity;