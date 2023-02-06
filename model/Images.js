const mongoose = require("mongoose");
const ImagesSchema = mongoose.Schema({
  title: String, 
  image: Array,
});

const ImagesModal = mongoose.model("images", ImagesSchema);
module.exports = ImagesModal;
