const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post.js')





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
/*
postRouter.delete('/:id', (req, res) =>{
    Post.findByIdAndRemove(req.params.id, (err, data) =>{
        res.redirect('/feed')
    })
})
*/

//update route
postRouter.put('/:id', (rew, res) =>{
    Post.findByIdAndUpdate(req.params.id, req.body, ()=>{
        res.redirect('/feed')
    })
})

//create
postRouter.post('/posts', (req, res)=>{
    Post.create(req.body, (err, createdPost)=>{
        if(err) console.log(err);
        res.redirect('/feed')
    })
})

//show
postRouter.get('/:id', (req, res)=>{
    Post.findById(req.params.id, (err, foundPost)=>{
        res.render('show.ejs', {
           post: foundPost,
           
        })
    })
})

module.exports = postRouter