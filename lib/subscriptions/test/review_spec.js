var assert = require('assert');
var ReviewProcess = require('../processes/review');
var MembershipApplication = require('../model/membership_application');

// describe('The Review Process', function(){
//   describe('Receiving a valid application', function(){
//     var decision;
//     before(async (done)=>{
//       validApp = new MembershipApplication({
//         first: 'Test',
//         last: 'User',
//         email: 'anurag@gmail.com',
//         age: 30,
//         height: 66,
//         weight: 180
//       });
//       var review = new ReviewProcess();
//       review.processApplication(validApp, function(err, result){
//         decision = result;
//         done();
//       });
//     });
//     it.skip('return success', function(){
//       assert(decision.success, decision.message);
//     });
//   });
// });
