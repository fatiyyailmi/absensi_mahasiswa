import { Link } from "react-router-dom";

function AbsensiList({ absensi, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-teal-900 rounded-xl overflow-hidden">
        <thead className="bg-blue-100">
          <tr>
            <th className="text-blue-900 font-bold px-4 py-2 ">No</th>
            <th className="text-blue-900 font-bold px-4 py-2 ">Nama</th>
            <th className="text-blue-900 font-bold px-4 py-2 ">NIM</th>
            <th className="text-blue-900 font-bold px-4 py-2 ">Tanggal</th>
            <th className="text-blue-900 font-bold px-4 py-2 ">Status</th>
            <th className="text-blue-900 font-bold px-4 py-2 ">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {absensi.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-teal-900 text-center py-4">
                Belum ada data.
              </td>
            </tr>
          ) : (
            absensi.map((item, index) => (
              <tr key={item.id} className="bg-white hover:bg-blue-50">
                <td className="px-4 py-2 border text-center">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border">
                  {item.nama}
                </td>
                <td className="px-4 py-2 border">
                  {item.nim}
                </td>
                <td className="px-4 py-2 border">
                  {item.tanggal}
                </td>
                <td className="px-4 py-2 border">
                  {item.status}
                </td>
                  <td className="px-4 py-2 border text-center space-x-2">
                    <Link
                      to={`/edit/${item.id}`}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-xl hover:bg-yellow-600"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => onDelete(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-xl hover:bg-red-600"
                    >
                      Hapus
                    </button>
                  </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AbsensiList;
