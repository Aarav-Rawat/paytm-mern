const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/paytm")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 15
    },
    password:{
        type: String,
        required: true,
       minlength: 6
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
        maxlength: 10,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        maxlength: 10,
    }

})