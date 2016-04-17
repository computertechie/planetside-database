var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));

var Facility = new mongoose.Schema({
    facility_id: {type: Number, index: true},
    facility_name: String,
    facility_type: String,
    zone_id: Number
});

module.exports = mongoose.model('Facility', Facility);