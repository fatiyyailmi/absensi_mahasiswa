require("dotenv").config();
const express = require("express");
const cors = require("cors");
const absensiRoutes = require("./routes/absensi");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/", absensiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
