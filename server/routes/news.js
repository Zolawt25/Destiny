const express = require("express");
const {
  getAllNews,
  createNews,
  getNews,
  updateNews,
  deleteNews,
} = require("../controllers/news");
const router = express.Router();

router.route("/").get(getAllNews).post(createNews);
router.route("/:id").get(getNews).put(updateNews).delete(deleteNews);

module.exports = router;
