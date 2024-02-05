const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { allTodos } = require("../controllers/allTodos");
const { showTodos } = require("../controllers/showTodos");
const { updateTodo } = require("../controllers/updateTodos");
const { deleteTodos } = require("../controllers/deleteTodos");

// console.log(allTodos);
// // console.log(todo);

// console.log(createTodo);

router.post("/createTodo", createTodo);
router.get("/allTodos", allTodos);
router.get("/showTodos/:id", showTodos);
router.put("/updateTodos/:id", updateTodo);
router.delete("/deleteTodos/:id", deleteTodos);

module.exports = router;
