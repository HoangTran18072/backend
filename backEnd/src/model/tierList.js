const mongoose = require('mongoose')

const tierListSchema = new mongoose.Schema({
    tier: Number,
    sogo_cost: Number,
    quantity: Number
});


const tierList = mongoose.model('tierLists', tierListSchema)
module.exports = tierList;