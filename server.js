const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const postsController = require('./controllers/posts')
const Post = require('./models/post.js')


//env
require("dotenv").config()

//middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use('/posts', postsController)


//Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection
  db.on("error", (err) => console.log(err.message))
  db.on("connected", () => console.log("mongo connected"))
  db.on("disconnected", () => console.log("mongo disconnected"))



//listener
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`PORT: ${PORT} is livin`))
