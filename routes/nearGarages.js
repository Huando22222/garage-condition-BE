const express = require("express");
const NearGarageController = require("../controllers/NearGarageController");
const router = express.Router();
router.get("", NearGarageController.GetNearGarages);
module.exports = router;