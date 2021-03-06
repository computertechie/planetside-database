/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');
var Character = require('../census/Character');

var BattleRankUp = mongoose.Schema({
    battle_rank: Number,
    character_id: String
}, EventObj.options);

BattleRankUp.fill('character', function (callback) {
    Character.findOne({character_id: this.character_id}).exec(callback);
});

var BattleRankUpModel = EventObj.Event.discriminator('BattleRankUp', BattleRankUp);
BattleRankUpModel.collection.createIndex({character_id: 1}, {
    background: true,
    partialFilterExpression: {character_id: {$exists: true}}
});

module.exports = BattleRankUpModel;