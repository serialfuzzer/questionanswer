const express = require('express');
const router = express.Router();
const questions = require('../model/questions');
const questionsController = require("./../controllers/questions");

router.post("/add",  questionsController.addQuestion);
router.post("/getByPostId",  questionsController.getAllQuestionsByPostId);
router.post("/checkAnswer", questionsController.checkAnswer);
router.post("/removeQuestionByQuestionId", questionsController.removeQuestion);


module.exports = router;