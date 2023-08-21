const mongoose = require("mongoose");

const graphSchema = new mongoose.Schema({
	nodeId: {
		type: String,
		required: true,
	},

	data: {
		type: [Number], // Array of numbers
		required: true,
	},
});

const Graph = mongoose.model("Graph", graphSchema);

module.exports = Graph;
