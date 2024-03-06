const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type:String, required: true},
    isAdmin: {type: Boolean, default: false}
})

module.exports = mongoose.model('users', UserSchema)