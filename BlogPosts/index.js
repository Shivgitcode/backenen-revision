const express = require("express");
const dbConnect = require("./config/database");
const app = express();
const port = 4000;
const blogRoutes = require("./routes/blogsRoutes");
dbConnect();

app.use(express.json());
app.use("/api/v1", blogRoutes);

app.get("/", (req, res) => {
  res.send("this is home page");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
