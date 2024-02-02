const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/cars", {
    useNewurlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("cannot connet");
    console.log(err);
  });
// const bodyParser = require("body-parser");

app.use(express.json({ type: "application/json" }));

app.get("/", (req, res) => {
  res.send("Hello everyone,how are you");
});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(brand);
  console.log(name);
  //   console.log(req.body);
  res.send("Car submitted Successfully");

  //   res.send("Hello i am a Post request");
});

const showData = async () => {
  const data = await mahindra.find({});
  return data;
};

console.log(showData());
