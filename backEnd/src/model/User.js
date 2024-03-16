const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    ID: Number,
    Email: String,
    FirstName : String,
    LastName : String
});


const UserSchema = mongoose.model('user', userSchema)
module.exports = UserSchema;