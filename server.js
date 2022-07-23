const express=require('express')
const articleRouter=require('./routes/article.js')
const app=express();
const Article = require('./models/article')
const methodOverride = require('method-override')
const connectDB=require('./database/connection')

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

connectDB();
// app.get('/',(req,res)=>{
//     const articles=[{
// title:'test article',
// createdAt:new Date(),
// description:'test description'
// },
// {title:'test article2',
//     createdAt:new Date(),
//     description:'test description2'
//     }]
//     res.render('articles/index.ejs',{articles:articles})
// })
app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('articles/index', { articles: articles })
  })

app.use('/articles',articleRouter)
app.listen(3000)