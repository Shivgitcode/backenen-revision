const Todo = require("../models/Todo");

const showTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const foundTodo = await Todo.findOne({ _id: id });
    res.status(200).json({
      success: true,
      data: foundTodo,
      message: "found data",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "internal server error",
    });
  }
};

module.exports.showTodos = showTodos;
