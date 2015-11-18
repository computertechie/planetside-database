/**
 * Created by Pepper on 11/18/2015.
 */

var mongoose = require('mongoose');

module.exports = {
    simple: {
        Character: mongoose.model('SimpleCharacter', mongoose.Schema({
            _id: String,
            name: String,
            faction_id: Number,
            battle_rank: Number,
            outfit_id: String
        }))
    },

    complete: {
        Outfit: mongoose.model('Outfit', mongoose.Schema({
            _id: String,
            name: String,
            alias: String,
            created: Date,
            leader_id: String,
            member_count: Number
        })),

        Item: mongoose.model('Item', mongoose.Schema({
            _id: String,
            item_type_id: Number,
            item_category_id: Number,
            is_vehicle_weapon: Boolean,
            name : {
                de: String,
                en: String,
                es: String,
                fr: String,
                it: String,
                tr: String
            },
            description : {
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
                weapon_id : String,
                weapon_group_id: Number
            }
        }))
    }
};