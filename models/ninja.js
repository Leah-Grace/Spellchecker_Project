const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  }
*/
//create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        deafult: "Point",
    },
    coordinates: {
        type: [Numbers],
        index: "2dsphere"
    },

});




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
    },
    //add geolocation
geometry: GeoSchema

});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;

