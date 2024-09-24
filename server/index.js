require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connectDb");
const blogRouter = require("./routes/blogs");
const newsRouter = require("./routes/news");
const eventsRouter = require("./routes/events");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// routers
app.use("/blogs", blogRouter);
app.use("/news", newsRouter);
app.use("/events", eventsRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  await connectDB();
  app.listen(5000, () => {
    console.log(`Server started on 5000..`);
  });
};

start();
