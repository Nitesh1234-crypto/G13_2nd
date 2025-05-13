const express= require("express");
const router = express.Router();

router.post("/",async(req,res)=>{
  let {name,email,password} = req.body;
  let newUser=new User({name:name,email:email,password:password});
  await newUser.save(); //will add data into user collection
  //any query to the database is asynchronous.
  res.send("user added")
})


module.exports=router