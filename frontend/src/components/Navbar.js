import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-teal-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">
        Absensi Mahasiswa
      </h1>


      <div className="space-x-4">
        <Link
          to="/"
          className="hover:underline"
        >
          Home
        </Link>
        <Link
          to="/tambah"
          className="bg-white text-teal-900 font-bold px-3 py-1 rounded-2xl hover:bg-blue-100"
        >
          Tambah Data
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
