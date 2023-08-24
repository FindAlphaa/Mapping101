const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TreeNodeSchema = new Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	size: {
		type: Number,
	},
	color: {
		type: String,
	},
	children: [
		{
			type: Schema.Types.ObjectId,
			ref: "TreeNode",
		},
	],
});

const TreeNode = mongoose.model("TreeNode", TreeNodeSchema);

module.exports = TreeNode;
