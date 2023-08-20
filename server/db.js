const mongoose = require("mongoose");

// Connect to the database
mongoose.connect(
	"mongodb+srv://qkrehdrb0813:ehdfprl77@cluster0.zvtb5gr.mongodb.net/",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
