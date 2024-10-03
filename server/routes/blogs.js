const express = require("express");
const {
  getAllBlogs,
  createBlogs,
  getBlog,
  updateBlogs,
  deleteBlogs,
  getRecentBlogs,
  deleteComment,
  addComment,
} = require("../controllers/blogs");
const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlogs);
router.route("/recent").get(getRecentBlogs);
router.route("/:id").get(getBlog).put(updateBlogs).delete(deleteBlogs);

router.delete("/:id/comments/:commentId", deleteComment);
router.post("/:id/comments", addComment);

module.exports = router;
