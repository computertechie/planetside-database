/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');

var Facility = require('../census/Facility'),
    Outfit = require('../census/Outfit'),
    factions = require('../local/Faction');


var FacilityControl = new mongoose.Schema({
    duration_held: Number,
    facility_id: Number,
    new_faction_id: Number,
    old_faction_id: Number,
    outfit_id: String
}, EventObj.options);

FacilityControl.fill('facility', function (callback) {
    Facility.findOne({facility_id: this.facility_id}).exec(callback);
});

FacilityControl.fill('new_faction', function (callback) {
    callback(null, factions[this.new_faction_id]);
});

FacilityControl.fill('old_faction', function (callback) {
    callback(null, factions[this.old_faction_id]);
});

FacilityControl.fill('outfit', function (callback) {
    Outfit.findOne({outfit_id: this.outfit_id}).exec(callback);
});

var FacilityModel = EventObj.Event.discriminator('FacilityControl', FacilityControl);
FacilityModel.collection.createIndex({facility_id: 1}, {
    background: true,
    partialFilterExpression: {facility_id: {$exists: true}}
});
FacilityModel.collection.createIndex({outfit_id: 1}, {
    background: true,
    partialFilterExpression: {outfit_id: {$exists: true}}
});

module.exports =  FacilityModel;