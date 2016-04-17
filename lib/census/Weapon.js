var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));

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

module.exports = mongoose.model('Weapon', Weapon);