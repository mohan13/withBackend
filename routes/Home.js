const express = require("express");
const HomeController = require("../controller/Home");
let router = express.Router();
const multer = require("multer");
router.get("/", HomeController.getHome);

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

router.post("/", upload.single("image"), HomeController.HomePost);

module.exports = router;
