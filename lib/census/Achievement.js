/**
 * Created by Pepper on 4/17/2016.
 */

var mongoose = require('mongoose-fill');

var Achievement = new mongoose.Schema({
    achievement_id: {type: Number, index: true},
    name: {
        en: String
    },
    description: {
        en: String
    }
});

module.exports = mongoose.model('Achievement', Achievement);