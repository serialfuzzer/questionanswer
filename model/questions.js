const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const questionsSchema = new Schema({
    postId: {type: ObjectId, required: true},
    question: {type: String, required: true},
    answer: {type: String, required: true}
})



module.exports = mongoose.model('questions', questionsSchema);