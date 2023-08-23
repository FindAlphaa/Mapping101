const mongoose = require("mongoose");

const radarSchema = new mongoose.Schema({
	label: String,
	data: [Number],
});

const Radar = mongoose.model("Radar", radarSchema);

module.exports = Radar;
