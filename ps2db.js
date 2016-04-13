/**
 * Created by Pepper on 10/23/2015.
 */

var defaultConfig = require('./config/default');
var config = require('config');
var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));

var Events = {
    AchievementEarned: require('./lib/events/AchievementEarned'),
    BattleRankUp: require('./lib/events/BattleRankUp'),
    ContinentLock: require('./lib/events/ContinentLock'),
    ContinentUnlock: require('./lib/events/ContinentUnlock'),
    Death: require('./lib/events/Death'),
    FacilityControl: require('./lib/events/FacilityControl'),
    GainExperience: require('./lib/events/GainExperience'),
    MetagameEvent: require('./lib/events/MetagameEvent'),
    PlayerFacilityCapture: require('./lib/events/PlayerFacilityCapture'),
    PlayerFacilityDefend: require('./lib/events/PlayerFacilityDefend'),
    PlayerLogin: require('./lib/events/PlayerLogin'),
    PlayerLogout: require('./lib/events/PlayerLogout'),
    VehicleDestroy: require('./lib/events/VehicleDestroy')
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

PS2DB.prototype.save = function (event, callback) {
    var eventDoc = new Events[event.event_name](event);
    eventDoc.save(function (err, dbEvent) {
        if (err)
            return console.error(err);
        if (callback)
            callback(dbEvent);
    });
};

module.exports.PS2Database = PS2DB;
module.exports.events = Events;