const BlogsModel = require("../model/Blogs");
module.exports.getBlogs = async (req, res) => {
  try {
    let data = await BlogsModel.find();
    res.status(200).json({
      message: "all the records",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.BlogsPost = async (req, res) => {
  console.log(req.body, req.file, req.files);
  try {
    const data = new BlogsModel({
      title: req.body.title,
      image: req.file.image,
      SubTitle: req.body.SubTitle,
      time: req.body.time,
      description: req.body.description,
    });
    await data.save();
    res.status(200).json({
      message: "worked",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
