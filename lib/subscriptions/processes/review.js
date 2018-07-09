var Emitter = require('events').EventEmitter;
var util = require('util');

var ReviewProcess = function(args){
  var callback;
  //make sure app is valid
  this.ensureAppValid = function(app){
    if(app.isValid()){
      this.emit('Validated', app);
    }else{
      this.emit('Invalid', app.validatedMessage());
    }
  }
  //find the next mission
  this.findNextMission = function(app){
    //stub this out for now
    app.mission = {
      commander: null,
      pilot: null,
      MAVPilot: null,
      passengers: []
    };
    this.emit('mission-selected', app);
  }

  this.roleIsAvailable = function(app){
    //we have no-concept of role selection just yet
    //TODO: what about a role? Need more info
    emit('role-available', app);
  }
  //make sure height/weight is valid
  this.ensureRoleCompatible = function(app){
    //TODO: find out about role and height/weight etc
  }
  //accept the app with a message
  this.acceptApplication =  function(app){
    //what do we do?
    callback(null, {
      success: true,
      message: 'Welcome to the Mars program'
    });
  }
  //deny the app with a message
  this.denyApplication = function(message){
    callback(null, {
      success: false,
      message: message
    });
  };

  this.processApplication = function(app, next){
    this.emit('application-received', app)
    callback = next;
  }


  //event path
  this.on('application-received', this.ensureAppValid);
  this.on('validated', this.findNextMission);
  this.on('mission-selected', this.roleIsAvailable);
  this.on('role-availalbe', this.ensureRoleCompatible);
  this.on('role-compatible', this.acceptApplication);

  //sad path
  this.on('invalid', this.denyApplication);
}

util.inherits(ReviewProcess, Emitter);
module.exports = ReviewProcess;
