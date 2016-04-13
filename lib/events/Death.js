/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));
var EventObj = require('./Event');

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

Death.virtual('attacker', {
    ref: 'Character',
    foreignKey: 'character_id',
    localKey: 'attacker_character_id'
});

Death.virtual('defender', {
    ref: 'Character',
    foreignKey: 'character_id',
    localKey: 'character_id'
});

Death.virtual('attacker_loadout', {
    ref: 'Loadout',
    foreignKey: 'loadout_id',
    localKey: 'attacker_loadout_id'
});

Death.virtual('defender_loadout', {
    ref: 'Loadout',
    foreignKey: 'loadout_id',
    localKey: 'character_loadout_id'
});

Death.virtual('attacker_vehicle', {
    ref: 'Vehicle',
    foreignKey: 'vehicle_id',
    localKey: 'attacker_vehicle_id'
});

Death.virtual('defender_vehicle', {
    ref: 'Vehicle',
    foreignKey: 'vehicle_id',
    localKey: 'vehicle_id'
});

Death.virtual('attacker_weapon', {
    ref: 'Weapon',
    foreignKey: 'weapon_id',
    localKey: 'attacker_weapon_id'
});

module.exports = EventObj.Event.discriminator('Death', Death);