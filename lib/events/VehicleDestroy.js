/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));
var EventObj = require('./Event');

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

VehicleDestroy.virtual('attacker', {
    ref: 'Character',
    foreignKey: 'character_id',
    localKey: 'attacker_character_id'
});

VehicleDestroy.virtual('defender', {
    ref: 'Character',
    foreignKey: 'character_id',
    localKey: 'character_id'
});

VehicleDestroy.virtual('attacker_loadout', {
    ref: 'Loadout',
    foreignKey: 'loadout_id',
    localKey: 'attacker_loadout_id'
});

VehicleDestroy.virtual('attacker_vehicle', {
    ref: 'Vehicle',
    foreignKey: 'vehicle_id',
    localKey: 'attacker_vehicle_id'
});

VehicleDestroy.virtual('defender_vehicle', {
    ref: 'Vehicle',
    foreignKey: 'vehicle_id',
    localKey: 'vehicle_id'
});

VehicleDestroy.virtual('attacker_weapon', {
    ref: 'Weapon',
    foreignKey: 'weapon_id',
    localKey: 'attacker_weapon_id'
});

VehicleDestroy.virtual('facility', {
    ref: 'Facility',
    foreignKey: 'facility_id',
    localKey: 'facility_id'
});

VehicleDestroy.virtual('faction', {
    ref: 'Faction',
    foreignKey: 'faction_id',
    localKey: 'faction_id'
});

module.exports = EventObj.Event.discriminator('VehicleDestroy', VehicleDestroy);