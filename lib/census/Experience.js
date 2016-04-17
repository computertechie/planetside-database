var mongoose = require('mongoose-populate-virtuals')(require('mongoose'));

var Experience = new mongoose.Schema({
    experience_id: {type: Number, index: true},
    description: String,
    xp: Number
});

module.exports = mongoose.model('Experience', Experience);