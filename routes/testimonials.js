const express = require("express");
const TestimonialsController = require("../controller/testimonials");
let router = express.Router();

router.get("/", TestimonialsController.getTestimonials);
router.post("/", TestimonialsController.TestimonialsPost);

module.exports = router;
