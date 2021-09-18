const express = require("express");
const db = require("../db");

const router = express.Router();

/**
 * This isn't incredibly efficient because we are using data stored in variables.
 * The time complexity here is O(m*n) where m is questions in the db and n
 * is the answers in the db. In the real world this would be optimized by using
 * a real query language which is why we have sql :)
 *
 * For the purposes of this exercise I decided to have an inneficient way of
 * querying our data so that I can show how I would model our data in a real app.
 *
 * In a real app I would use the following query to get the needed data:
 *
 * ```
 * WITH all_questions AS (
 * 		SELECT * FROM question
 * )
 * SELECT
 *   q.id as question_id,
 *   q.text as question_text,
 *   q.media as question_media,
 *   q.feedback as question_feedback,
 *   a.id as answer_id,
 *   a.text as answer_text
 * FROM all_questions aq
 * JOIN question_answer_lookup qal ON aq.id = qal.question_id
 * LEFT JOIN answer a ON a.id = qal.answer_id
 * ```
 *
 * I would then use a mapping function to get the data in the desired format
 * which would avoid our nested loops.
 */
router.get("/", (req, res) => {
  const questions = db.question;
  const knowledgeCheckBlocks = questions.map((question) => {
    question.answers = db.questionAnswerLookup.reduce(
      (answerAccumulator, questionAnswer) => {
        if (question.id === questionAnswer.questionId) {
          answerAccumulator.push(
            db.answer.find((answer) => answer.id === questionAnswer.answerId)
          );
        }
        return answerAccumulator;
      },
      []
    );
    return question;
  });
  res.send({ knowledgeCheckBlocks });
});

module.exports = router;
