/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');
var factions = require('../local/Faction');
var metagame_events = require('../local/MetagameEvent');

var ContinentUnlock = mongoose.Schema({
    triggering_faction: Number,
    previous_faction: Number,
    vs_population: Number,
    nc_population: Number,
    tr_population: Number,
    metagame_event_id: Number
}, EventObj.options);

ContinentUnlock.fill('triggerer', function (callback) {
    callback(null, factions[this.triggering_faction]);
});

ContinentUnlock.fill('previous', function (callback) {
    callback(null, factions[this.previous_faction]);
});

ContinentUnlock.fill('metagame_event', function (callback) {
    callback(null, metagame_events[this.metagame_event_id]);
});

module.exports = EventObj.Event.discriminator('ContinentUnlock', ContinentUnlock);