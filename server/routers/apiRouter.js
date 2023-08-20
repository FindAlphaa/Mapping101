const express = require("express");

const { getGraph, postGraph } = require("../controllers/apiController");

const apiRouter = express.Router();

apiRouter.route("/graph/register").post(postGraph);
apiRouter.route("/graph/:id").get(getGraph);

module.exports = apiRouter;
