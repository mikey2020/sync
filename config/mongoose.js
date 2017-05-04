var mongoose = require('mongoose');
var config = require('./config');

module.exports = function(){
	var db = config.db ;
	require('../app/models/userModel.js');
	return mongoose.connect(db);
};