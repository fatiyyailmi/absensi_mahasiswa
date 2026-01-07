import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createAbsensi,
  updateAbsensi,
  getAbsensiById,
} from "../api";

function AbsensiForm({ id }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nama: "",
    nim: "",
    tanggal: "",
    status: "Hadir",
  });

  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit) {
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    try {
      const res = await getAbsensiById(id);
      setForm(res.data);
    } catch (error) {
      console.error("Gagal ambil data", error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await updateAbsensi(id, form);
        alert("Data berhasil diupdate");
      } else {
        await createAbsensi(form);
        alert("Data berhasil ditambahkan");
      }

      navigate("/"); 
    } catch (error) {
      console.error("Gagal simpan data", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-teal-900 text-xl font-bold mb-4">
        {isEdit ? "Edit Absensi" : "Tambah Absensi"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          value={form.nama}
          onChange={handleChange}
          className="text-teal-900 w-full border p-2 rounded-xl"
          required
        />

        <input
          type="text"
          name="nim"
          placeholder="NIM"
          value={form.nim}
          onChange={handleChange}
          className="text-teal-900 w-full border p-2 rounded-xl"
          required
        />

        <input
          type="date"
          name="tanggal"
          value={form.tanggal}
          onChange={handleChange}
          className="text-teal-900 w-full border p-2 rounded-xl"
          required
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="text-teal-900 w-full border p-2 rounded-xl"
        >
          <option value="Hadir">Hadir</option>
          <option value="Izin">Izin</option>
          <option value="Sakit">Sakit</option>
          <option value="Alpa">Alpa</option>
        </select>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-600 to-blue-800 text-white py-2 rounded-xl hover:bg-blue-900 transition"
        >
          {isEdit ? "Update" : "Simpan"}
        </button>
      </form>
    </div>
  );
}

export default AbsensiForm;
