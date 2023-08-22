const Graph = require("../models/Graph");
const Structure = require("../models/Structure");
const Company = require("../models/Company");
const CompanyTree = require("../models/CompanyTree");

const formattedData = require("./formatted_data.json");
const itCompany = require("./tree_node.json");

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

const saveCompany = async (companyData) => {
	const company = new Company(companyData);
	await company.save();
	return company._id;
};

const saveCompanyTree = async (nodeData) => {
	if (!nodeData.children) {
		// This is a company
		return await saveCompany(nodeData);
	}

	const treeNode = new CompanyTree({
		nodeName: nodeData.name,
		companyChildren: [],
		treeChildren: [],
	});

	for (const child of nodeData.children) {
		if (child.children) {
			// This is a tree node
			const treeChildId = await saveCompanyTree(child);
			treeNode.treeChildren.push(treeChildId);
		} else {
			// This is a company
			const companyChildId = await saveCompany(child);
			treeNode.companyChildren.push(companyChildId);
		}
	}

	await treeNode.save();
	return treeNode._id;
};

exports.postCompany = async (req, res) => {
	try {
		// Assuming you are using a middleware like express.json()
		await saveCompanyTree(itCompany);
		res.status(200).send({ message: "Data saved successfully!" });
	} catch (error) {
		res.status(500).send({
			message: "Error saving data!",
			error: error.message,
		});
	}
};

const deepPopulate = async (document) => {
	if (!document) return null;

	// Populate companyChildren
	await document.populate("companyChildren").execPopulate();

	// Populate treeChildren and their companyChildren
	const populatedTreeChildren = await CompanyTree.populate(
		document.treeChildren,
		{
			path: "companyChildren",
			model: "Company",
		}
	);

	document.treeChildren = populatedTreeChildren;

	for (const child of document.treeChildren) {
		await deepPopulate(child);
	}
};

exports.getCompanyList = async (req, res) => {
	try {
		const { id } = req.params; // Assuming you are getting the nodeName from the route parameter
		const companyList = await CompanyTree.find({ nodeName: id });

		for (const company of companyList) {
			await deepPopulate(company);
		}

		res.status(200).send(companyList);
	} catch (error) {
		res.status(500).send({
			message: "Error fetching data!",
			error: error.message,
		});
	}
};
