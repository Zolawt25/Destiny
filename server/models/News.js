const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: [true, "must provide title"],
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

module.exports = mongoose.model("News", newsSchema);
