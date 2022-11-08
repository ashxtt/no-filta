const express = require('express')
const postRouter = express.Router()
const postData = require('../models/seed')
const Post = require('../models/post.js')


//Seed


//Index Route
postRouter.get('/', (req, res) => {
    Post.find({}, (error, allPosts) => {
        res.render('index.ejs', {posts: allPosts})
    })
})

//new
postRouter.get('/new', (req, res) =>{
    res.render('new.ejs')
})

//Delete
postRouter.delete('/:id', (req, res) =>{
    Post.findByIdAndRemove(req.params.id, (err, data) =>{
        res.redirect('/posts')
    })
})

//update route



//feed route
postRouter.post('/feed', (req, res) => {
    Post.create(req.body, (err, createdPost) =>{
        console.log(err, createdPost)
        res.redirect('/feed')
    })
})

//show
postRouter.get('/feed', (req, res)=>{
    Post.findById(req.params.id, (err, foundPost)=>{
        res.render('show.ejs', {
            data: posts[req.params.id]
        })
    })
})

module.exports = postRouter