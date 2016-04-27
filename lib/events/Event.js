/**
 * Created by ean.mclaughlin on 4/13/2016.
 */
var mongoose = require('mongoose-fill');
var worlds = require('../local/World'),
    zones = require('../local/Zone');

var options = {discriminatorKey: 'event_name'};

var Event = new mongoose.Schema({
        timestamp: {type: Date, index: true},
        world_id: {type: Number, index: true},
        zone_id: {type: Number, index: true}
    },
    options
);
Event.path('timestamp').expires('1 day');

Event.fill('world', function (callback) {
    callback(null, worlds[this.world_id]);
});

Event.fill('zone', function (callback) {
    callback(null, zones[this.zone_id]);
});

module.exports.Event = mongoose.model('Event', Event);
module.exports.options = options;