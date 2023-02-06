const AboutModel = require("../model/About");
module.exports.getAbout = async (req, res) => {
  try {
    let data = await AboutModel.find();
    res.status(200).json({
      message: "all the records",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.AboutPost = async (req, res) => {
  console.log(req.body, req.file, req.files, req.fieldname);
  try {
    let images = [];
    req.file.map((val, i) => {
      let data = { path: val.path };
      images.push(data);
    });
    const data = new AboutModel({
      headline: req.body.headline,
      title: req.body.title,
      img1: req.file.path,
      img2: images,
    });
    await data.save();
    res.status(200).json({
      message: "worked",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
