const mongoose = require("mongoose");

const CompanyTreeSchema = new mongoose.Schema({
	nodeName: String,
	companyChildren: [
		// References to Company model children
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Company",
		},
	],
	treeChildren: [
		// References to CompanyTree model children (recursive relationship)
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "CompanyTree",
		},
	],
});

const CompanyTree = mongoose.model("CompanyTree", CompanyTreeSchema);

module.exports = CompanyTree;
