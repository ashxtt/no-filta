const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const postsController = require('./controllers/post')

//env
require("dotenv").config()

//middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use('/post', postsController)
app.use(express.static('public'))

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
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`PORT: ${PORT} is livin`))
