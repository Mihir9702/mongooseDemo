const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    likesCoding: {
        type: Boolean,
        required: true
    },
    cohort: {
        type: String,
        enums: ['ftwd', 'ptwd', 'ftux', 'ptux']
    }
})

const User = mongoose.model('User', Schema);

module.exports = User;