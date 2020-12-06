const mongoose = require('mongoose');
const marioSchema = new mongoose.Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('mariochars', marioSchema);

module.exports = MarioChar; 