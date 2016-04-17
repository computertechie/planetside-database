var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));

var Outfit = new mongoose.Schema({
    outfit_id: {type: String, index: true},
    name: String,
    alias: String,
    member_count: String
},{
    timestamps: true
});

Outfit.path('createdAt').expires('30m');

module.exports = mongoose.model('Outfit', Outfit);