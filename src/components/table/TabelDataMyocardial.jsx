import React from "react";

const TabelDataMyocardial = () => {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr className="border-b">
              <th scope="col" className="py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                NAMA PASIEN
              </th>
              <th scope="col" className="px-6 py-3">
                UMUR
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                JENIS KELAMIN
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                TANGGAL LAHIR
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                TEMPAT TES DETAK JANTUNG
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                TANGGAL TES
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                TOTAL RECORD
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800">
              <td className="py-4 font-medium text-gray-900">1</td>
              <td className="px-6 py-4 whitespace-nowrap">
                Muhammad Ghaziveda Belvanaufal
              </td>
              <td className="px-6 py-4">23</td>
              <td className="px-6 py-4">Laki-laki</td>
              <td className="px-6 py-4">30/12/1982</td>
              <td className="px-6 py-4">OETOMO RS</td>
              <td className="px-6 py-4">02/12/2024</td>
              <td className="px-6 py-4">5 Record</td>
              <td className="px-6 py-4">
                <button className="bg-[#554F9B] px-5 py-1 rounded-lg min-w-[59px]">
                  <h1 className="text-white font-medium">Lihat</h1>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelDataMyocardial;
