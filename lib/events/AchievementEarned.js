/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');
var Character = require('../census/Character');
var Achievement = require('../census/Achievement');

var AchievementEarned = new mongoose.Schema({
    character_id: {type: String, index: true},
    achievement_id: {type: Number, index: true}
}, EventObj.options);

AchievementEarned.fill('character', function(callback){
    Character.find({character_id: this.character_id}).exec(callback);
});

AchievementEarned.fill('achievement', function (callback) {
    Achievement.find({achievement_id: this.achievement_id}).exec(callback);
});

module.exports = EventObj.Event.discriminator('AchievementEarned', AchievementEarned);