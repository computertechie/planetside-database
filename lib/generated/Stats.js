/**
 * Created by Pepper on 4/30/2016.
 */
var mongoose = require('mongoose-fill');

var options = {discriminatorKey: 'type'};

var Stat = new mongoose.Schema({
    faction_id: Number,
    world_id: {type: Number, index: true},
    alert_id: {type: Number, index: true},
    kills: Number,
    deaths: Number,
    headshots: Number,
    revives: Number
}, options);

module.exports.Stat = mongoose.model('Stat', Stat);
module.exports.options = options;

