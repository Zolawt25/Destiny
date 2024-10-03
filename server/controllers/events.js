const Events = require("../models/Events");

const getAllEvents = async (req, res) => {
  try {
    const events = await Events.find().sort({ createdAt: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecentEvents = async (req, res) => {
  try {
    const recentEvents = await Events.find().sort({ createdAt: -1 }).limit(5);
    res.status(200).json(recentEvents);
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

const addComment = async (req, res) => {
  const { id } = req.params;
  const { username, text } = req.body;

  try {
    const post = await Events.findById(id);

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
    const post = await Events.findById(id);

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
  getAllEvents,
  createEvents,
  getEvents,
  updateEvents,
  deleteEvents,
  getRecentEvents,
  addComment,
  deleteComment,
};
