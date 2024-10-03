const mongoose = require("mongoose");

const donationsSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: [true, "must provide title"],
    },
    category: {
      type: "String",
      required: [true, "must provide category"],
    },
    donationLink: {
      type: "String",
      required: [true, "must provide donation link"],
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Donations", donationsSchema);
