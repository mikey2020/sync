var express = require('express');
var passport = require('passport');
var user = require('../controllers/userController');

require('../../config/strategies/local');
module.exports = function(app){
	
	app.get('/signup', function(req, res, next) {
  		res.render('signup',{
  			messages: req.flash('error')
  		})
	});

	app.post('/signup',user.createUser);

	app.get('/login', user.renderLogin);

	app.post('/login', 
		passport.authenticate('local',{ successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
	);

	app.get('/logout',user.logout);
};


