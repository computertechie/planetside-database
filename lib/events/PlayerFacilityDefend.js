/**
 * Created by ean.mclaughlin on 4/12/2016.
 */
var mongoose = require('mongoose-fill');
var EventObj = require('./Event');

var Character = require('../census/Character'),
    Facility = require('../census/Facility'),
    Outfit = require('../census/Outfit');

var PlayerFacilityDefend = new mongoose.Schema({
    character_id: {type: String, index: true},
    facility_id: {type: Number, index: true},
    outfit_id: {type: String, index: true}
}, EventObj.options);

PlayerFacilityDefend.fill('character', function (callback) {
    Character.findOne({character_id: this.character_id}).exec(callback);
});

PlayerFacilityDefend.fill('facility', function (callback) {
    Facility.findOne({facility_id: this.facility_id}).exec(callback);
});

PlayerFacilityDefend.fill('outfit', function (callback) {
    Outfit.findOne({outfit_id: this.outfit_id}).exec(callback);
});

module.exports = EventObj.Event.discriminator('PlayerFacilityDefend', PlayerFacilityDefend);
