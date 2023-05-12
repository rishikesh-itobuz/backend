const mongoose = require('mongoose');


const connectDb =async()=>{
    try{
       await mongoose.connect(process.env.CONN_STRING);
       console.log("Connection successful to database")

    }catch(error){
    console.log(error);
        
        
    }
}

module.exports = connectDb;