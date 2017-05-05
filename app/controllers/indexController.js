exports.indexRender = function(req,res){
	if(req.session.lastVisit){
		console.log(req.session.lastVisit);
	}
	req.session.lastVisit = new Date();
	if(req.user){
		res.render('index',{
			name: req.user.fullname
		});

	}

	else{
		res.redirect('/login');
	}
	
}
