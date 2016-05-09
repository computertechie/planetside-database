/**
 * Created by ean.mclaughlin on 4/15/2016.
 */

var mongoose = require('mongoose-fill'),
    StatObj = require('./Stats'),
    Facilities = require('../census/Facility'),
    Outfits = require('../census/Outfit');

var Facility = new mongoose.Schema({
    facility_id: Number,
    captures: Number,
    defenses: Number
});
Facility.fill('facility', function (callback) {
    Facilities.findOne({facility_id: this.facility_id}).lean().exec(callback);
});

var OutfitStat = mongoose.Schema({
    outfit_id: {type: String, index: true},
    facilities: [Facility]
}, StatObj.options);
OutfitStat.fill('outfit', function (callback) {
    Outfits.findOne({outfit_id: this.outfit_id}).lean().exec(callback);
});

var OutfitStatModel = StatObj.Stat.discriminator('Outfit', OutfitStat);

module.exports = OutfitStatModel;