const News = require("../models/News");

const getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNews = async (req, res) => {
  try {
    const news = await News.create(req.body);
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNews = async (req, res) => {
  const { id } = req.params;
  try {
    const news = await News.findById(id);
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNews = async (req, res) => {
  const { id } = req.params;
  try {
    const news = await News.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteNews = async (req, res) => {
  const { id } = req.params;
  try {
    const news = await News.findByIdAndDelete(id);
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllNews,
  createNews,
  getNews,
  updateNews,
  deleteNews,
};
