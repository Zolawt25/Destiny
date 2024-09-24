const express = require("express");
const {
  getAllBlogs,
  createBlogs,
  getBlog,
  updateBlogs,
  deleteBlogs,
} = require("../controllers/blogs");
const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlogs);
router.route("/:id").get(getBlog).put(updateBlogs).delete(deleteBlogs);

module.exports = router;
