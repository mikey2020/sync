var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
mongoose.Promise = global.Promise;



var UserSchema = new Schema({
	firstname: String,
	lastname: String,
	username: {
		type: String,
		unique: true,
		required: true 
	},
	email: {
		type: String,
		match: [/.+\@.+\..+/ , "please enter valid email address"]
	},
	password: {
		type: String,
		required: [true , "must have password"],
		minlength: 6
	},

	salt: String ,

}, {
	timestamps: { createdAt: 'created_at' }
});

UserSchema.methods.hashPassword = function(password){
	var hashedPassword  = crypto.pbkdf2Sync(password, this.salt, 100000, 64, 'sha512');
	hashedPassword = hashedPassword.toString('hex');
	console.log(hashedPassword.toString('hex')); 
	return hashedPassword;
	
};

UserSchema.methods.authenticate =function(pass){
	if(this.password == this.hashPassword(pass)){
		return true;
	}

};

UserSchema.pre('save' , function(next){
	console.log("process is running ");
	if(this.password){
		this.salt = crypto.randomBytes(16);
		this.password = this.hashPassword(this.password);

	}
	
	next();
});

UserSchema.virtual('fullname').get(function(){
	return this.firstname + " " + this.lastname ;
});

UserSchema.post('save' , function(next){
	console.log("process is done ");
	console.log("user added succesfully");
});

mongoose.model('User',UserSchema);


UserSchema.set('toJSON', { getters: true, virtuals: true });