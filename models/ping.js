var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pingSchema = new Schema({
	name: {type: String, required: true},
	url: {type: String, required: true},
	expected_response: {type: Number, required: true},
	frequency: {type: Number, required: true},
	notify: {type: Boolean, required: true},
	created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	project_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
	created_at: Date,
	updated_at: Date
});

pingSchema.pre('save', function(next){

	var now = new Date();

	this.updated_at = now;

	if(!this.created_at){
		this.created_at = now;
	}

	next();

});

var Ping = mongoose.model('pings', pingSchema);

module.exports = Ping;