/**
 * Created by ean.mclaughlin on 4/13/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');

var Character = require('../census/Character');

var PlayerLogin = new mongoose.Schema({
    character_id: {type: String, index: true}
}, EventObj.options);

PlayerLogin.fill('character', function (callback) {
    Character.findOne({character_id: this.character_id}).exec(callback);
});

module.exports = EventObj.Event.discriminator('PlayerLogin', PlayerLogin);