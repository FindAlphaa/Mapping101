const Graph = require("../models/Graph");
const Structure = require("../models/Structure");

const TreeNode = require("../models/TreeNode");

const Radar = require("../models/Radar");

const formattedData = require("./formatted_data.json");
// const itCompany = require("./tree_node.json");

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

async function saveNodeRecursive(nodeData) {
	let node = new TreeNode({
		name: nodeData.name,
		description: nodeData.description,
		size: nodeData.size,
		color: nodeData.color,
	});

	if (nodeData.children && nodeData.children.length > 0) {
		for (let child of nodeData.children) {
			let childNode = await saveNodeRecursive(child);
			node.children.push(childNode._id);
		}
	}

	await node.save();
	return node;
}

// 컨트롤러 함수
exports.saveTreeData = async (req, res) => {
	try {
		const treeData = require("./tree_node.json"); // tree_node.json 파일의 경로를 적절하게 수정해주세요.
		await saveNodeRecursive(treeData);
		res.status(200).send({ message: "Tree data successfully saved!" });
	} catch (error) {
		res.status(500).send({
			message: "Error saving tree data",
			error: error.message,
		});
	}
};
// 재귀적으로 children을 populate하는 함수
async function populateChildrenRecursive(node) {
	if (node.children && node.children.length > 0) {
		await TreeNode.populate(node, { path: "children" });
		for (let child of node.children) {
			await populateChildrenRecursive(child);
		}
	}
}

exports.getCompanyList = async (req, res) => {
	try {
		const { id } = req.params;
		let node = await TreeNode.findOne({ name: id });

		if (!node) {
			return res.status(404).send({ message: "Node not found" });
		}

		await populateChildrenRecursive(node);

		let nodeObject = node.toObject();

		// Recursive function to remove _id and __v from the object and its children
		function cleanNode(nodeObj) {
			delete nodeObj._id;
			delete nodeObj.__v;
			if (nodeObj.children) {
				for (let child of nodeObj.children) {
					cleanNode(child);
				}
			}
		}

		cleanNode(nodeObject);

		// Recursive function to remove children from leaf nodes
		function removeLeafChildren(nodeObj) {
			if (nodeObj.children && nodeObj.children.length === 0) {
				delete nodeObj.children;
			} else if (nodeObj.children) {
				for (let child of nodeObj.children) {
					removeLeafChildren(child);
				}
			}
		}
		removeLeafChildren(nodeObject);

		res.status(200).json(nodeObject);
	} catch (error) {
		res.status(500).send({
			message: "Error retrieving node",
			error: error.message,
		});
	}
};

exports.getRadar = async (req, res) => {
	const { id } = req.params;
	console.log(id);

	try {
		const data = await Radar.findOne({ label: id });

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

exports.postRadar = async (req, res) => {
	try {
		const radarData = require("./radar_data.json");
		await Radar.insertMany(radarData);
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
