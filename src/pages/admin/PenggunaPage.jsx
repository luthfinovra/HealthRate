import React, { useCallback, useEffect, useState } from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import DefaultTable from "../../components/table/DefaultTable";
import BtnDropdown from "../../components/button/BtnDropdown";
import InputSearch from "../../components/inputField/InputSearch";
import { useNavigate } from "react-router-dom";
import request from "../../utils/request";
import Pagination from "../../components/paginations/Pagination";
import Loading from "../../components/loading/Loading";

const PenggunaPage = () => {
  const [userDatas, setUserDatas] = useState([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  const [paginations, setPaginations] = useState({});
  const [loading, setLoading] = useState(true); // State untuk loading
  const navigate = useNavigate();
  const rowMenu = [
    { menu: "nama" },
    { menu: "email" },
    { menu: "roles" },
    { menu: "status" },
    { menu: "detail" },
  ];
  const roleDatas = [
    { menu: "Semua", value: "" },
    { menu: "Admin", value: "admin" },
    { menu: "Operator", value: "operator" },
    { menu: "Peneliti", value: "peneliti" },
  ];

  const fetchUsers = useCallback(async () => {
    setLoading(true); // Aktifkan loading sebelum request
    const payload = {
      role: role,
      page: page,
      per_page: limit,
      name: name,
      approval_status: "",
    };
    request
      .get(`/admin/users`, payload)
      .then(function (response) {
        setUserDatas(response.data.data.users);
        setPaginations(response.data.data.pagination);
        setLoading(false); // Matikan loading setelah request selesai
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false); // Matikan loading jika ada error
      });
  }, [role, name, page, limit]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

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
              <InputSearch
                id={"search-name"}
                name={"search-name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"Search users by name..."}
              />
              <BtnDropdown
                title={"Roles"}
                rowMenu={roleDatas}
                setState={setRole}
                value={role}
              />
            </div>
          </div>
          <div className="bg-white shadow-main p-6 rounded-xl space-y-9">
            <h1 className="font-medium text-[18px]">Data User</h1>

            {/* Loading State */}
            {loading ? (
              <Loading />
            ) : (
              <DefaultTable rowMenu={rowMenu}>
                {userDatas && userDatas.length > 0 ? (
                  userDatas.map((data, index) => (
                    <tr
                      key={index}
                      className="text-gray-700 bg-white border-b cursor-pointer hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-xs font-medium">
                        {data.name}
                      </td>
                      <td className="px-6 py-4 text-xs font-medium">
                        {data.email}
                      </td>
                      <td className="px-6 py-4 text-xs font-medium">
                        {data.role}
                      </td>
                      <td className="px-6 py-4 text-xs font-medium">
                        {data.approval_status}
                      </td>
                      <td className="px-6 py-4 align-top">
                        <button
                          className=" bg-[#554F9B] px-5 py-1 rounded-lg min-w-[59px] text-white text-sm"
                          onClick={() =>
                            navigate(`/admin/users/detail/${data.id}`)
                          }
                        >
                          Lihat
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={rowMenu.length + 1} // +1 jika ada kolom tambahan untuk tombol
                      className="px-6 py-4 text-center text-gray-500 h-32"
                    >
                      Data masih kosong
                    </td>
                  </tr>
                )}
              </DefaultTable>
            )}
          </div>

          <Pagination
            recordsTotal={paginations?.total}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </div>
      </LayoutAdmin>
    </div>
  );
};

export default PenggunaPage;
