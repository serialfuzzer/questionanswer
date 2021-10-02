const e = require("express");
const Posts = require("./../model/posts");

exports.addPost = async function (req, res, next) {
    const { title, imageUrl, content } = req.body;
    console.log(req.body);
    const newPost = new Posts({
        title,
        imageUrl,
        content: content
    })
    var saved = await newPost.save();
    const posts = await Posts.find({});
    res.send(posts);
}

exports.editPost = async function (req, res, next) {
    const { postId, content, title, imageUrl } = req.body;
    const posts = await Posts.findOneAndUpdate({_id: postId}, {$set: { content: content, title: title, imageUrl: imageUrl  }}, {new: true});
    res.send(posts);
}

exports.removePost = async function (req, res, next) {
    const { postId } = req.body;
    try {
        const post = await Posts.find({ _id: postId });
        if (Object.keys(post).length > 0) {
            const deletedPost = await Posts.deleteOne({ _id: postId });
            res.send(deletedPost);
            
        } else {
            res.status(403).json({
                "message": "Post not found"
            })
        }
    } catch (err) {
        throw new Error(err);
    }
}

exports.getAllPosts = async function (req, res, next) {
    const posts = await Posts.find();
    res.send(posts);
}

exports.getPosts = async function (req, res, next) {
    const { postId } = req.body;
    const posts = await Posts.find({
        _id: postId
    });
    res.send(posts);
}