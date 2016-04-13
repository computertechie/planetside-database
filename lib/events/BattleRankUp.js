/**
 * Created by ean.mclaughlin on 4/12/2016.
 */

var BattleRankUp = mongoose.Schema({
    battle_rank: Number,
    character_id: String,
    timestamp: Number,
    world_id: Number,
    zone_id: Number
});

BattleRankUp.virtual('world', {
    ref: 'World',
    foreignKey: 'world_id',
    localKey: 'world_id'
});

BattleRankUp.virtual('zone', {
    ref: 'Zone',
    foreignKey: 'zone_id',
    localKey: 'zone_id'
});

BattleRankUp.virtual('character', {
    ref: 'Character',
    foreignKey: 'character_id',
    localKey: 'character_id'
});

module.exports = mongoose.model('BattleRankUp', BattleRankUp);
