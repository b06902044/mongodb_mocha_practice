const { describe, it, beforeEach } = require("mocha");
const assert = require('assert');
const MarioChar = require('../models/mariochar'); 

//Describe tests
describe('Finding records', () => {
    let char;

    beforeEach(done => {
        char = MarioChar({name : 'finding_mario', weight: 50});
        
        const tmp = async () => {
            await char.save();
            done();
        }
        tmp();
    })

    //Create tests
    it("Finds a record by name from the database", (done) => {
        MarioChar.findOne({name: 'finding_mario', weight: 50}).then(result => {
            console.log(result);
            assert(result.name === 'finding_mario' && result.weight === 50);
            done();
        })
    })

    it("Finds a record by id from the database", (done) => {
        MarioChar.findOne({_id: char._id}).then(result => {
            console.log(result);
            assert(result._id.toString() === char._id.toString());
            done();
        })
    })

})