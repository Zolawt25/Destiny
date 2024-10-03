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

    let result = Blogs.find(queryObject).sort({ createdAt: -1 });

    const blogs = await result;
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecentBlogs = async (req, res) => {
  try {
    const recentBlogs = await Blogs.find().sort({ createdAt: -1 }).limit(5);
    res.status(200).json(recentBlogs);
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

const addComment = async (req, res) => {
  const { id } = req.params;
  const { username, text } = req.body;

  try {
    const post = await Blogs.findById(id);

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
    const post = await Blogs.findById(id);

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
  getAllBlogs,
  createBlogs,
  getBlog,
  updateBlogs,
  deleteBlogs,
  getRecentBlogs,
  addComment,
  deleteComment,
};
