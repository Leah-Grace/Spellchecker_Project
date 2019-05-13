const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is Required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    //add geolocation
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;