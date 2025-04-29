const mongoose = require("mongoose");

let userSchema= new mongoose.Schema({
    name:{
        type:String,
        default:"xyz"
    },
    email: String,
    password:{
        type:String,
        require:true
    }
});
module.exports=mongoose.model("User",userSchema);