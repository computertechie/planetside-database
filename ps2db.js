/**
 * Created by Pepper on 10/23/2015.
 */

var defaultConfig = require('./config/default');
var config = require('config');
var mongoose = require('mongoose-fill');

var Events = {
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
};

var Census = {
    Achievement: require('./lib/census/Achievement'),
    Character: require('./lib/census/Character'),
    Experience: require('./lib/census/Experience'),
    Facility: require('./lib/census/Facility'),
    Outfit: require('./lib/census/Outfit'),
    Weapon: require('./lib/census/Weapon')
};

var Generated = {
    Alert: require('./lib/generated/Alert'),
    OnlinePlayer: require('./lib/generated/OnlinePlayer'),
    Session: require('./lib/generated/Session'),
    CharacterStat: require('./lib/generated/CharacterStat'),
    OutfitStat: require('./lib/generated/OutfitStat')
};

var Locals = {
    Faction: require('./lib/local/Faction'),
    Loadout: require('./lib/local/Loadout'),
    MetagameEvent: require('./lib/local/MetagameEvent'),
    MetagameEventState: require('./lib/local/MetagameEventState'),
    Vehicle: require('./lib/local/Vehicle'),
    World: require('./lib/local/World'),
    Zone: require('./lib/local/Zone')
};

var PS2DB = function (options) {
    config.util.extendDeep(defaultConfig, options);
    config.util.setModuleDefaults('database', defaultConfig);

    if (config.has('database.db_options.user') && config.get('database.db_options.user'))
        mongoose.connect(config.get('database.db_uri'), config.get('database.db_options'));
    else
        mongoose.connect(config.get('database.db_uri'));
    var database = mongoose.connection;
};

module.exports.PS2Database = PS2DB;
module.exports.events = Events;
module.exports.local = Locals;
module.exports.generated = Generated;
module.exports.census = Census;