const express = require("express");
const ImagesController = require("../controller/Images");
let router = express.Router();
const multer = require("multer");
router.get("/", ImagesController.getImages);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file)
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), ImagesController.ImagesPost);

module.exports = router;
