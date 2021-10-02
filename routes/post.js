const express = require('express');
const router = express.Router();
const posts = require('../model/posts');
const postsController = require("./../controllers/posts");

router.post("/add",  postsController.addPost);
router.get("/get",  postsController.getAllPosts);
router.post("/getPostById", postsController.getPosts);
router.post("/editPost", postsController.editPost);
router.post("/removePost", postsController.removePost);
module.exports = router;