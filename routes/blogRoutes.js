const express=require('express')
const Blog=require('../models/blog.js')

const blogController=require('../controllers/blogController.js')

const router=express.Router()

router.get('/blogs',blogController.blogIndex)
router.get('/create',blogController.blogCreate)
router.get('/about',blogController.blogAbout)
router.post('/blogs',blogController.blogPost)
router.get('/:id',blogController.blogDetails)  
router.delete('/:id',blogController.blogDelete)


module.exports=router;