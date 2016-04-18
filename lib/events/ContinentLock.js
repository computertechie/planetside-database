/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');
var factions = require('../local/Faction');
var metagame_events = require('../local/MetagameEvent');

var ContinentLock = mongoose.Schema({
    triggering_faction: Number,
    previous_faction: Number,
    vs_population: Number,
    nc_population: Number,
    tr_population: Number,
    metagame_event_id: Number
}, EventObj.options);

ContinentLock.fill('triggerer', function (callback) {
    callback(null, factions[this.triggering_faction]);
});

ContinentLock.fill('previous', function (callback) {
    callback(null, factions[this.previous_faction]);
});

ContinentLock.fill('metagame_event', function (callback) {
    callback(null, metagame_events[this.metagame_event_id]);
});

module.exports = EventObj.Event.discriminator('ContinentLock', ContinentLock);