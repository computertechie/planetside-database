/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');
var Character = require('../census/Character'),
    Item = require('../census/Item'),
    loadouts = require('../local/Loadout'),
    vehicles = require('../local/Vehicle');

var Death = new mongoose.Schema({
    attacker_character_id: String,
    attacker_loadout_id: Number,
    attacker_vehicle_id: Number,
    attacker_weapon_id: Number,
    character_id: String,
    character_loadout_id: Number,
    is_critical: Boolean,
    is_headshot: Boolean,
    vehicle_id: Number
}, EventObj.options);

Death.fill('attacker', function (callback) {
    Character.findOne({character_id: this.attacker_character_id}).exec(callback);
});

Death.fill('character', function (callback) {
    Character.findOne({character_id: this.character_id}).exec(callback);
});

Death.fill('attacker_loadout', function (callback) {
    callback(null, loadouts[this.attacker_loadout_id]);
});

Death.fill('character_loadout', function (callback) {
    callback(null, loadouts[this.character_loadout_id]);
});

Death.fill('attacker_vehicle', function (callback) {
    callback(null, vehicles[this.attacker_vehicle_id]);
});

Death.fill('character_vehicle', function (callback) {
    callback(null, loadouts[this.vehicle_id]);
});

Death.fill('attacker_weapon', function (callback) {
    Item.findOne({item_id: this.attacker_weapon_id}).exec(callback);
});

var DeathModel = EventObj.Event.discriminator('Death', Death);
DeathModel.collection.createIndex({character_id: 1}, {
    background: true,
    partialFilterExpression: {character_id: {$exists: true}}
});
DeathModel.collection.createIndex({attacker_character_id: 1}, {
    background: true,
    partialFilterExpression: {attacker_character_id: {$exists: true}}
});
DeathModel.collection.createIndex({attacker_weapon_id: 1}, {
    background: true,
    partialFilterExpression: {attacker_weapon_id: {$exists: true}}
});
DeathModel.collection.createIndex({attacker_vehicle_id: 1}, {
    background: true,
    partialFilterExpression: {attacker_vehicle_id: {$exists: true}}
});
DeathModel.collection.createIndex({_vehicle_id: 1}, {
    background: true,
    partialFilterExpression: {_vehicle_id: {$exists: true}}
});

module.exports = DeathModel;