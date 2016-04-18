/**
 * Created by Pepper on 10/23/2015.
 */

var mongoose = require('mongoose-fill');

var Character = require('../census/Character'),
    worlds = require('../local/World');

var OnlinePlayer = new mongoose.Schema({
    character_id: {type: String, index: true},
    world_id: {type: Number, index: true}
});

OnlinePlayer.fill('character', function (callback) {
    Character.findOne({character_id: this.character_id}).exec(callback);
});

OnlinePlayer.fill('world', function (callback) {
    callback(null, worlds[this.world_id]);
});

module.exports = mongoose.model('OnlinePlayer', OnlinePlayer);