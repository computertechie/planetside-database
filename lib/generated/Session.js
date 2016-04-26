var mongoose = require('mongoose-fill'),
    Death = require('../events/Death'),
    AchievementEarned = require('../events/AchievementEarned'),
    BattleRankUp = require('../events/BattleRankUp'),
    GainExperience = require('../events/GainExperience'),
    PlayerFacilityCapture = require('../events/PlayerFacilityCapture'),
    PlayerFacilityDefend = require('../events/PlayerFacilityDefend'),
    VehicleDestroy = require('../events/VehicleDestroy');
    
var Session = new mongoose.Schema({
    character_id: String,
    total_kills: Number,
    total_deaths: Number,
    headshots: Number,
    deaths: [Death],
    achievements: [AchievementEarned],
    rankup: [BattleRankUp],
    experience: [GainExperience],
    facility_capture: [PlayerFacilityCapture],
    facility_defend: [PlayerFacilityDefend],
    vehicle_destroy: [VehicleDestroy]
});