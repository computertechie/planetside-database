/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));
var EventObj = require('./Event');

var GainExperience = new mongoose.Schema({
    amount: Number,
    character_id: String,
    experience_id: Number,
    loadout_id: Number,
    other_id: String
}, EventObj.options);

GainExperience.virtual('character', {
    ref: 'Character',
    foreignKey: 'character_id',
    localKey: 'character_id'
});

GainExperience.virtual('experience', {
    ref: 'Experience',
    foreignKey: 'experience_id',
    localKey: 'experience_id'
});

GainExperience.virtual('loadout', {
    ref: 'Loadout',
    foreignKey: 'loadout_id',
    localKey: 'loadout_id'
});

module.exports = EventObj.Event.discriminator('GainExperience', GainExperience);