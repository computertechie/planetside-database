var mongoose = require('mongoose-fill'),
    FacilityEvent = require('../events/FacilityControl');

var Alert = new mongoose.Schema({
    world_id: Number,
    zone_id: Number,
    instance_id: Number,
    start: {
        time: Date,
        vs_control: Number,
        nc_control: Number,
        tr_control: Number
    },
    end: {
        time: Date,
        vs_control: Number,
        nc_control: Number,
        tr_control: Number
    },
    facility_events: [FacilityEvent]
});

var AlertModel = mongoose.model('Alert', Alert);

module.exports = AlertModel;