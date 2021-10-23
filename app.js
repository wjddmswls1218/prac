const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const db = require("./db");
dotenv.config();
const path = require("path");
const globalRouter = require("./routers/globalRouter");
const boardRouter = require("./routers/boardRouter");

const PORT = process.env.PORT;
const app = express();

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter);
app.use("/board", boardRouter);

app.listen(PORT, () => {
  console.log(`${PORT} SERVER START`);
});
