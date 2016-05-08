/**
 * Created by ean.mclaughlin on 4/15/2016.
 */
var mongoose = require('mongoose-fill');
var StatsObj = require('./Stats')


var Loadout = new mongoose.Schema({
    loadout_id: Number,
    kills: Number,
    deaths: Number,
    headshots: Number
});

var Weapon = new mongoose.Schema({
    weapon_id: Number,
    kills: Number,
    deaths: Number,
    headshots: Number
});

var Vehicle = new mongoose.Schema({
    vehicle_id: Number,
    destroyed: Number,
    lost: Number,
    deaths_to: Number,
    kills_with: Number
});

var Facility = new mongoose.Schema({
    facility_id: Number,
    captures: Number,
    defenses: Number
});

var ExperienceEvent = new mongoose.Schema({
    event_id: Number,
    count: Number
});

var Achievement = new mongoose.Schema({
    achievement_id: Number,
    count: Number
});

var CharacterStat = mongoose.Schema({
    character_id: {type: String, index: true},
    outfit_id: {type: String, index: true},
    loadouts: [Loadout],
    weapons: [Weapon],
    vehicles: [Vehicle],
    facilities: [Facility],
    experience_events: [ExperienceEvent],
    achievements: [Achievement]
}, StatsObj.options);

var CharacterStatModel = StatsObj.Stat.discriminator('Character', CharacterStat);

module.exports = CharacterStatModel;