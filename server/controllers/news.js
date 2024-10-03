const News = require("../models/News");

const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecentNews = async (req, res) => {
  try {
    const recentNews = await News.find().sort({ createdAt: -1 }).limit(5);
    res.status(200).json(recentNews);
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

const addComment = async (req, res) => {
  const { id } = req.params;
  const { username, text } = req.body;

  try {
    const post = await News.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Add comment to the comments array
    post.comments.push({ username, text, createdAt: new Date() });

    await post.save();
    res.status(201).json({ message: "Comment added successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Error creating comment", error });
  }
};

const deleteComment = async (req, res) => {
  const { id, commentId } = req.params;

  try {
    const post = await News.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comment = post.comments.id(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Remove the comment
    comment.remove();
    await post.save();

    res.status(200).json({ message: "Comment deleted successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error });
  }
};

module.exports = {
  getAllNews,
  createNews,
  getNews,
  updateNews,
  deleteNews,
  getRecentNews,
  addComment,
  deleteComment,
};
