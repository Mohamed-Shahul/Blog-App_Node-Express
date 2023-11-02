const express=require('express')
const morgan=require('morgan')
const mongoose=require('mongoose')
const blogRoutes=require('./routes/blogRoutes.js')

// Express App
const app=express()

// register view engine ---> using for viewing the ejs file to accept to run html in node/express server
app.set('view engine','ejs')

// connect to mongoDb
const URI='mongodb+srv://mohamedshahul:shahulCrudExpress@clustercrud.vfmaeaa.mongodb.net/express-crud'
mongoose.connect(URI)
.then(
app.listen(2000,()=>console.log('server runs on 2000'))
)
.catch((err)=>console.log(err))


// get data in site body-->req.body
app.use(express.urlencoded({extended:true}))


// 3rd Party Middlewares 
//using for routing logger automatically log the server requests 
app.use(morgan('dev'))
// MiddleWare for directly goes to see public folder and render inside the public folder style.css file
app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.redirect('/blogs')
})

// Routings...
app.use(blogRoutes)

app.use((req,res,next)=>{
    res.status(404).render('404')
})



// mongo db saving data and see mongoAtlas routes
// app.get('/addBlogs',(req,res)=>{
//     const blog=new Blog({
//         title:'new Blog 2',
//         snippet:'number 1',
//         body:'task are updated'
//     })
//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{console.log(err)})
// })
// app.get('/allBlogs',(req,res)=>{
    
//     Blog.find()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{console.log(err)})
// })
// app.get('/singleBlog',(req,res)=>{
    
//     Blog.findById('653644d82be37326658bc392')
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{console.log(err)})
// })

//MiddleWare
// app.use((req,res,next)=>{
//     console.log('middleware',req.path);
//     next();
// })

//404
// app.use((req,res)=>{
//     res.status(404).send('404')
// })
















// app.get('/',(req,res)=>{

//     // without using ejs
//     // res.sendFile(path.join(__dirname, '../servers/views/index.html'));

//     //using ejs
//     // res.render('home')
// })

// //Redirects
// app.get('/about',(req,res)=>{
//     res.send('About page')
// })
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about')
// })

