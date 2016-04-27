/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');
var Character = require('../census/Character');
var Achievement = require('../census/Achievement');

var AchievementEarned = new mongoose.Schema({
    character_id: String,
    achievement_id: Number
}, EventObj.options);


AchievementEarned.fill('character', function (callback) {
    Character.find({character_id: this.character_id}).exec(callback);
});

AchievementEarned.fill('achievement', function (callback) {
    Achievement.find({achievement_id: this.achievement_id}).exec(callback);
});

var AchievementEarnedModel = EventObj.Event.discriminator('AchievementEarned', AchievementEarned);
AchievementEarnedModel.collection.createIndex({character_id: 1}, {
    background: true,
    partialFilterExpression: {character_id: {$exists: true}}
});
AchievementEarnedModel.collection.createIndex({achievement_id: 1}, {
    background: true,
    partialFilterExpression: {achievement_id: {$exists: true}}
});

module.exports = AchievementEarnedModel;