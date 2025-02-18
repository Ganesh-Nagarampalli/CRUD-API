const mongoose = require('mongoose');

const userDetailsSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required:true
        },
        password:{
            type:String,
            required:true,
            unique:true
        }
    }

);

const user = mongoose.model("user", userDetailsSchema);

module.exports = user;