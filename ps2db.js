/**
 * Created by Pepper on 10/23/2015.
 */

var config = require('./config');
var mongoose = require('mongoose');
var Events = require('./lib/Events');

var PS2DB = function () {
    if (config.db_options.user)
        mongoose.connect(config.db_uri, config.db_options);
    else
        mongoose.connect(config.db_uri);
    var database = mongoose.connection;
};

PS2DB.prototype.save = function (event) {
    var eventDoc = new Events[event.event_type]();
    eventDoc.save(function (err, dbEvent) {
        if (err)
            return console.error(err);
    });
};

module.exports = new PS2DB();