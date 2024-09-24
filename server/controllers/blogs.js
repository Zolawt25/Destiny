const Blogs = require("../models/Blogs");

const getAllBlogs = async (req, res) => {
  try {
    const { title, category } = req.query;
    const queryObject = {};
    if (title) {
      queryObject.title = { $regex: title, $options: "i" };
    }
    if (category) {
      queryObject.category = category;
    }

    let result = Blogs.find(queryObject);

    const blogs = await result;
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.create(req.body);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blogs = await Blogs.findById(id);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBlogs = async (req, res) => {
  const { id } = req.params;
  try {
    const blogs = await Blogs.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteBlogs = async (req, res) => {
  const { id } = req.params;
  try {
    const blogs = await Blogs.findByIdAndDelete(id);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBlogs,
  createBlogs,
  getBlog,
  updateBlogs,
  deleteBlogs,
};
