const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const merchandiserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    phone: {
        type: String,
        required: false,
    },
    userName: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    confirmPassword: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    
}, { timestamps: true });

module.exports = mongoose.model('Merch', merchandiserSchema);