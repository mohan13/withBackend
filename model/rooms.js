const mongoose = require("mongoose");
const RoomSchema = mongoose.Schema([
  {
    title: String,
    price: Number,
    size: String,
    duration: Number,
    capacity: Number,
    bed: String,
    availabel: String,
  },
]);
const RoomModal = mongoose.model("rooms",RoomSchema);
module.exports= RoomModal
