const Todo = require("../models/Todo");

const deleteTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "successfully Deleted",
      data: deletedTodo,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error ",
      error: err.message,
    });
  }
};

module.exports.deleteTodos = deleteTodos;
