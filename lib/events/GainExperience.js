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
    character_id: {type: String, index: true},
    experience_id: {type: Number, index: true},
    loadout_id: Number,
    other_id: String
}, EventObj.options);

GainExperience.fill('character', function (callback) {
    Character.findOne({character_id: this.character_id}).exec(callback);
});

GainExperience.fill('experience', function (callback) {
    Experience.findOne({experience_id: this.experience_id}).exec(callback);
});

GainExperience.fill('loadout', function (callback) {
    callback(null, loadouts[this.loadout_id]);
});

module.exports = EventObj.Event.discriminator('GainExperience', GainExperience);