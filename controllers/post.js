const express = require('express')
const postRouter = express.Router()
const postData = require('../models/seed.js')
const Post = require('../models/post.js')
console.log(Post)
//Index Route
postRouter.get('/', (req, res) => {
    Post.find({}, (error, allPosts) => {
        res.render('index.ejs', {
            posts: allPosts
        })
    })
})


module.exports = postRouter