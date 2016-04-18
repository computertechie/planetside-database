/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');
var Character = require('../census/Character'),
    Weapon = require('../census/Weapon'),
    loadouts = require('../local/Loadout'),
    vehicles = require('../local/Vehicle');

var Death = new mongoose.Schema({
    attacker_character_id: {type: String, index: true},
    attacker_loadout_id: Number,
    attacker_vehicle_id: Number,
    attacker_weapon_id: {type: Number, index: true},
    character_id: {type: String, index: true},
    character_loadout_id: Number,
    is_critical: Boolean,
    is_headshot: Boolean,
    vehicle_id: Number
}, EventObj.options);

Death.fill('attacker', function (callback) {
    Character.findOne({character_id: this.attacker_character_id}).exec(callback);
});

Death.fill('defender', function (callback) {
    Character.findOne({character_id: this.character_id}).exec(callback);
});

Death.fill('attacker_loadout', function (callback) {
    callback(null, loadouts[this.attacker_loadout_id]);
});

Death.fill('defender_loadout', function (callback) {
    callback(null, loadouts[this.character_loadout_id]);
});

Death.fill('attacker_vehicle', function (callback) {
    callback(null, vehicles[this.attacker_vehicle_id]);
});

Death.fill('defender_vehicle', function (callback) {
    callback(null, loadouts[this.vehicle_id]);
});

Death.fill('attacker_weapon', function (callback) {
    Weapon.findOne({weapon_id: this.attacker_weapon_id}).exec(callback);
});

module.exports = EventObj.Event.discriminator('Death', Death);