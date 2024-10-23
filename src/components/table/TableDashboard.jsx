import React from "react";

const TableDashboard = () => {
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
                PELAKU
              </th>
              <th scope="col" className="px-6 py-3">
                AKSI
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                WAKTU
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                KETERANGAN
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800">
              <td className="py-4 font-medium text-gray-900">1</td>
              <td className="px-6 py-4 whitespace-nowrap">Operator</td>
              <td className="px-6 py-4 lg:whitespace-nowrap">
                Menambahkan data Arrythmia baru
              </td>
              <td className="px-6 py-4 lg:whitespace-nowrap">
                06/07/2024, 18:44:00
              </td>
              <td className="px-6 py-4">
                Record: Record 1, Annotations: Reference Beat, Rtythm, and
                Signal Quality Annotations (ATR), Jenis Penyakit: AF, Signals:
                MLII/V1, Waktu Tes: 09:30 - 10:00, Tanggal Tes: 24/12/2024, Data
                Format: Standar
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDashboard;
