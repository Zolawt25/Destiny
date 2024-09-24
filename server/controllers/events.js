const Events = require("../models/Events");

const getAllEvents = async (req, res) => {
  try {
    const events = await Events.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEvents = async (req, res) => {
  try {
    const events = await Events.create(req.body);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEvents = async (req, res) => {
  const { id } = req.params;
  try {
    const events = await Events.findById(id);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEvents = async (req, res) => {
  const { id } = req.params;
  try {
    const events = await Events.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteEvents = async (req, res) => {
  const { id } = req.params;
  try {
    const events = await Events.findByIdAndDelete(id);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEvents,
  createEvents,
  getEvents,
  updateEvents,
  deleteEvents,
};
