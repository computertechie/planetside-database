var mongoose = require('mongoose-fill');
var factions = require('../local/Faction');

var Item = new mongoose.Schema({
    item_id: {type: Number, index: true},
    is_vehicle_weapon: Boolean,
    name: {
        en: String
    },
    description: {
        en: String
    },
    faction_id: Number
});

Item.fill('faction', function (callback) {
    callback(null, factions[this.faction_id]);
});

module.exports = mongoose.model('Item', Item);