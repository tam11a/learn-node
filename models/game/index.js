const mongoose = require("mongoose");

var gameSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide game name"],
		trim: true,
	},
	description: {
		type: String,
		required: [true, "Please provide game description"],
		trim: true,
	},
	coverImage: {
		type: String,
		default: null,
	},
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
