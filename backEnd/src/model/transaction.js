const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    publicKey: String,
    dateCreated: Date
})


const transaction = mongoose.model('transactions', transactionSchema)
module.exports = transaction;