/**
 * Created by Pepper on 11/18/2015.
 */

module.exports = {
    Events: {
        AchievementEarned: require('./events/AchievementEarned'),
        BattleRankUp: require('./events/BattleRankUp'),
        ContinentLock: require('./events/ContinentLock'),
        ContinentUnlock: require('./events/ContinentUnlock'),
        Death: require('./events/Death'),
        Event: require('./events/Event'),
        FacilityControl: require('./events/FacilityControl'),
        GainExperience: require('./events/GainExperience'),
        MetagameEvent: require('./events/MetagameEvent'),
        PlayerFacilityCapture: require('./events/PlayerFacilityCapture'),
        PlayerFacilityDefend: require('./events/PlayerFacilityDefend'),
        PlayerLogin: require('./events/PlayerLogin'),
        PlayerLogout: require('./events/PlayerLogout'),
        VehicleDestroy: require('./events/VehicleDestroy')
    },

    Census: {
        Achievement: require('./census/Achievement'),
        Character: require('./census/Character'),
        Experience: require('./census/Experience'),
        Facility: require('./census/Facility'),
        Outfit: require('./census/Outfit'),
        Item: require('./census/Item')
    },

    Generated: {
        Alert: require('./generated/Alert'),
        OnlinePlayer: require('./generated/OnlinePlayer'),
        Session: require('./generated/Session'),
        CharacterStat: require('./generated/CharacterAlertStats'),
        OutfitStat: require('./generated/OutfitAlertStats'),
        Stat: require('./generated/Stats')
    },

    Locals: {
        Faction: require('./local/Faction'),
        Loadout: require('./local/Loadout'),
        MetagameEvent: require('./local/MetagameEvent'),
        MetagameEventState: require('./local/MetagameEventState'),
        Vehicle: require('./local/Vehicle'),
        World: require('./local/World'),
        Zone: require('./local/Zone')
    }
};