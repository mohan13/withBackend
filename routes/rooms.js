const express = require("express");
const RoomControllere = require("../controller/room");
let router = express.Router();
router.get("/", RoomControllere.getRoom);
router.post("/", RoomControllere.RoomPost);

module.exports = router;
