const Donations = require("../models/Donations");

const getAllDonations = async (req, res) => {
  try {
    const donations = await Donations.find().sort({ createdAt: -1 });
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecentDonations = async (req, res) => {
  try {
    const recentDonations = await Donations.find()
      .sort({ createdAt: -1 })
      .limit(5);
    res.status(200).json(recentDonations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDonations = async (req, res) => {
  try {
    const donations = await Donations.create(req.body);
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDonations = async (req, res) => {
  const { id } = req.params;
  try {
    const donations = await Donations.findById(id);
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDonations = async (req, res) => {
  const { id } = req.params;
  try {
    const donations = await Donations.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteDonations = async (req, res) => {
  const { id } = req.params;
  try {
    const donations = await Donations.findByIdAndDelete(id);
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDonations,
  createDonations,
  getDonations,
  updateDonations,
  deleteDonations,
  getRecentDonations,
};
