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
  try {
  } catch (error) {}
};
