const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    phone:{
        type:String,
        required:true
    },
    account_activate:{
        type:Boolean,
        default:false,
        required:false
    }
},{
    timestamps:true   // to add creation time in user automatically
})

module.exports = mongoose.model('Users',userSchema)