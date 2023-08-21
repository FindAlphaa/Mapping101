const Graph = require("../models/Graph");
const formattedData = require("./formatted_data.json");

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
	try {
		await Graph.insertMany(formattedData);
		return res
			.status(200)
			.json({ success: true, message: "Data saved successfully!" });
	} catch (error) {
		console.error("Error saving data:", error);
		return res
			.status(500)
			.json({ success: false, message: "Failed to save data" });
	}
};
