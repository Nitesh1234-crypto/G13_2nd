const express= require("express");
const router = express.Router();

router.post("/",async(req,res)=>{
    let {title,content,author} = req.body;
    let newBlog = new blog({
      title:title,
      content:content,
      author:author
    })
    await newBlog.save();
    res.send("blog added")
  })
router.get("/",async(req,res)=>{
    let allblogs=await blog.find();
    res.send(allblogs)
  
})
  router.get("/:id",async(req,res)=>{
    let {id}= req.params;
    let oneblog= await blog.findById(id);
    res.send(oneblog);
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