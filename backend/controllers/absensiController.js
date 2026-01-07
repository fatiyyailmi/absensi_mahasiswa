const db = require('../config/db');

// GET (menampilkan semua data)
exports.getAllAbsensi = (req, res) => {
    const query = "SELECT * FROM absensi";
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(results);
        }
    });
};


// POST (menambahkan data baru)
exports.createAbsensi = (req,res) => {
    const { nama, nim, tanggal, status } = req.body;
    const query="INSERT INTO absensi (nama, nim, tanggal, status) VALUES (?, ?, ?, ?)";
    db.query(query, [nama, nim, tanggal, status], (err, results) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: "Data absensi berhasil ditambahkan." });
        }
    });
};

// PUT (edit data)
exports.updateAbsensi = (req, res) => {
    const { id } = req.params;
    const { nama, nim, tanggal, status } = req.body;
    const query = "UPDATE absensi SET nama = ?, nim = ?, tanggal = ?, status = ? WHERE id = ?";
    db.query(query, [nama, nim, tanggal, status, id], (err, results) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: "Data absensi berhasil diupdate." });
        }
    });
};

// DELETE (menghapus data)
exports.deleteAbsensi = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM absensi WHERE id = ?";
    db.query(query, [id], (err) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: "Data absensi berhasil dihapus."});
        }
    });
};

// GET by ID (edit)
exports.getAbsensiById = (req, res) => {
  const { id } = req.params;

  const query = "SELECT * FROM absensi WHERE id = ?";

  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).json(err);
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: "Data tidak ditemukan" });
      } else {
        res.json(results[0]); 
      }
    }
  });
};



