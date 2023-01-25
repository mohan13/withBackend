const mongoose = require("mongoose");
const HomeSchema = mongoose.Schema({
  id: String,
  banner: {
    headline: String,
    image: String,
    title: String,
    description: String,
  },
});

const HomeModal = mongoose.model("home", HomeSchema);
module.exports = HomeModal;
