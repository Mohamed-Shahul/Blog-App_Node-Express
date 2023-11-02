const Blog=require('../models/blog.js')


const blogIndex=(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('blogs',{blogs:result})
    })
    .catch((err)=>{
        res.send(err)
    })
}

const blogCreate=(req,res)=>{
    res.render('create')
}
const blogAbout=(req,res)=>{
    res.render('about')
}
const blogPost=(req,res)=>{
    const blog=new Blog(req.body)
    blog.save()
    .then((result)=>{
     res.redirect('/blogs')
    })
    .catch((err)=>{
     res.send(err)
    })
}
const blogDetails=(req,res)=>{
    const id=req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('details',{blogs:result})
    })
    .catch((err)=>{
        res.send(err)
    })
}
const blogDelete=(req,res)=>{
    const id=req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect:'/blogs'})
    })
    .catch((err)=>{
        res.send(err)
    })  
}


module.exports={
    blogIndex,blogCreate,blogPost,blogDetails,blogDelete,blogAbout
}