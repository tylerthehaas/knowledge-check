const express = require("express");
const db = require("../db");

const router = express.Router();

function mapUserToUserResponse(userTable, answerTable) {
  const response = {
    mediaSize: userTable.mediaSize,
    answer: { id: userTable.answerId },
  };

  if (userTable.answerSubmitted) {
    const answer = answerTable.find(
      (answerItem) => userTable.answerId === answerItem.id
    );
    if (answer.isCorrect) {
      response.answer.submissionResponse = "correct";
    } else {
      response.answer.submissionResponse = "incorrect";
    }
  } else {
    response.answer.submissionResponse = "notSubmitted";
  }
  return response;
}

router.get("/", (req, res) => {
  const { user, answer } = db;
  const response = mapUserToUserResponse(user, answer);
  res.send(response);
});

router.post("/", (req, res) => {
  const { answerId } = req.body;
  if (answerId) {
    db.user = { ...db.user, answerId };
    const response = mapUserToUserResponse(db.user, db.answer);

    res.send(response);
  } else {
    const error = { message: "invalid answerId" };
    res.status(400).send(error);
  }
});

router.post("/answer", (req, res) => {
  const { answerId } = req.body;
  if (answerId) {
    db.user.answerSubmitted = true;
    const response = mapUserToUserResponse(db.user, db.answer);
    res.send(response);
  } else {
    const error = { message: "invalid answerId" };
    res.status(400).send(error);
  }
});

router.put("/reset", (req, res) => {
  db.user = {
    answerId: null,
    answerSubmitted: false,
    mediaSize: "normal", // can be normal | enlarged
  };
  const response = mapUserToUserResponse(db.user, db.answer);
  res.send(response);
});

module.exports = router;
