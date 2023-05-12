const  mongoose  = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a valid name"]
    },
    roll:{
        unique: true,
        type:Number,
        required:true,
        
    },
    phone:{
        type:Number,
        require:[true,"Please provide the phone number"],
        minLength:10
    }
})

const Contac = mongoose.model('Contac',schema);

module.exports = Contac;