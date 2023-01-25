const express = require("express");
const AboutController = require("../controller/About");
let router = express.Router();

router.get("/", AboutController.getAbout);
router.post("/", AboutController.AboutPost);

module.exports = router;


