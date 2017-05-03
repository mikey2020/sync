var mongoose = require('mongoose');
var config = require('./config');

module.exports = function(){
	var db = config.db ;
	mongoose.connect(db);
	return db;
};