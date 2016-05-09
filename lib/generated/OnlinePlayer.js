/**
 * Created by Pepper on 10/23/2015.
 */

var mongoose = require('mongoose-fill');

var OnlinePlayer = new mongoose.Schema({
    character_id: {type: String, index: true},
    outfit_id: {type: String, index: true},
    faction_id: Number,
    world_id: {type: Number, index: true},
    zone_id: Number,
    login: Date
}, {
    timestamps: true
});

OnlinePlayer.path('createdAt').expires('10m');

module.exports = mongoose.model('OnlinePlayer', OnlinePlayer);