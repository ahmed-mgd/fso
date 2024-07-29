const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')

mongoose.connect(config.MONGO_URI)

const blogsRouter = require('./controllers/blogs')
app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use('/api/blogs', blogsRouter)

module.exports = app
