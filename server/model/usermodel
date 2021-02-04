const db = require('../config/db')

var mongoose = require('mongoose');

require('mongoose-type-email');

var Schema =mongoose.Schema;

var UserSchema = new Schema({
    email:{
        type:mongoose.SchemaTypes.Email,
        trim:true,
        required:true,
        lowercase:true,
        
    },
    name:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        maxlength:10,
        minlength:5
    },
    phone:
    {
        type:Number,
        require:true,
        maxlength:10,
        minlength:10
    }
    
});

const userData= mongoose.model('userData', UserSchema);

module.exports= userData;
