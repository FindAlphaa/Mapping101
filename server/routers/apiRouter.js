const express = require("express");

const {
	getGraph,
	postGraph,
	getNetworkGraph,
	postNetworkGraph,
} = require("../controllers/apiController");

const apiRouter = express.Router();

apiRouter.route("/graph/register").post(postGraph);
apiRouter.route("/graph/:id").get(getGraph);
apiRouter
	.route("/network-graph/:id")
	.get(getNetworkGraph)
	.post(postNetworkGraph);

module.exports = apiRouter;
