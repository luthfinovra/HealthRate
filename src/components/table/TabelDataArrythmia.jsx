import React from "react";

const TabelDataArrythmia = () => {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr className="border-b">
              <th scope="col" className="py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Record
              </th>
              <th scope="col" className="px-6 py-3">
                ANNOTATIONS
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                JENIS PENYAKIT
              </th>
              <th scope="col" className="px-6 py-3">
                SIGNALS
              </th>
              <th scope="col" className="px-6 py-3">
                DURASI
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                TIME FORMAT
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                DATA FORMAT
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800">
              <td className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Record 1</td>
              <td className="px-6 py-4">
                Reference Beat, Rtythm, and Signal Quality Annotations (ATR)
              </td>
              <td className="px-6 py-4">AF</td>
              <td className="px-6 py-4">MLII, V1</td>
              <td className="px-6 py-4">30.00</td>
              <td className="px-6 py-4">02/12/2024</td>
              <td className="px-6 py-4">Standar</td>
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

export default TabelDataArrythmia;
