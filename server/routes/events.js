const express = require("express");
const {
  getAllEvents,
  createEvents,
  getEvents,
  updateEvents,
  deleteEvents,
  getRecentEvents,
  deleteComment,
  addComment,
} = require("../controllers/events");
const router = express.Router();

router.route("/").get(getAllEvents).post(createEvents);
router.route("/recent").get(getRecentEvents);
router.route("/:id").get(getEvents).put(updateEvents).delete(deleteEvents);

router.delete("/:id/comments/:commentId", deleteComment);
router.post("/:id/comments", addComment);

module.exports = router;
