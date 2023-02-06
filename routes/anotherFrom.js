const express = require("express");
const AnotherFormController = require("../controller/anotherForm");
let router = express.Router();
const multer = require("multer");
router.get("/", AnotherFormController.getAnotherForm);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    cb(null, "public");
  },

  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), AnotherFormController.AnotherFormPost);

module.exports = router;
