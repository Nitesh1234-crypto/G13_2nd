const express= require("express");
const app = express();
const mongoose = require('mongoose');
const User = require("./model/user");
const blog = require("./model/blog");
const blogRoute= require("./routes/blogRoutes");
const userRoute= require("./routes/userRoutes")
// const blog = require("./model/blog");
app.use(express.json())
app.set('view engine', 'hbs');
//create a route to render home page
app.get("/home",(req,res)=>{
  res.render("home",{
    name:"Nitesh",
    age:23
  })
})




app.use("/blogs",blogRoute);
app.use("/users",userRoute);

mongoose.connect('mongodb://127.0.0.1:27017/g13mdb')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err))
app.listen(5555,(req,res)=>{
    console.log("server started")
})