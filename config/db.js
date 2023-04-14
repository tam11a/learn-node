const mongoose = require("mongoose");

mongoose
	.connect(
		"mongodb+srv://mongoose-prac:diqsRzYhtfo2oYVu@atlascluster.kgkzdat.mongodb.net/?retryWrites=true&w=majority"
	)
	.then(() => {
		console.log("Database Connected Successfully!!");
	});

module.exports = mongoose;
