const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  featured_img: String,
  publish_date: {
    type: Date,
    default: new Date()
  }
}) 

const Post = mongoose.model('Post',PostSchema)

module.exports = Post