/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');

var Character = require('../census/Character'),
    Item = require('../census/Item'),
    Facility = require('../census/Facility'),
    loadouts = require('../local/Loadout'),
    vehicles = require('../local/Vehicle'),
    factions = require('../local/Faction');

var VehicleDestroy = new mongoose.Schema({
    attacker_character_id: String,
    attacker_loadout_id: Number,
    attacker_vehicle_id: Number,
    attacker_weapon_id: Number,
    character_id: String,
    facility_id: Number,
    faction_id: Number,
    vehicle_id: Number
}, EventObj.options);

VehicleDestroy.fill('attacker', function (callback) {
    Character.findOne({character_id: this.attacker_character_id}).exec(callback);
});

VehicleDestroy.fill('character', function (callback) {
    Character.findOne({character_id: this.character_id}).exec(callback);
});

VehicleDestroy.fill('attacker_loadout', function (callback) {
    callback(null, loadouts[this.attacker_loadout_id]);
});

VehicleDestroy.fill('attacker_vehicle', function (callback) {
    callback(null, vehicles[this.attacker_vehicle_id]);
});

VehicleDestroy.fill('character_vehicle', function (callback) {
    callback(null, vehicles[this.vehicle_id]);
});

VehicleDestroy.fill('attacker_weapon', function (callback) {
    Item.findOne({item_id: this.attacker_weapon_id}).exec(callback);
});

VehicleDestroy.fill('facility', function (callback) {
    Facility.findOne({facility_id: this.facility_id}).exec(callback);
});

VehicleDestroy.fill('faction', function (callback) {
    callback(null, factions[this.faction_id]);
});

var Model = EventObj.Event.discriminator('VehicleDestroy', VehicleDestroy);
Model.collection.createIndex({character_id: 1}, {
    background: true,
    partialFilterExpression: {character_id: {$exists: true}}
});
Model.collection.createIndex({attacker_character_id: 1}, {
    background: true,
    partialFilterExpression: {attacker_character_id: {$exists: true}}
});
Model.collection.createIndex({attacker_weapon_id: 1}, {
    background: true,
    partialFilterExpression: {attacker_weapon_id: {$exists: true}}
});
Model.collection.createIndex({attacker_vehicle_id: 1}, {
    background: true,
    partialFilterExpression: {attacker_vehicle_id: {$exists: true}}
});
Model.collection.createIndex({vehicle_id: 1}, {
    background: true,
    partialFilterExpression: {vehicle_id: {$exists: true}}
});

module.exports = Model;