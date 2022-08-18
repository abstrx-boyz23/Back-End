// August, 16 2022
const express = require("express");
const {db} = require("../config/database/mysql");
const router = express.Router();
const controller = require("../controller/index");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({storage: storage});

router.get("/search", controller.xii_ipa1.getSearchKeyword);
router.get("/", controller.xii_ipa1.getAll);
router.get("/:no", controller.xii_ipa1.getOne);
router.post("/", upload.single("foto"), controller.xii_ipa1.post);
router.put("/:no", controller.xii_ipa1.put);
router.delete("/:no", controller.xii_ipa1.delete);

module.exports = {router};