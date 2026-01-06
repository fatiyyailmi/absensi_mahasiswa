const express = require("express");
const router = express.Router();
const absensicontroller = require("../controllers/absensiController");

router.get("/absensi", absensicontroller.getAllAbsensi);
router.post("/absensi", absensicontroller.createAbsensi);
router.put("/absensi/:id", absensicontroller.updateAbsensi);
router.delete("/absensi/:id", absensicontroller.deleteAbsensi);

module.exports = router;


