const HomeModel = require("../model/Home");
module.exports.getHome = async (req, res) => {
  try {
    let data = await HomeModel.find();
    res.status(200).json({
      message: "all the records",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.HomePost = async (req, res) => {
  console.log(req.body, req.file, req.files);
  try {
    const data = new HomeModel({
      id: req.body.ID,
      banner: {
        // headline: req.body.headline,
        image: req.file.path,
        title: req.body.title,
        description: req.body.description,
      },
    });
    await data.save();
    res.status(200).json({
      message: "worked",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
