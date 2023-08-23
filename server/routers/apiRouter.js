const express = require("express");

const {
	getGraph,
	postGraph,
	getNetworkGraph,
	postNetworkGraph,
	saveTreeData,
	getCompanyList,
	postRadar,
	getRadar,
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

apiRouter.route("/radar/register").post(postRadar);

apiRouter.route("/radar/:id").get(getRadar);

module.exports = apiRouter;
