/**
 * Created by ean.mclaughlin on 4/15/2016.
 */
var mongoose = require('mongoose-fill');
var StatsObj = require('./Stats'),
    loadouts = require('../local/Loadout'),
    vehicles = require('../local/Vehicle');

var Item = require('../census/Item'),
    FacilityCol = require('../census/Facility'),
    Experience = require('../census/Experience'),
    AchievementCol = require('../census/Achievement'),
    Characters = require('../census/Character'),
    Outfits = require('../census/Outfit');

var Loadout = new mongoose.Schema({
    loadout_id: Number,
    kills: Number,
    deaths: Number,
    headshots: Number
});
Loadout.fill('loadout', function (callback) {
    callback(null, loadouts[this.loadout_id]);
});

var Weapon = new mongoose.Schema({
    weapon_id: Number,
    kills: Number,
    deaths: Number,
    headshots: Number
});
Weapon.fill('weapon', function (callback) {
    Item.findOne({item_id: this.weapon_id}).lean().exec(callback);
});

var Vehicle = new mongoose.Schema({
    vehicle_id: Number,
    destroyed: Number,
    lost: Number,
    deaths_to: Number,
    kills_with: Number
});
Vehicle.fill('vehicle', function (callback) {
    callback(null, vehicles[this.vehicle_id]);
});

var Facility = new mongoose.Schema({
    facility_id: Number,
    captures: Number,
    defenses: Number
});
Facility.fill('facility', function (callback) {
    FacilityCol.findOne({facility_id: this.facility_id}).lean().exec(callback);
});

var ExperienceEvent = new mongoose.Schema({
    event_id: Number,
    count: Number
});
ExperienceEvent.fill('experience', function (callback) {
    Experience.findOne({experience_id: this.event_id}).lean().exec(callback);
});

var Achievement = new mongoose.Schema({
    achievement_id: Number,
    count: Number
});
Achievement.fill('achievement', function (callback) {
    AchievementCol.findOne({achievement_id: this.achievement_id}).lean().exec(callback);
});

var CharacterStat = mongoose.Schema({
    character_id: {type: String, index: true},
    outfit_id: {type: String, index: true},
    ranks: Number,
    loadouts: [Loadout],
    weapons: [Weapon],
    vehicles: [Vehicle],
    facilities: [Facility],
    experience_events: [ExperienceEvent],
    achievements: [Achievement]
}, StatsObj.options);
CharacterStat.fill('character', function (callback) {
    Characters.findOne({character_id: this.character_id}).lean().exec(callback);
});

CharacterStat.fill('outfit', function (callback) {
    Outfits.findOne({outfit_id: this.outfit_id}).lean().exec(callback);
});

var CharacterStatModel = StatsObj.Stat.discriminator('Character', CharacterStat);

module.exports = CharacterStatModel;