const mongoose = require("mongoose");
const BlogsSchema = mongoose.Schema({
  title: String,
  image: String,
  SubTitle: String,
  description: String,
  time: String,
});

const BlogsModal = mongoose.model("Blogs", BlogsSchema);
module.exports = BlogsModal;
