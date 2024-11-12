import React from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import TableOperator from "../../components/table/TableOperator";
import DefaultTable from "../../components/table/DefaultTable";
import Dropdown from "../../components/button/BtnDropdown";
import BtnDropdown from "../../components/button/BtnDropdown";
import InputSearch from "../../components/inputField/InputSearch";
import { useNavigate } from "react-router-dom";

const PenggunaPage = () => {
  const navigate = useNavigate();
  const rowMenu = [
    { menu: "nama" },
    { menu: "email" },
    { menu: "roles" },
    { menu: "status" },
    { menu: "detail" },
  ];
  const datas = [
    {
      nama: "John Doe",
      email: "john.doe@example.com",
      roles: "Admin",
      status: "Active",
    },
    {
      nama: "Jane Doe",
      email: "jane.doe@example.com",
      roles: "User",
      status: "Inactive",
    },
    {
      nama: "Alice",
      email: "alice@example.com",
      roles: "Admin",
      status: "Active",
    },
  ];

  return (
    <div>
      <LayoutAdmin>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-start justify-between md:items-end">
            <div className="space-y-4">
              <h1 className=" font-semibold text-[42px] leading-none">
                Pengguna
              </h1>
              <p className=" max-w-3xl font-normal text-[14px] text-[#2D3748] leading-[150%]">
                Lorem lorem lorem
              </p>
            </div>
            <div className="flex gap-2">
              <InputSearch />
              <BtnDropdown title={"Roles"} rowMenu={rowMenu} />
            </div>
          </div>
          <div className="bg-white shadow-main p-6 rounded-xl dark:border-gray-700 space-y-9">
            <h1 className="font-medium text-[18px]">Data User</h1>
            <DefaultTable rowMenu={rowMenu}>
              {datas.map((data, index) => (
                <tr
                  className="text-gray-700 bg-white border-b cursor-pointer hover:bg-gray-50"
                  onClick={() => {
                    navigate(`/#`);
                  }}
                >
                  <td className="px-6 py-4 text-xs font-medium">{data.nama}</td>
                  <td className="px-6 py-4 text-xs font-medium">
                    {data.email}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium">
                    {data.roles}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium">
                    {data.status}
                  </td>
                  <td className="px-6 py-4 align-top">
                    <button
                      className=" bg-[#554F9B] px-5 py-1 rounded-lg min-w-[59px] text-white text-sm"
                      onClick={() => navigate(`/#`)}
                    >
                      Lihat
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

export default PenggunaPage;
