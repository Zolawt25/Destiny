const express = require("express");
const {
  getAllNews,
  createNews,
  getNews,
  updateNews,
  deleteNews,
  getRecentNews,
  deleteComment,
  addComment,
} = require("../controllers/news");
const router = express.Router();

router.route("/").get(getAllNews).post(createNews);
router.route("/recent").get(getRecentNews);
router.route("/:id").get(getNews).put(updateNews).delete(deleteNews);

router.delete("/:id/comments/:commentId", deleteComment);
router.post("/:id/comments", addComment);

module.exports = router;
