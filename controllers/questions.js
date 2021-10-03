const e = require("express");
const Questions = require("./../model/questions");

exports.addQuestion = async function (req, res, next) {
    const { question, answer, postId } = req.body;
    const newQuestion = new Questions({
        postId: postId,
        answer: answer,
        question: question
    })
    var saved = await newQuestion.save();
    const questions = await Questions.find({});
    res.send(questions);
}


exports.removeQuestion = async function (req, res, next) {
    const { questionId } = req.body;
    try {
        const question = await Questions.find({ _id: questionId });
        if (Object.keys(question).length > 0) {
            const deletedQuestion = await Questions.deleteOne({ _id: questionId });
            const deletedQuestionUpdated = await Questions.find({});
            res.send(deletedQuestionUpdated);
        } else {
            res.status(403).json({
                "message": "Question  not found"
            })
        }
    } catch (err) {
        throw new Error(err);
    }
    
}

exports.getAllQuestionsByPostId = async function (req, res, next) {
    const { postId } = req.body;
    const questions = await Questions.find({ postId }); 
    res.send(questions);
}

exports.getAQuestion = async function (req, res, next) {
    
}

exports.checkAnswer = async function (req, res, next) {
    const { questionId, answer } = req.body;
    const questions = await Questions.findOne({ _id: questionId }); 
    if( answer.toLowerCase() == questions.answer.toLowerCase()){
        res.json({
            "status": "correct",
            "questionId": questions._id
        })
    } else {
        res.json({
            "status": "incorrect",
            "questionId": questions._id
        })
    }
}
