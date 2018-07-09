var assert = require('assert');
var MembershipApplication = require('../model/membership_application');

describe('Applying for a mission', function () {

  var validApp;

  before(async ()=>{
    validApp = MembershipApplication({

      first: 'Anu',
      last: 'yadav',
      email: 'test@test.com',
      age: 30,
      height: 66,
      weight: 180
    });
  });

  describe('Validation successfull if....', function () {
    it('All validators successfull...', function(){
      assert(validApp.isValid(), 'Not valid');
    });
  });

  describe('Application is invalid if....', function(){

    var app = new MembershipApplication({
      first: '',
      last: '',
      email: 'd@d',
      age: 1,
      height: 2,
      weight: 3
    });

    it('is past the validUntil date', function(){
      var app = new MembershipApplication({validUntil: Date.parse('01/01/2010')});
      assert(app.expired());
    });
    it('email has 4 or less characters and does not have @', function(){
      assert(!app.emailIsValid(), 'Email is not valid');
    });
    it('First and last name are provided', function(){
      assert(!app.nameIsValid(), 'Name is not valid');
    });
    it('Height is between 60 and 75 inches', function(){
      assert(!app.heightIsValid(), 'Height is not valid');
    });
    it('weight is between 100 and 300 kgs', function(){
      assert(!app.weightIsValid(), 'weight is not valid');
    });
    it('age is between 15 and 100 years', function(){
      assert(!app.ageIsValid(), 'age is not valid');
    });
  });

  // describe('Just checking...', function(){
  //   it.only('It is called with mocha only method');
  //   it.skip('It is called with skit mocha will skip it and make it pending');
  // });

});
