require("dotenv").config();
const mongoose = require("mongoose");

// console.log(process.env.PORT);

const dbConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/myDataBase")
    .then(() => {
      console.log("Mongo connected");
    })
    .catch((err) => {
      console.log("not connected");
      console.log(err);
    });
};

module.exports = dbConnect;
