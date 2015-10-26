/**
 * Created by Pepper on 10/23/2015.
 */

var mongoose = require('mongoose');

module.exports = {

    AchievementEarned: mongoose.model('AchievementEarned', mongoose.Schema({
        character_id: Number,
        timestamp: Number,
        world_id: Number,
        achievement_id: Number,
        zone_id: Number
    })),

    BattleRankUp: mongoose.model('BattleRankUp', mongoose.Schema({
        battle_rank: Number,
        character_id: Number,
        timestamp: Number,
        world_id: Number,
        zone_id: Number
    })),

    Death: mongoose.model('Death', mongoose.Schema({
        attacker_character_id: Number,
        attacker_fire_mode_id: Number,
        attacker_loadout_id: Number,
        attacker_vehicle_id: Number,
        attacker_weapon_id: Number,
        character_id: Number,
        character_loadout_id: Number,
        is_critical: Boolean,
        is_headshot: Boolean,
        timestamp: Number,
        vehicle_id: Number,
        world_id: Number
    })),

    FacilityControl: mongoose.model('FacilityControl', mongoose.Schema({
        duration_held: Number,
        facility_id: Number,
        new_faction_id: Number,
        old_faction_id: Number,
        outfit_id: Number,
        timestamp: Number,
        world_id: Number
    })),

    GainExperience: mongoose.model('GainExperience', mongoose.Schema({
        amount: Number,
        character_id: Number,
        experience_id: Number,
        loadout_id: Number,
        other_id: Number,
        timestamp: Number,
        world_id: Number,
        zone_id: Number
    })),

    MetagameEvent: mongoose.model('MetagameEvent', mongoose.Schema({
        experience_bonus: Number,
        faction_nc: Number,
        faction_tr: Number,
        faction_vs: Number,
        metagame_event_id: Number,
        metagame_event_state: Number,
        timestamp: Number,
        world_id: Number,
        zone_id: Number
    })),

    PlayerFacilityCapture: mongoose.model('PlayerFacilityCapture', mongoose.Schema({
        character_id: Number,
        facility_id: Number,
        outfit_id: Number,
        timestamp: Number,
        world_id: Number,
        zone_id: Number
    })),

    PlayerFacilityDefend: mongoose.model('PlayerFacilityDefend', mongoose.Schema({
        character_id: Number,
        facility_id: Number,
        outfit_id: Number,
        timestamp: Number,
        world_id: Number,
        zone_id: Number
    })),

    VehicleDestroy: mongoose.model('VehicleDestroy', mongoose.Schema({
        attacker_character_id: Number,
        attacker_loadout_id: Number,
        attacker_vehicle_id: Number,
        attacker_weapon_id: Number,
        character_id: Number,
        facility_id: Number,
        faction_id: Number,
        timestamp: Number,
        vehicle_id: Number,
        world_id: Number,
        zone_id: Number
    })),

    ContinentLock: mongoose.model('ContinentLock', mongoose.Schema({
        timestamp: Number,
        world_id: Number,
        zone_id: Number,
        triggering_faction: Number,
        previous_faction: Number,
        vs_population: Number,
        nc_population: Number,
        tr_population: Number,
        metagame_event_id: Number,
        event_type: Number
    })),

    ContinentUnlock: mongoose.model('ContinentUnlock', mongoose.Schema({
        timestamp: Number,
        world_id: Number,
        zone_id: Number,
        triggering_faction: Number,
        previous_faction: Number,
        vs_population: Number,
        nc_population: Number,
        tr_population: Number,
        metagame_event_id: Number,
        event_type: Number
    })),

    ItemAdded: mongoose.model('ItemAdded', mongoose.Schema({
        character_id: Number,
        context: String,
        item_count: Number,
        item_id: Number,
        timestamp: Number,
        world_id: Number,
        zone_id: Number
    })),

    SkillAdded: mongoose.model('SkillAdded', mongoose.Schema({
        character_id: Number,
        skill_id: Number,
        timestamp: Number,
        world_id: Number,
        zone_id: Number
    })),

    OnlinePlayer: mongoose.model('OnlinePlayer', mongoose.Schema({
        character_id : Number,
        world_id : Number,
        timestamp: Number
    }))
};
