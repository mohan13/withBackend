// const AnotherFormModel = require("../model/AnotherForm");
// module.exports.getAnotherForm = async (req, res) => {
//   try {
//     let data = await AnotherFormModel.find();
//     res.status(200).json({
//       message: "all the records",
//       data,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// module.exports.AnotherFormPost = async (req, res) => {
//   console.log(req.body, req.file, req.files);
//   try {
//     const data = new AnotherFormModel({
//       title: req.body.title,
//       Image: req.file.path,
//     });
//     await data.save();
//     res.status(200).json({
//       message: "worked",
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
