const monogoose = require("mongoose");

const dbConnect = async () => {
  try {
    await monogoose.connect("mongodb://localhost:27017/Blogdatabase");
    console.log("mongoose connected");
  } catch (err) {
    console.log("cannot connect");
    console.log(err.message);
  }
};

module.exports = dbConnect;
