const Comment = require("../Models/Comment");

const createComment = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(200).json({
      success: true,
      message: "Comment created Successfully",
      data: newComment,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: err.message,
    });
  }
};

module.exports.createComment = createComment;
