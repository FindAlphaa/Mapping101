require("dotenv").config();
require("./db");
const express = require("express");
const cors = require("cors");

const apiRouter = require("./routers/apiRouter");

const app = express();

app.use(cors()); // CORS 허용
app.use(express.json()); // JSON 파싱
app.use(express.urlencoded({ extended: false })); // URL-encoded 파싱
app.use(express.static("public")); // 정적 파일 제공

app.use("/api", apiRouter);
const PORT = 4000;

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
