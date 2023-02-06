const express = require("express");
const ImagesController = require("../controller/Images");
let router = express.Router();
const multer = require("multer");
router.get("/", ImagesController.getImages);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    console.log("first");
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
//dherai image store garna
router.post("/", upload.array("image", 15), ImagesController.ImagesPost);

module.exports = router;
