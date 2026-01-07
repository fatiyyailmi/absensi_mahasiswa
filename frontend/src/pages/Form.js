import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import AbsensiForm from "../components/AbsensiForm";

function Form() {
  const { id } = useParams();

  return (
    <>
      <Navbar />

      <div className="relative z-0 h-48 overflow-hidden">
        <img
          src="/images/hero.jpeg"
          className="w-full h-full object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h2 className="text-white text-4xl font-bold">
            {id ? "Edit Absensi" : "Tambah Absensi"}
          </h2>
          <p className="text-white font-semibold text-md">
            Silakan isi data kehadiran mahasiswa.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-teal-900 to-blue-900 min-h-screen flex justify-center pt-10 px-4">
        <div className="-top-[800px] w-full max-w-lg">
          <AbsensiForm id={id} />
        </div>
      </div>
    </>
  );
}

export default Form;
