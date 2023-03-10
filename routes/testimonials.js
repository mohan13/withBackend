const express = require("express");
const TestimonialsController = require("../controller/testimonials");
const multer = require("multer");
let router = express.Router();

router.get("/", TestimonialsController.getTestimonials);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), TestimonialsController.TestimonialsPost);

module.exports = router;
