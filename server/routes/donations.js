const express = require("express");
const {
  getAllDonations,
  createDonations,
  getDonations,
  updateDonations,
  deleteDonations,
  getRecentDonations,
} = require("../controllers/donations");
const router = express.Router();

router.route("/").get(getAllDonations).post(createDonations);
router.route("/recent").get(getRecentDonations);
router
  .route("/:id")
  .get(getDonations)
  .put(updateDonations)
  .delete(deleteDonations);

module.exports = router;
