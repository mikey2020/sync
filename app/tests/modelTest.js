var app = require('../../app.js'),  
  should = require('should'),    
  mongoose = require('mongoose'),    
  User = mongoose.model('User');   

var user ;
describe('User Model Unit Tests:', function() {  
	before(function(done) {    
		 user = new User({      
			firstName: 'Full',      
			lastName: 'Name',      
			displayName: 'Full Name',      
			email: 'test@test.com',      
			username: 'username',      
			password: 'password'    
		});
      done();    
  });  

  describe('Testing the save method', function() {    
  	it('Should be able to save without problems', function() {
      user.save(function(err) {        
      	should.not.exist(err);     
      	 });    
  });
    it('Should not be able to save a user without a username', function() {      
    	user.username = '';
      user.save(function(err) {        
      	should.exist(err);     
      	 });    
  });  
});
  after(function(done) {    
  	User.remove(function() {         
  		done();       
  	});  
  }); 

});
 