const { describe, it, beforeEach } = require("mocha");
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Updating records', function(){
  var char;
  // Add a character to the db before each tests
  
  beforeEach(function(done){
    char = new MarioChar({
      name: 'John',
      weight: 50
    });
    char.save().then(function(){
      done();
    });
  });
  

  // Create tests
  it('Updates the name of a record', function(done){
      MarioChar.find({}).then(result => {
          console.log(result);
      })
      MarioChar.findOneAndUpdate({name: 'John'}, {name: 'Luigi'}).then(function(){
          MarioChar.findOne({_id: char._id}).then(function(result){
              assert(result.name === 'Luigi');
              done();
          });
      });
  });

  it('Increments the weight by 1', done => {
      MarioChar.update({}, {$inc: {weight: 1}}).then(() => {
          MarioChar.findOne({name: 'John'}).then(result => {
            assert(result.weight === 51);
            done();
          })
      })
  })

});