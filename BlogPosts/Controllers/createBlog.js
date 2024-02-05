const Blog = require("../Models/Blog");

const createBlog = async (req, res) => {
  try {
    const createdBlog = await Blog.create(req.body);
    res.status(200).json({
      success: true,
      message: "data inserted successfully",
      data: createdBlog,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: err.message,
    });
  }
};

module.exports.createBlog = createBlog;
