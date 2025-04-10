const express= require("express");
const app = express();
const mongoose = require('mongoose');
const Blog = require("./model/blog")

const blogRoute= require("./routes/blogRoutes");
const userRoute= require("./routes/userRoutes")
// const blog = require("./model/blog");
app.use(express.json())
app.set('view engine', 'hbs');
//create a route to render home page
app.get("/",(req,res)=>{
  res.render("home",{
    name:"Nitesh",
    age:23,
    followers:["Ritik","parth","pratiyush","pranav"]
  })
})
app.get("/blogpage",async(req,res)=>{
  let allblogs= await  Blog.find();
  console.log(allblogs)
  res.render("blogs",{
    blogs:allblogs
  })
  //  res.render("blogs",{
  //     blogs:[{id:1,title:"my first blog", banner:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEv9fKeIqwR9CydwQDRXeJqACxhQtfD5oYA&s",
  //       content:"dshfdshfdsfafdsfdsjfsjdfjdsfjdsjfdsnfdsnfdsjnfdsfdsjfusfurewruweurskdskjdfdfjdsfudfjdsfdsfj"
  //     },
  //     {id:1,title:"my second blog", banner:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEv9fKeIqwR9CydwQDRXeJqACxhQtfD5oYA&s",
  //       content:"dshfdshfdsfafdsfdsjfsjdfjdsfjdsjfdsnfdsnfdsjnfdsfdsjfusfurewruweurskdskjdfdfjdsfudffkdsfkdfjdsfdsfj"
  //     }]
  //  })
  
})




app.use("/blogs",blogRoute);
app.use("/users",userRoute);

mongoose.connect('mongodb://127.0.0.1:27017/g13mdb')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err))
app.listen(5555,(req,res)=>{
    console.log("server started")
})