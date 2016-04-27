/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');

var Character = require('../census/Character'),
    Facility = require('../census/Facility'),
    Outfit = require('../census/Outfit');

var PlayerFacilityCapture = new mongoose.Schema({
    character_id: String,
    facility_id: Number,
    outfit_id: String
}, EventObj.options);

PlayerFacilityCapture.fill('character', function (callback) {
    Character.findOne({character_id: this.character_id}).exec(callback);
});

PlayerFacilityCapture.fill('facility', function (callback) {
    Facility.findOne({facility_id: this.facility_id}).exec(callback);
});

PlayerFacilityCapture.fill('outfit', function (callback) {
    Outfit.findOne({outfit_id: this.outfit_id}).exec(callback);
});


var Model = EventObj.Event.discriminator('PlayerFacilityCapture', PlayerFacilityCapture);
Model.collection.createIndex({character_id: 1}, {
    background: true,
    partialFilterExpression: {character_id: {$exists: true}}
});
Model.collection.createIndex({facility_id: 1}, {
    background: true,
    partialFilterExpression: {facility_id: {$exists: true}}
});
Model.collection.createIndex({outfit_id: 1}, {
    background: true,
    partialFilterExpression: {outfit_id: {$exists: true}}
});

module.exports = Model;