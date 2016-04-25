/**
 * Created by Pepper on 11/18/2015.
 */

module.exports = {
    Events: {
        AchievementEarned: require('./lib/events/AchievementEarned'),
        BattleRankUp: require('./lib/events/BattleRankUp'),
        ContinentLock: require('./lib/events/ContinentLock'),
        ContinentUnlock: require('./lib/events/ContinentUnlock'),
        Death: require('./lib/events/Death'),
        Event: require('./lib/events/Event'),
        FacilityControl: require('./lib/events/FacilityControl'),
        GainExperience: require('./lib/events/GainExperience'),
        MetagameEvent: require('./lib/events/MetagameEvent'),
        PlayerFacilityCapture: require('./lib/events/PlayerFacilityCapture'),
        PlayerFacilityDefend: require('./lib/events/PlayerFacilityDefend'),
        PlayerLogin: require('./lib/events/PlayerLogin'),
        PlayerLogout: require('./lib/events/PlayerLogout'),
        VehicleDestroy: require('./lib/events/VehicleDestroy')
    },

    Census: {
        Achievement: require('./lib/census/Achievement'),
        Character: require('./lib/census/Character'),
        Experience: require('./lib/census/Experience'),
        Facility: require('./lib/census/Facility'),
        Outfit: require('./lib/census/Outfit'),
        Weapon: require('./lib/census/Weapon')
    },

    Generated: {
        Alert: require('./lib/generated/Alert'),
        OnlinePlayer: require('./lib/generated/OnlinePlayer'),
        Session: require('./lib/generated/Session'),
        CharacterStat: require('./lib/generated/CharacterStat'),
        OutfitStat: require('./lib/generated/OutfitStat')
    },

    Locals: {
        Faction: require('./lib/local/Faction'),
        Loadout: require('./lib/local/Loadout'),
        MetagameEvent: require('./lib/local/MetagameEvent'),
        MetagameEventState: require('./lib/local/MetagameEventState'),
        Vehicle: require('./lib/local/Vehicle'),
        World: require('./lib/local/World'),
        Zone: require('./lib/local/Zone')
    }
};