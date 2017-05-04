var express = require('express');
//var router = express.Router();
var user = require('../controllers/userController');
module.exports = function(app){
	
	app.get('/signup', function(req, res, next) {
  		res.render('signup',{})
	});

	app.post('/signup',user.createUser);
};


