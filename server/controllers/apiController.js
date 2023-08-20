const Graph = require("../models/Graph");

exports.getGraph = async (req, res) => {
	const { id } = req.params;
	console.log(id);

	try {
		const data = await Graph.findOne({ nodeId: id });

		if (data) {
			console.log(data);
			return res.status(200).json(data);
		} else {
			return res
				.status(404)
				.json({ success: false, message: "Graph data not found" });
		}
	} catch (error) {
		console.log(error);
		return res.status(400).json({ success: false });
	}
};

exports.postGraph = async (req, res) => {
	let { nodeId, data } = req.body;
	data = JSON.parse(data);

	console.log(data);

	try {
		const graph = await Graph.create({ nodeId, data });

		return res.status(201).json({ success: true, data: graph });
	} catch (error) {
		console.log(error);

		return res.status(400).json({ success: false });
	}
};
