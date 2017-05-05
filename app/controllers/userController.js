var User = require('mongoose').model('User');
exports.createUser = function(req,res,next){
	var user = new User(req.body);

	user.save(function(err){
		if(err){
			console.log(err);
		}
		else{
			console.log(user);
			res.redirect('/login');
		}
	});
};

exports.renderLogin = function(req,res,next){
	if(!req.user){
		res.render('login',{
			messages: req.flash('error') || req.flash('info')
		});
	}
	else{
		res.redirect('/');
	}
}

exports.logout = function(req,res){
	req.logout();
	res.redirect('/login');
}