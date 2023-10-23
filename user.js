// user.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    phoneNumber: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;