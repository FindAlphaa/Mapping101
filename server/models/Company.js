const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
	name: String,
	description: {
		type: String,
		default: "",
	},
	size: {
		type: Number,
		default: 300,
	},
	color: {
		type: Number,
		default: 5,
	},
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
