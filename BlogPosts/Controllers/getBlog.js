const Blog = require("../Models/Blog");

const getBlog = async (req, res) => {
  try {
    const allBlogs = await Blog.find({});
    res.status(200).json({
      success: true,
      message: "data fetched successfully",
      data: allBlogs,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: err.message,
    });
  }
};

module.exports.getBlog = getBlog;
