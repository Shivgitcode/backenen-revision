const express = require("express");
const router = express.router();

const { createTodo } = require("/controllers/createTodo");

router.post("/createTodo", createTodo);
