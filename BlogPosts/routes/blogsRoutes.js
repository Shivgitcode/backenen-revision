const express = require("express");
const router = express.Router();
const { createBlog } = require("../Controllers/createBlog");
const { getBlog } = require("../Controllers/getBlog");
const { createComment } = require("../Controllers/createComment");

router.post("/createBlog", createBlog);
router.get("/getBlog", getBlog);
router.post("/createComment", createComment);

module.exports = router;
