const express = require("express");
const morgan = require("morgan");
const { knowledgeCheckBlocksRouter, userRouter } = require("./routers");

function server() {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(express.json());
  app.use(morgan("dev"));
  app.use(function setResponseHeaders(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT");
    next();
  });

  app.use("/knowledge-check-blocks", knowledgeCheckBlocksRouter);
  app.use("/user", userRouter);

  app.start = app.listen.bind(app, port, () =>
    console.log(`Listening on port ${port}`)
  );

  return app;
}

if (require.main === module) server().start();

module.exports = server;
