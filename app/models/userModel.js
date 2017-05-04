var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var UserSchema = new Schema({
	firstname: String,
	lastname: String,
	username: String,
	email: {
		type: String,
		match: [/.+\@.+\..+/ , "please enter valid email address"]
	}
	password: {
		type: String,
		required: [true , "must have password"],
		minlength: [6 , 'password too short'] 
	}

});

UserSchema.pre('save' , function(next){
	console.log("process is running ");
	next();
});

UserSchema.post('save' , function(next){
	console.log("process is done ");
	next();
});

mongoose.model('User',UserSchema);