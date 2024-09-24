const express = require("express");
const {
  getAllEvents,
  createEvents,
  getEvents,
  updateEvents,
  deleteEvents,
} = require("../controllers/events");
const router = express.Router();

router.route("/").get(getAllEvents).post(createEvents);
router.route("/:id").get(getEvents).put(updateEvents).delete(deleteEvents);

module.exports = router;
