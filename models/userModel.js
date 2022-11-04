const mongoose = require('mongoose');
const validator = require('validator');
// const bycrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'please provide a valid email address'],
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
        
    },
    role: {
        type: String,
        required: true,
        enum:["FACULTY","STUDENT","ADMIN"]
    },
    isRegistered: {
        type:Boolean,
        default:false
    }
   
});
 
const User = mongoose.model('Users', userSchema);
module.exports = User;