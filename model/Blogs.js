const mongoose = require("mongoose");
const BlogsSchema = mongoose.Schema({
  time: String,
  title: String,
  description: String,
  image: String,
});

const BlogsModal = mongoose.model("Blogs", BlogsSchema);
module.exports = BlogsModal;
