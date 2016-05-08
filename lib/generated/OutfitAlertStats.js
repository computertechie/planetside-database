/**
 * Created by ean.mclaughlin on 4/15/2016.
 */

var mongoose = require('mongoose-fill'),
    StatObj = require('./Stats');

var Facility = new mongoose.Schema({
    facility_id: Number,
    captures: Number,
    defenses: Number
});

var OutfitStat = mongoose.Schema({
    outfit_id: {type: String, index: true},
    facilities: [Facility]
}, StatObj.options);

var OutfitStatModel = StatObj.Stat.discriminator('Outfit', OutfitStat);

module.exports = OutfitStatModel;