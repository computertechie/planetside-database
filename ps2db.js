/**
 * Created by Pepper on 10/23/2015.
 */

var config = require('./config/default');
var mongoose = require('mongoose-fill');
var Collections = require('./lib/Collections');

var PS2DB = function (options) {
    if (options) {
        for (option in config) {
            if (!options[option])
                options[option] = config[option];
        }
    }
    else
        options = config;

    if (options.db_uri && options.db_options)
        mongoose.connect(options.db_uri, options.db_options);
    else
        mongoose.connect(options.db_uri);

    return {
        connection: mongoose.connection,
        collections: Collections
    }
};

module.exports = PS2DB;