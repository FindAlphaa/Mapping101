const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
	id: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: true,
	},
	radius: {
		type: Number,
		required: true,
	},
	opacity: {
		type: Number,
		required: true,
	},
});

const linkSchema = new Schema({
	source: {
		type: String,
		required: true,
		ref: "Node", // assuming the Node collection name is 'Node'
	},
	target: {
		type: String,
		required: true,
		ref: "Node", // assuming the Node collection name is 'Node'
	},
	value: {
		type: Number,
		required: true,
	},
});

const structureSchema = new Schema({
	graphId: {
		type: String,
		required: true,
		unique: true,
	},
	nodes: [nodeSchema],
	links: [linkSchema],
});

const Structure = mongoose.model("Structure", structureSchema);

module.exports = Structure;
