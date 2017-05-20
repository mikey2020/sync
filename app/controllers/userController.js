var User = require('mongoose').model('User');

var getErrorMessage = function(err) {  
  var message = '';
  if (err.code) {    
    switch (err.code) {      
      case 11000:      
      case 11001:        
      message = 'Username already exists';        
      break;      
      default:       
      message = 'Something went wrong';    
    }  
  } 
  else {    
    for (var errName in err.errors) {      
      if (err.errors[errName].message) 
        message = err.errors[errName]. message;    
    }  
  }
  return message; 
};ww

exports.createUser = function(req,res,next){
	var user = new User(req.body);

	user.save(function(err){
		if(err){
			var message = getErrorMessage(err);
			req.flash('error',message);
			res.redirect('/signup');
		}
		else{
			console.log(user);
			var prompt = "Please sign in  here";
			req.flash('info',prompt);
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