const mongoose = require("mongoose");
const TestimonialsSchema = mongoose.Schema(
  {
    testimonials: {
      name: String,
      post: String,
      comment: String,
    },
  },
);

const TestimonialsModal = mongoose.model("testimonials", TestimonialsSchema);
module.exports = TestimonialsModal;
