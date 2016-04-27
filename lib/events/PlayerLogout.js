/**
 * Created by ean.mclaughlin on 4/13/2016.
 */

var mongoose = require('mongoose-fill');
var EventObj = require('./Event');

var Character = require('../census/Character');

var PlayerLogout = new mongoose.Schema({
    character_id: String
}, EventObj.options);

PlayerLogout.fill('character', function (callback) {
    Character.findOne({character_id: this.character_id}).exec(callback);
});

var Model = EventObj.Event.discriminator('PlayerLogout', PlayerLogout);
Model.collection.createIndex({character_id: 1}, {
    background: true,
    partialFilterExpression: {character_id: {$exists: true}}
});

module.exports = Model;