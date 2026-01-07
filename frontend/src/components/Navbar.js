import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-teal-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">
          Absensi Mahasiswa
        </h1>

        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link
            to="/tambah"
            className="text-white text-teal-900 hover:underline px-3 py-1"
          >
            Tambah Data
          </Link>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-3">
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/tambah"
            className="hover:underline"
            onClick={() => setOpen(false)}
          >
            Tambah Data
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
