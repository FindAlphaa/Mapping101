const express = require("express");

const {
	getGraph,
	postGraph,
	getNetworkGraph,
	postNetworkGraph,
	saveTreeData,
	getCompanyList,
} = require("../controllers/apiController");

const apiRouter = express.Router();

apiRouter.route("/graph/register").post(postGraph);
apiRouter.route("/graph/:id").get(getGraph);
apiRouter
	.route("/network-graph/:id")
	.get(getNetworkGraph)
	.post(postNetworkGraph);

apiRouter.route("/company/register").post(saveTreeData);

apiRouter.route("/company/:id").get(getCompanyList);

module.exports = apiRouter;
