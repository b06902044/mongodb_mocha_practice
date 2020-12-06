const { describe, it, beforeEach } = require("mocha");
const assert = require('assert');
const MarioChar = require('../models/mariochar'); 

//Describe tests
describe('Deleting records', () => {
    let char;

    beforeEach(done => {
        char = MarioChar({name : 'deleting_mario', weight: 50});
        
        const tmp = async () => {
            await char.save();
            done();
        }
        tmp();
    })

    //Create tests
    it("Deletes a record by name from the database", (done) => {
        MarioChar.findOneAndRemove({name: 'deleting_mario'}).then(() => {
            MarioChar.findOne({name : 'deleting_mario'}).then(result => {
                assert(result === null);
                done();
            })
        })
    })

})