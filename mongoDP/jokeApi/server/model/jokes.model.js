const mongoose = require('mongoose');

const JokeSChema = new mongoose.Schema({
    setup: {
        type:String,
        minlenth:[10]
    },
    punchline:{
        type:String,
        minlength:[3]
    }
});

const Joke = mongoose.model('Joke', JokeSChema);

module.exports = Joke;