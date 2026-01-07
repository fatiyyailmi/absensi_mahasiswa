const express = require("express");
const router = express.Router();

const controller = require("../controllers/absensiController");

router.get("/absensi", controller.getAllAbsensi);
router.get("/absensi/:id", controller.getAbsensiById);
router.post("/absensi", controller.createAbsensi);
router.put("/absensi/:id", controller.updateAbsensi);
router.delete("/absensi/:id", controller.deleteAbsensi);

module.exports = router;
