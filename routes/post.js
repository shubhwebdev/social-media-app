const express = require('express')
const router = express.Router()
const Posts = require('./../models/post.js')


router.get('/',async (req,res)=>{
  const postReq = req.body

  const postsData = await Posts.find({});

  res.status(200).json(postsData)

})

module.exports = router

