/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');
var Character = require('../census/Character');

var BattleRankUp = mongoose.Schema({
    battle_rank: Number,
    character_id: {type: String, index: true}
}, EventObj.options);

BattleRankUp.virtual('character', function(callback){
    Character.findOne({character_id: this.character_id}).exec(callback);
});

module.exports = EventObj.Event.discriminator('BattleRankUp', BattleRankUp);
