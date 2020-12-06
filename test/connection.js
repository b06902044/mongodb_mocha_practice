const { before, beforeEach } = require("mocha");
const mongoose  = require("mongoose");

//mongoose.Promise = global.Promise;

//connect to the db before tests run
before((done) => {
    mongoose.connect('mongodb://localhost/testaroom');

    mongoose.connection.on('error', err => {
        console.log(err);
    })

    mongoose.connection.once('open', () => {
        console.log("connection has been made");
        done();
    })
})

beforeEach((done) => {
    //Drop the collection
    mongoose.connection.db.dropCollection('mariochars', () => {
        console.log("drop");
        done();
    })
})



