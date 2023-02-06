const mongoose = require("mongoose");
const RoomSchema = mongoose.Schema([
  {
    title: String,
    price: Number,
    size: String,
    capacity: Number,
    bed: String,
    serivices: Array,
  },
]);
const RoomModal = mongoose.model("rooms", RoomSchema);
module.exports = RoomModal;
