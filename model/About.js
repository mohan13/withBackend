const mongoose = require("mongoose");
const AboutSchema = mongoose.Schema({
  headline: String,
});

const AboutModal = mongoose.model("about", AboutSchema);
module.exports = AboutModal;
