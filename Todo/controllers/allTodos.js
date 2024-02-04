const Todo = require("../models/Todo");

const allTodos = async (req, res) => {
  try {
    const allTodo = await Todo.find({});
    res.status(200).json({
      success: true,
      data: allTodo,
      message: "Entire todo data fetched",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: err.message,
    });
  }
};

// module.exports = allTodos;
//

module.exports.allTodos = allTodos;
