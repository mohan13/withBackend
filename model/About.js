const mongoose = require("mongoose");
const AboutSchema = mongoose.Schema({
  headline: String,
  title: String,
  name: String,
  image: String,
  img2: Array,
});

const AboutModal = mongoose.model("about", AboutSchema);
module.exports = AboutModal;
