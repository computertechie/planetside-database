/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));
var EventObj = require('./Event');

var ContinentUnlock = mongoose.Schema({
    timestamp: Number,
    world_id: Number,
    zone_id: Number,
    triggering_faction: Number,
    previous_faction: Number,
    vs_population: Number,
    nc_population: Number,
    tr_population: Number,
    metagame_event_id: Number,
    event_type: Number
}, EventObj.options);

ContinentUnlock.virtual('world', {
    ref: 'World',
    foreignKey: 'world_id',
    localKey: 'world_id'
});

ContinentUnlock.virtual('zone', {
    ref: 'Zone',
    foreignKey: 'zone_id',
    localKey: 'zone_id'
});

ContinentUnlock.virtual('triggerer', {
    ref: 'Faction',
    foreignKey: 'faction_id',
    localKey: 'triggering_faction'
});

ContinentUnlock.virtual('previous', {
    ref: 'Faction',
    foreignKey: 'faction_id',
    localKey: 'previous_faction'
});

ContinentUnlock.virtual('metagame_event', {
    ref: 'MetagameEvent',
    foreignKey: 'metagame_event_id',
    localKey: 'metagame_event_id'
});

module.exports = EventObj.Event.discriminator('ContinentUnlock', ContinentUnlock);