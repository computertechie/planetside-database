/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');

var metagameevents = require('../local/MetagameEvent'),
    metagameeventstates = require('../local/MetagameEventState');

var MetagameEvent = new mongoose.Schema({
    experience_bonus: Number,
    faction_nc: Number,
    faction_tr: Number,
    faction_vs: Number,
    metagame_event_id: Number,
    metagame_event_state: Number
}, EventObj.options);

MetagameEvent.fill('event', function (callback) {
    callback(null, metagameevents[this.metagame_event_id]);
});

MetagameEvent.fill('state', function (callback) {
    callback(null, metagameeventstates[this.metagame_event_state]);
});

module.exports = EventObj.Event.discriminator('MetagameEvent', MetagameEvent);