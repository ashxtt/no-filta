const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    description: {type: String, required: true},
    img: {type: String, required: true}
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post