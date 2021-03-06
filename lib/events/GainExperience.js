/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');

var Character = require('../census/Character'),
    Experience = require('../census/Experience'),
    loadouts = require('../local/Loadout');

var GainExperience = new mongoose.Schema({
    amount: Number,
    character_id: String,
    experience_id: Number,
    loadout_id: Number,
    other_id: String
}, EventObj.options);

GainExperience.fill('character', function (callback) {
    Character.findOne({character_id: this.character_id}).exec(callback);
});

GainExperience.fill('experience', function (callback) {
    Experience.findOne({experience_id: this.experience_id}).exec(callback);
});

GainExperience.fill('character_loadout', function (callback) {
    callback(null, loadouts[this.loadout_id]);
});

var GainExperienceModel = EventObj.Event.discriminator('GainExperience', GainExperience);
GainExperienceModel.collection.createIndex({character_id: 1}, {
    background: true,
    partialFilterExpression: {character_id: {$exists: true}}
});
GainExperienceModel.collection.createIndex({experience_id: 1}, {
    background: true,
    partialFilterExpression: {experience_id: {$exists: true}}
});

module.exports = GainExperienceModel;