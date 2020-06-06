const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name: {
        type:String,
        require:true,
        trim:true,
    },
    last_name: {
        type:String,
        require:true,
        trim:true,
    },
    email:{
        type:String,
        require:true,
        trim:true,
    },
    password: {
        type:String,
        require:true,
        trim:true,
    },
});

const Users = mongoose.model('Users',
UserSchema);

module.exports = Users;