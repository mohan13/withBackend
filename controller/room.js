const RoomModel = require("../model/rooms");

module.exports.getRooms = async (req, res) => {
  try {
    let data = await RoomModel.find();
    res.status(200).json({
      message: "all the records",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.RoomPost = async (req, res) => {
  console.log(req.body);
  try {
    const data = new RoomModel([
      {
        title: req.body.title,
        price: req.body.price,
        size: req.body.size,
        capacity: req.body.capacity,
        bed: req.body.bed,
        services: req.body.services,
      },
    ]);
    await data.save();
    res.status(200).json({
      message: "worked",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
