const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: {type: String, required: true},
    text: {type: String, required: true},
    img: {type: String, required: false}
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post