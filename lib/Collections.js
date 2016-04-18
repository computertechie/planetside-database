/**
 * Created by Pepper on 11/18/2015.
 */

var mongoose = require('mongoose-fill');

module.exports = {
    complete: {

        Item: mongoose.model('Item', mongoose.Schema({
            _id: String,
            item_type_id: Number,
            item_category_id: Number,
            is_vehicle_weapon: Boolean,
            name: {
                de: String,
                en: String,
                es: String,
                fr: String,
                it: String,
                tr: String
            },
            description: {
                de: String,
                en: String,
                es: String,
                fr: String,
                it: String,
                tr: String
            },
            faction_id: Number,
            image_path: String,
            skill_set_id: Number,
            weapon: {
                weapon_id: String,
                weapon_group_id: Number
            }
        })),

        stats: {
            CharacterStats: mongoose.model('CharacterStat', mongoose.Schema({
                _id: String,
                kills: Number,
                headshots: Number,
                deaths: Number,
                defenses: Number,
                captures: Number,
                experience_events: []
            })),

            OutfitStats: mongoose.model('OutfitStat', mongoose.Schema({
                _id: String,
                kills: Number,
                headshots: Number,
                deaths: Number,
                defenses: Number,
                captures: Number,
                num_participants: Number
            })),

            FactionStats: mongoose.model('FactionStat', mongoose.Schema({
                _id: Number,
                kills: Number,
                headshots: Number,
                deaths: Number,
                captures: Number,
                defenses: Number,
                losses: Number,
                num_participants: Number
            })),

            FacilityStats: mongoose.model('FacilityStat', mongoose.Schema({
                _id: Number,
                defenses: Number,
                captures: Number
            })),

            WeaponStats: mongoose.model('WeaponStat', mongoose.Schema({
                _id: String,
                kills: Number,
                headshots: Number
            }))
        }
    }
};