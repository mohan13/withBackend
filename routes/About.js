const express = require("express");
const AboutController = require("../controller/About");
let router = express.Router();
const multer = require("multer");
router.get("/", AboutController.getAbout);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    cb(null, "public");
  },

  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// single imgae upload
// router.post("/", upload.single("image"), AboutController.AboutPost);

// mulit Images upload
router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "img2", maxCount: 5 },
  ]),
   AboutController.AboutPost
);

module.exports = router;
