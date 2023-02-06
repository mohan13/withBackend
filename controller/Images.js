const ImagesModel = require("../model/Images");
module.exports.getImages = async (req, res) => {
  try {
    let data = await ImagesModel.find();
    res.status(200).json({
      message: "all the records",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.ImagesPost = async (req, res) => {
  try {
    let image = [];
    req.files.map((val, i) => {
      let data = { path: val.path };
      image.push(data);
    });
    console.log(image);
    const data = new ImagesModel({
      title: req.body.title,
      img1: req.file.path,
      image: image,
    });
    await data.save();
    res.status(200).json({
      message: "worked",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
