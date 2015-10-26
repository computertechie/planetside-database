/**
 * Created by Pepper on 10/23/2015.
 */

var defaultConfig = require('./config/default');
var config = require('config');
var mongoose = require('mongoose');
var Events = require('./lib/Events');

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