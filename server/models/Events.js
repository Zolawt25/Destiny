const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema(
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
    views: {
      type: "Number",
      default: 0,
    },
    comments: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        username: { type: String },
        text: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Events", eventsSchema);
