/**
 * Created by ean.mclaughlin on 4/13/2016.
 */

var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));
var EventObj = require('./Event');

var PlayerLogin = new mongoose.Schema({
    character_id: String
}, EventObj.options);

PlayerLogin.virtual('character', {
    ref: 'Character',
    foreignKey: 'character_id',
    localKey: 'character_id'
});

module.exports = EventObj.Event.discriminator('PlayerLogin', PlayerLogin);