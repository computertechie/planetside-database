var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));

var Character = new mongoose.Schema({
    character_id: {type: String, index: true},
    name: {
        first: String
    },
    faction_id: Number,
    times: {
        last_login: Date
    },
    certs: {
        available_points: Number
    },
    battle_rank: {
        value: Number
    },
    outfit: {
        outfit_id: String,
        name: String,
        member_count: Number,
        alias: String
    }
},{
    timestamps: true
});

Character.path('createdAt').expires('5m');

module.exports = mongoose.model('Character', Character);