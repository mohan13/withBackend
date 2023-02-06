const mongoose = require("mongoose");
const AnotherFormSchema = mongoose.Schema({
  title: String,
  Image: String,
});

const AnotherFormModal = mongoose.model("AnotherForm", AnotherFormSchema);
module.exports = AnotherFormModal;
