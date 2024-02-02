const express = require("express");
const app = express();
const dbConnect = require("./config/database");
dbConnect();

app.use(express.json());

// import routes for Todo API

const todoRoutes = require("./routes/todos");

app.use("/api/v1", todoRoutes);

// mount the todo ASPI routes

app.listen(3000, () => {
  console.log("Server started successfully at 3000");
});

app.get("/", (req, res) => {
  res.send(`<h1>This is home Page</h1>`);
});
