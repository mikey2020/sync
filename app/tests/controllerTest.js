var app = require('../../app'),
	should = require('should'),
	request = require('supertest'),
	User = require('mongoose').model('User');

var user;

describe('User Controller Unit Tests:', function() {  
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

    describe('Testing GET methods', function() {
	  it('respond with html', function(done) {
	    request(app)
	      .get('/signup')
	      .set('Accept', 'application/html')
	      .expect('Content-Type', /html/)
	      .expect(200, done);
	  });

	});

	describe('Testing login', function() {
	  it('respond with no error', function(done) {
	    request(app)
	      .get('/login')
	      .set('Accept', 'application/html')
	      .expect('Content-Type', /html/)
	      .expect(200, done);
	  });

	});
});