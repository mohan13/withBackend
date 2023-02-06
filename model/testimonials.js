const mongoose = require("mongoose");
const TestimonialsSchema = mongoose.Schema({
  testimonials: {
    name: String,
    post: String,
    image: String,
    rating: Array,
    comment: String,
  },
});

const TestimonialsModal = mongoose.model("testimonials", TestimonialsSchema);
module.exports = TestimonialsModal;
