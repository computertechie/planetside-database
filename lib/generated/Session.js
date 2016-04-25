var mongoose = require('mongoose-fill'),
    events = require('../Collections').Events;

var Session = new mongoose.Schema({
    character_id: String,
    total_kills: Number,
    total_deaths: Number,
    headshots: Number,
    deaths: [events.Death],
    achievements: [events.AchievementEarned],
    rankup: [events.BattleRankUp],
    experience: [events.GainExperience],
    facility_capture: [events.PlayerFacilityCapture],
    facility_defend: [events.PlayerFacilityCapture],
    vehicle_destroy: [events.VehicleDestroy]
});