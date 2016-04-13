/**
 * Created by Pepper on 10/23/2015.
 */

var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));

var OnlinePlayer = new mongoose.Schema({
    character_id: String,
    world_id: Number
});

OnlinePlayer.virtual('character', {
    ref: 'Character',
    foreignKey: 'character_id',
    localKey: 'character_id'
});

OnlinePlayer.virtual('world', {
    ref: 'World',
    foreignKey: 'world_id',
    localKey: 'world_id'
});

module.exports = mongoose.model('OnlinePlayer', OnlinePlayer);
