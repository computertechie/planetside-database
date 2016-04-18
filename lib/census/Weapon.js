var mongoose = require('mongoose-fill');
var factions = require('../local/Faction');

var Weapon = new mongoose.Schema({
    weapon_id: {type: Number, index: true},
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

Weapon.fill('faction', function (callback) {
    callback(null, factions[this.faction_id]);
});

module.exports = mongoose.model('Weapon', Weapon);