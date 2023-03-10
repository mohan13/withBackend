const TestimonialsModel = require("../model/testimonials");

module.exports.getTestimonials = async (req, res) => {
  try {
    let data = await TestimonialsModel.find();
    res.status(200).json({
      message: "all the records",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.TestimonialsPost = async (req, res) => {
  console.log(req.body);
  try {
    const data = new TestimonialsModel({
      name: req.body.name,
      post: req.body.post,
      image: req.body.path,
      rating: req.body.rating,
      comments: req.body.comments,
    });
    await data.save();
    res.status(200).json({
      message: "worked",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
