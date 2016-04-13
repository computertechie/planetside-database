/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));
var EventObj = require('./Event');

var Achievement = new mongoose.Schema({
    character_id: String,
    achievement_id: Number
}, EventObj.options);

Achievement.virtual('character', {
    ref: 'Character',
    foreignKey: 'character_id',
    localKey: 'character_id'
});

Achievement.virtual('achievement', {
    ref: 'Achievement',
    foreignKey: 'achievement_id',
    localKey: 'achievement_id'
});

module.exports = EventObj.Event.discriminator('AchievementEarned', Achievement);