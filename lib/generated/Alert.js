var mongoose = require('mongoose-fill'),
    FacilityEvent = require('../events/FacilityControl');

var Loadout = new mongoose.Schema({
    loadout_id: Number,
    kills: Number,
    deaths: Number,
    headshots: Number
});

var Weapon = new mongoose.Schema({
    weapon_id: Number,
    kills: Number,
    deaths: Number,
    headshots: Number
});

var Vehicle = new mongoose.Schema({
    vehicle_id: Number,
    destroyed: Number,
    lost: Number,
    deaths_to: Number,
    kills_with: Number
});

var Facility = new mongoose.Schema({
    facility_id: Number,
    captures: Number,
    defenses: Number
});

var ExperienceEvent = new mongoose.Schema({
    event_id: Number,
    count: Number
});

var Achievement = new mongoose.Schema({
    achievement_id: Number,
    count: Number
});

var Stats = new mongoose.Schema({
    kills: Number,
    deaths: Number,
    headshots: Number,
    loadouts: [Loadout],
    weapons: [Weapon],
    vehicles: [Vehicle],
    facilities: [Facility],
    experience_events: [ExperienceEvent],
    achievements: [Achievement]
});

var Character = new mongoose.Schema({
    character_id: String,
    outfit_id: Number,
    stats: Stats
});

var Outfit = new mongoose.Schema({
    outfit_id: String,
    stats: Stats
});

var Alert = new mongoose.Schema({
    world_id: Number,
    zone_id: Number,
    instance_id: Number,
    start: {
        time: Date,
        vs_control: Number,
        nc_control: Number,
        tr_control: Number
    },
    end: {
        time: Date,
        vs_control: Number,
        nc_control: Number,
        tr_control: Number
    },
    characters: [Character],
    outfits: [Outfit],
    facility_events: [FacilityEvent]
});