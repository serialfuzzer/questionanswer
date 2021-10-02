const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const postsSchema = new Schema({
    title: {type: String, required: false},
    imageUrl: {type: String, required: false},
    content: {type: String, required: false}
})



module.exports = mongoose.model('posts', postsSchema);