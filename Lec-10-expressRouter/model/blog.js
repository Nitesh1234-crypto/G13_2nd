const mongoose = require("mongoose");

let blogSchema= new mongoose.Schema({
    title:{
        type:String,
    },
    content: String,
    author:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
});
module.exports=mongoose.model("Blog",blogSchema);