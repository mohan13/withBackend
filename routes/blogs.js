const express = require("express");
const BlogsController = require("../controller/Blogs");
const multer = require("multer");
let router = express.Router();

router.get("/", BlogsController.getBlogs);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), BlogsController.BlogsPost);

module.exports = router;
