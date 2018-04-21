const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//get routes
const todoRouter = require("./routes/todos");

//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
	res.sendFile("index.html");
});

//use route
app.use("/api/todos", todoRouter);

//server
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
