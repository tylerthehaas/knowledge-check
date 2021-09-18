// we'll just use some variables as the "database" to get started
const db = {
  user: {
    answerId: null,
    answerSubmitted: false,
    mediaSize: "normal", // can be normal | enlarged
  },
  questionAnswerLookup: [
    {
      questionId: 1,
      answerId: 1,
    },
    {
      questionId: 1,
      answerId: 2,
    },
  ],
  question: [
    {
      id: 1,
      text: "What is this a picture of?",
      media: {
        type: "image",
        url: "https://images.articulate.com/f:jpg%7Cpng,a:retain,b:fff/rise/courses/S3jQ2LjHDoRsPUQmR7dp6hA7-IaoYPA4/d229V-nstxA6tZdi.gif",
      },
      feedback: "I just love cookies and a warm cup of coffee!",
    },
  ],
  answer: [
    {
      id: 1,
      text: "Cookies and coffee",
      isCorrect: true,
    },
    {
      id: 2,
      text: "Donuts and cider",
      isCorrect: false,
    },
  ],
};

module.exports = db;
