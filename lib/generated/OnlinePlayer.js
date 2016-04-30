/**
 * Created by Pepper on 10/23/2015.
 */

var mongoose = require('mongoose-fill');

var OnlinePlayer = new mongoose.Schema({
    character_id: {type: String, index: true},
    outfit_id: {type: String, index: true},
    faction_id: Number,
    world_id: {type: Number, index: true},
    zone_id: Number
});

module.exports = mongoose.model('OnlinePlayer', OnlinePlayer);