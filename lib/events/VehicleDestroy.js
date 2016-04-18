/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');

var Character = require('../census/Character'),
    Weapon = require('../census/Weapon'),
    Facility = require('../census/Facility'),
    loadouts = require('../local/Loadout'),
    vehicles = require('../local/Vehicle'),
    factions = require('../local/Faction');

var VehicleDestroy = new mongoose.Schema({
    attacker_character_id: {type: String, index: true},
    attacker_loadout_id: Number,
    attacker_vehicle_id: Number,
    attacker_weapon_id: {type: Number, index: true},
    character_id: {type: String, index: true},
    facility_id: Number,
    faction_id: Number,
    vehicle_id: Number
}, EventObj.options);

VehicleDestroy.fill('attacker', function (callback) {
    Character.findOne({character_id: this.attacker_character_id}).exec(callback);
});

VehicleDestroy.fill('defender', function (callback) {
    Character.findOne({character_id: this.character_id}).exec(callback);
});

VehicleDestroy.fill('attacker_loadout', function (callback) {
    callback(null, loadouts[this.attacker_loadout_id]);
});

VehicleDestroy.fill('attacker_vehicle', function (callback) {
    callback(null, vehicles[this.attacker_vehicle_id]);
});

VehicleDestroy.fill('defender_vehicle', function (callback) {
    callback(null, vehicles[this.vehicle_id]);
});

VehicleDestroy.fill('attacker_weapon', function (callback) {
    Weapon.findOne({weapon_id: this.attacker_weapon_id}).exec(callback);
});

VehicleDestroy.fill('facility', function (callback) {
    Facility.findOne({facility_id: this.facility_id}).exec(callback);
});

VehicleDestroy.fill('faction', function (callback) {
    callback(null, factions[this.faction_id]);
});

module.exports = EventObj.Event.discriminator('VehicleDestroy', VehicleDestroy);