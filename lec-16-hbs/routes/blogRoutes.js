const express= require("express");
const router = express.Router();
const blog = require("../model/blog")
router.post("/",async(req,res)=>{
    let {title,content,author, banner} = req.body;
    console.log(title,content,author)
    let newBlog = new blog({
      title:title,
      content:content,
      author:author,
      banner:banner.toString()
    })
    await newBlog.save();
    console.log(await blog.find())
    res.redirect("/")
  })
router.get("/",async(req,res)=>{
    let allblogs=await blog.find();
    // res.send(allblogs)
    console.log(allblogs)
    res.render("blogs",{
      blogs:allblogs
    })
  
})
  router.get("/:id",async(req,res)=>{
    let {id}= req.params;
    let oneblog= await blog.findById(id);
    // res.send(oneblog);
    res.render("oneblog",{
      title:oneblog.title,
      content:oneblog.content,
      author:oneblog.author
    })
  })
  router.delete("/:id",async(req,res)=>{
    let {id} = req.params;
    await blog.findByIdAndDelete(id);
    res.send("blog deleted")
  })
  router.put("/:id",async(req,res)=>{
    let {id} = req.params;
    let updateblog= await blog.findById(id);
    let {title,content,author} = req.body;
    updateblog.title =title;
    updateblog.content=content;
    updateblog.author=author;
    await updateblog.save();
    res.send(updateblog);
  
  })
module.exports= router;