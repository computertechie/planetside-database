var mongoose = require('mongoose-fill');
var zones = require('../local/Zone');

var Facility = new mongoose.Schema({
    facility_id: {type: Number, index: true},
    facility_name: String,
    facility_type: String,
    zone_id: Number
});

Facility.fill('zone', function (callback) {
    callback(null, zones[this.zone_id]);
});

module.exports = mongoose.model('Facility', Facility);