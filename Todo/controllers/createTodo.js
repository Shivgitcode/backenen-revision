const Todo = require("/models/Todo");

async function createTodo(req, res) {
  try {
    // extract title and description from request body
    const { title, description } = req.body;
    //   const newTodo = new Todo(newTodoItem);
    //create a new Todo Obj and insert in DB
    const response = await Todo.create({ title, description });
    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      messanger: err.message,
    });
  }
}

module.exports = createTodo;
