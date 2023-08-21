const Graph = require("../models/Graph");
const Structure = require("../models/Structure");

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
exports.getNetworkGraph = async (req, res) => {
	const { id } = req.params;
	console.log(id);

	try {
		const data = await Structure.findOne({ graphId: id });

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

exports.postNetworkGraph = async (req, res) => {
	try {
		const { id } = req.params;
		// Load the data (you may have to change this part depending on where and how you're getting the JSON data)
		const data = require(`./${id}.json`);

		// Check if data is already in the database. This step is optional and depends on your needs
		const existingData = await Structure.findOne({ graphId: id });
		if (existingData) {
			return res.status(400).send("Data already exists in the database.");
		}

		// Create a new entry
		const newStructure = new Structure({
			graphId: id,
			nodes: data.nodes,
			links: data.links,
		});

		// Save to the database
		const savedStructure = await newStructure.save();

		// Respond with the saved data
		return res.json(savedStructure);
	} catch (error) {
		console.error("Error saving the network graph:", error);
		return res.status(500).send("Server Error");
	}
};
