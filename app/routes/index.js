var express = require('express');
var index = require('../controllers/indexController');
 
module.exports = function(app){

	app.get('/',index.indexRender);

};

