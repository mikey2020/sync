var User = require('mongoose').model('User');
exports.createUser = function(req,res,next){
	var user = new User(req.body);

	user.save(function(err){
		if(err){
			console.log(err);
		}
		else{
			console.log(user);
		}
	});
};