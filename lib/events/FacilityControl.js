/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));
var EventObj = require('./Event');

var FacilityControl = new mongoose.Schema({
    duration_held: Number,
    facility_id: Number,
    new_faction_id: Number,
    old_faction_id: Number,
    outfit_id: String
});

FacilityControl.virtual('facility', {
    ref: 'Facility',
    foreignKey: 'facility_id',
    localKey: 'facility_id'
});

FacilityControl.virtual('new_faction', {
    ref: 'Faction',
    foreignKey: 'faction_id',
    localKey: 'new_faction_id'
});

FacilityControl.virtual('old_faction', {
    ref: 'Faction',
    foreignKey: 'faction_id',
    localKey: 'old_faction_id'
});

FacilityControl.virtual('outfit', {
    ref: 'Outfit',
    foreignKey: 'outfit_id',
    localKey: 'outfit_id'
});

module.exports =  EventObj.Event.discriminator('FacilityControl', FacilityControl);