const mongoose = require("mongoose");
require("dotenv").config();

// console.log(process.env.PORT);

const dbConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/myDataBase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongo connected");
    })
    .catch((err) => {
      console.log("not connected");
      console.log(err);
      process.exit(1);
    });
};

module.exports = dbConnect;
