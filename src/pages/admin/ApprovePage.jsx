import React from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import { useNavigate } from "react-router-dom";
import DefaultTable from "../../components/table/DefaultTable";

const ApprovePage = () => {
  const navigate = useNavigate();
  const rowMenu = [
    { menu: "nama" },
    { menu: "email" },
    { menu: "institusi" },
    { menu: "gender" },
    { menu: "phone" },
    { menu: "tujuan permohonan" },
    { menu: "permintaan approve" },
  ];
  const datas = [
    {
      id: 6,
      name: "Peneliti",
      email: "peneliti1121921@example.com",
      institution: "Telkom University",
      gender: "L",
      phone_number: "082132092648",
      tujuan_permohonan:
        "Melakukan riset dalam penyakit jantung, Mendalami lebih dalam mengenai berbagai data penyakit jantung, dsb",
      role: "researcher",
      approval_status: "approved",
      created_at: "2024-10-31T14:20:39.000000Z",
      updated_at: "2024-10-31T14:20:56.000000Z",
      managed_diseases: null,
    },
  ];
  return (
    <div>
      <LayoutAdmin>
        <div className="space-y-4">
          <h1 className=" font-semibold text-[42px] leading-none">Approve</h1>
          <p className=" max-w-3xl font-normal text-[14px] text-[#2D3748] leading-[150%]">
            Aritmia adalah gangguan pada irama detak jantung. Dalam kondisi
            normal, jantung berdetak dengan ritme yang teratur. Namun, pada
            aritmia, ritme ini terganggu.
          </p>
          <div className="bg-white shadow-main p-6 rounded-xl dark:border-gray-700 space-y-9">
            <h1 className="font-medium text-[18px]">Data Operator</h1>
            <DefaultTable rowMenu={rowMenu}>
              {datas.map((data, index) => (
                <tr
                  key={index}
                  className="text-gray-700 bg-white border-b cursor-pointer hover:bg-gray-50"
                  onClick={() => {
                    navigate(`/#`);
                  }}
                >
                  <td className="px-6 py-4 text-xs font-medium">{data.name}</td>
                  <td className="px-6 py-4 text-xs font-medium">
                    {data.email}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium">
                    {data.institution}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium">
                    {data.gender}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium">
                    {data.phone_number}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium">
                    {data.tujuan_permohonan}
                  </td>
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
              ))}
            </DefaultTable>
          </div>
        </div>
      </LayoutAdmin>
    </div>
  );
};

export default ApprovePage;
