/**
 * Created by ean.mclaughlin on 4/12/2016.
 */
var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));
var EventObj = require('./Event');

var PlayerFacilityDefend = new mongoose.Schema({
    character_id: String,
    facility_id: Number,
    outfit_id: String
});

PlayerFacilityDefend.virtual('character', {
    ref: 'Character',
    foreignKey: 'character_id',
    localKey: 'character_id'
});

PlayerFacilityDefend.virtual('facility', {
    ref: 'Facility',
    foreignKey: 'facility_id',
    localKey: 'facility_id'
});

PlayerFacilityDefend.virtual('outfit', {
    ref: 'Outfit',
    foreignKey: 'outfit_id',
    localKey: 'outfit_id'
});

module.exports = EventObj.Event.discriminator('PlayerFacilityDefend', PlayerFacilityDefend);
