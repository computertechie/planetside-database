/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));
var EventObj = require('./Event');

var MetagameEvent = new mongoose.Schema({
    experience_bonus: Number,
    faction_nc: Number,
    faction_tr: Number,
    faction_vs: Number,
    metagame_event_id: Number,
    metagame_event_state: Number
});

MetagameEvent.virtual('event', {
    ref: 'MetagameEvent',
    foreignKey: 'metagame_event_id',
    localKey: 'metagame_event_id'
});

MetagameEvent.virtual('state', {
    ref: 'MetagameEventState',
    foreignKey: 'metagame_event_state_id',
    localKey: 'metagame_event_state'
});

module.exports = EventObj.Event.discriminator('MetagameEvent', MetagameEvent);