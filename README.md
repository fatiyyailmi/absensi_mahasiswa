# Aplikasi Absensi Mahasiswa

Aplikasi Absensi Mahasiswa adalah aplikasi berbasis web yang digunakan untuk mencatat kehadiran mahasiswa.  
Aplikasi ini dibangun menggunakan **React JS** untuk frontend dan **Node.js + Express + MySQL** untuk backend.

Aplikasi ini mendukung fitur **CRUD (Create, Read, Update, Delete)** data absensi mahasiswa.

---

## Fitur Aplikasi
1. Menampilkan seluruh data absensi
2. Menambahkan data absensi
3. Mengedit data absensi
4. Menghapus data absensi
5. Navigasi halaman dengan React Router
6. Tampilan responsif menggunakan Tailwind CSS

---

## Teknologi yang Digunakan

### Frontend
- React JS (Create React App)
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MySQL
- mysql2
- dotenv
- cors

---

## Cara Menjalankan Aplikasi

### 1. Clone Repository

```bash
git clone https://github.com/fatiyyailmi/absensi_mahasiswa
cd absensi_mahasiswa
```

### 2. Setup Backend
Masuk ke folder backend:
```bash
cd backend
npm install
```

Buat file .env:
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=absensi
PORT=5000
```

Jalankan server:
```bash
node app.js
```

Server berjalan di:
```bash
http://localhost:5000
```


### 3. Setup Database
Buat database dan tabel di MySQL:
```bash
CREATE DATABASE absensi;

USE absensi;

CREATE TABLE absensi (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100),
  nim VARCHAR(20),
  tanggal DATE,
  status VARCHAR(20)
);
```

### 4. Setup Frontend
Masuk ke folder frontend:
```bash
cd ../frontend
npm install
npm start
```

Akses aplikasi di browser:
```bash
http://localhost:3000
```



