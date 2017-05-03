exports.indexRender = function(req,res){
	console.log(process.env.NODE_ENV);
	res.render('index');
}
