import { useEffect, useState } from "react";
import { getAbsensi, deleteAbsensi } from "../api";
import Navbar from "../components/Navbar";
import AbsensiList from "../components/AbsensiList";
import { Link } from "react-router-dom";

function Home() {
    const [absensi, setAbsensi] = useState([]);
    
    const fetchAbsensi = async () => {
        try{
            const response =  await getAbsensi();
            setAbsensi (response.data);
        } catch (error) {
            console.error("Gagal memuat data absensi:", error);
        }
    };

    useEffect(() => {
        fetchAbsensi();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteAbsensi(id);
            fetchAbsensi();
        } catch (error) {
            console.error("Gagal menghapus data absensi:", error);
        }
    };

    return (
    <>
      <Navbar />
      <div className="relative z-0 h-72 overflow-hidden">
        <img src="/images/hero.jpeg" className="w-full h-full object-cover" alt="Hero"></img>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <h2 className="text-center text-white text-4xl font-bold">
          Sistem Absensi Mahasiswa
        </h2>
        <Link
          to="/tambah"
          className="text-lg bg-gradient-to-r from-teal-500 to-blue-700 text-white font-bold px-3 py-1 rounded-2xl hover:bg-blue-900"
        >
          Tambah Data
        </Link>
      </div>
      </div>

      <div className="bg-gradient-to-b from-teal-900 to-blue-900 p-6 items-center flex flex-col min-h-screen gap-6">
        <div className="w-[90%]">
          <h1 className="text-white text-2xl font-bold mb-6">
            Data Absensi Mahasiswa
          </h1>

          <AbsensiList
            absensi={absensi}
            onDelete={handleDelete}
          />
        </div>

      </div>
    </>
    );

}

export default Home;