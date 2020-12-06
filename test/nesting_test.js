const assert = require('assert');
const { describe, it, beforeEach } = require('mocha');
const mongoose = require('mongoose');
const author = require('../models/author');


//Describe out tests
describe('Nesting records', () => {

    beforeEach(done => {
        mongoose.connection.db.dropCollection('author', () => {
            console.log("drop");
            done();
        })
    })

    it('Creates an author with sub-documents', done => {
        let pat = author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });

        pat.save().then(() => {
            author.findOne({name: 'Patrick Rothfuss'}).then(result => {
                assert(result.books.length === 1);
                done();
            })
        })
    })

    it('Adds a book to an author',done => {
        let pat = author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });

        pat.save().then(() => {
            author.findOne({name: 'Patrick Rothfuss'}).then(result => {
                //add a book to the books array
                result.books.push({title: 'Wise Mans page', pages: 500});
                result.save().then(() => {
                    author.findOne({name: 'Patrick Rothfuss'}).then(result => {
                        assert(result.books.length === 2);
                        done();
                    })
                })
            })
        })
    })
})