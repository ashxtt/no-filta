const express = require('express')
const postRouter = express.Router()
const postData = require('../models/seed')
const Post = require('../models/post.js')


//Seed


//Index Route
postRouter.get('/nofilta', (req, res) => {
    Post.find({}, (error, allPosts) => {
        res.render('index.ejs', {posts: allPosts})
    })
})

postRouter.get('/new', (req, res) =>{
    res.render('new.ejs')
})


module.exports = postRouter