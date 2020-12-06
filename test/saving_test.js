const { describe, it } = require("mocha");
const assert = require('assert');
const MarioChar = require('../models/mariochar'); 

//Describe tests
describe('Saving records', () => {

    //Create tests
    it("Saves a record to the database", (done) => {
        let char = MarioChar({name : 'saving mario', weight: 50});
        
        char.save().then(() => {
            assert(char.isNew === false);
            done();
        })
    })

})