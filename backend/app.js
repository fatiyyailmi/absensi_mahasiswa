require("dotenv").config();
const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json());

const absensiRoutes = require("./routes/absensi");
app.use(absensiRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
