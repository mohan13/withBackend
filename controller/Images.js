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
  console.log(req.body, req.file, req.files);
  try {
    const data = new ImagesModel({
      image: req.file.path,
      title: req.body.title,
    });
    await data.save();
    res.status(200).json({
      message: "worked",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
