const express = require("express");
const RoomsController = require("../controller/room");
const multer = require("multer");
let router = express.Router();
router.get("/", RoomsController.getRooms);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), RoomsController.RoomPost);

module.exports = router;
