import React from "react";

const TabelApprove = () => {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr className="border-b">
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                RECORD
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                ANNOTATIONS
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                JENIS PENYAKIT
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                SIGNALS
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                DURASI
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                TIME FORMAT
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                DATA FORMAT
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                PERMINTAAN APPROVE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800">
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">Record 1</td>
              <td className="px-6 py-4">
                Reference Beat, Rtythm, and Signal Quality Annotations (ATR)
              </td>
              <td className="px-6 py-4">AF</td>
              <td className="px-6 py-4">MLII, V1</td>
              <td className="px-6 py-4">30.00</td>
              <td className="px-6 py-4">02/12/2024</td>
              <td className="px-6 py-4">Standar</td>
              <td className="px-6 py-4 flex gap-3">
                <button className="bg-[#51A279] px-5 py-1 rounded-lg min-w-[59px] flex items-center justify-center">
                  <svg
                    width="17"
                    height="13"
                    viewBox="0 0 17 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.0501 13.0001L0.350098 7.3001L1.7751 5.8751L6.0501 10.1501L15.2251 0.975098L16.6501 2.4001L6.0501 13.0001Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className="bg-[#FF5959] px-5 py-1 rounded-lg min-w-[59px] flex items-center justify-center">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.7 12L0.5 10.8L5.3 6L0.5 1.2L1.7 0L6.5 4.8L11.3 0L12.5 1.2L7.7 6L12.5 10.8L11.3 12L6.5 7.2L1.7 12Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelApprove;
