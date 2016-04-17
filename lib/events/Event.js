/**
 * Created by ean.mclaughlin on 4/13/2016.
 */

var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));

var options = {discriminatorKey: 'event_name'};

var Event = new mongoose.Schema({
        timestamp: Date,
        world_id: Number,
        zone_id: Number,
        alert_id: Number
    },
    options
);

Event.virtual('world', {
    ref: 'World',
    foreignKey: 'world_id',
    localKey: 'world_id'
});

Event.virtual('zone', {
    ref: 'Zone',
    foreignKey: 'zone_id',
    localKey: 'zone_id'
});

Event.virtual('alert', {
    ref: 'Alert',
    foreignKey: 'alert_id',
    localKey: 'alert_id'
});

module.exports.Event = mongoose.model('Event', Event);
module.exports.options = options;

