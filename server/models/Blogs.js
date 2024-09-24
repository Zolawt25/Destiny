const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: [true, "must provide title"],
    },
    category: {
      type: "String",
      required: [true, "must provide category"],
    },
    description: {
      type: "String",
      required: [true, "must provide description"],
    },
    img: {
      type: "String",
      required: [true, "must provide image"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blogs", blogsSchema);
