const Todo = require("../models/Todo");

const updateTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = req.body;
    const updatingTodo = await Todo.findOneAndUpdate({ _id: id }, updatedTodo);
    res.status(200).json({
      success: true,
      message: "updated successfully",
      data: updatingTodo,
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

module.exports.updateTodo = updateTodos;
