import React, { useCallback, useEffect, useState } from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import { useNavigate } from "react-router-dom";
import DefaultTable from "../../components/table/DefaultTable";
import request from "../../utils/request";
import Pagination from "../../components/paginations/Pagination";
import InputSearch from "../../components/inputField/InputSearch";
import toast from "react-hot-toast";
import Loading from "../../components/loading/Loading";

const ApprovePage = () => {
  const [userDatas, setUserDatas] = useState([]);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  const [paginations, setPaginations] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const rowMenu = [
    { menu: "nama" },
    { menu: "email" },
    { menu: "Intitusi" },
    { menu: "Jenis Kelamin", className: "" },
    { menu: "No tlpn" },
    { menu: "Tujuan" },
    { menu: "Aksi" },
  ];

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const payload = {
      role: "peneliti",
      page: page,
      per_page: limit,
      name: name,
      approval_status: "pending",
    };
    request
      .get(`/admin/users`, payload)
      .then(function (response) {
        setUserDatas(response.data.data.users);
        setPaginations(response.data.data.pagination); // Add a fallback value for pagination
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  }, [name, page, limit]); // Add role to dependencies

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const onUpdate = (e, id, status, phone) => {
    e.preventDefault();
    setLoading(true);
    toast.loading(`Updating status to ${status}...`);

    const data = {
      approval_status: status,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    request
      .put(`admin/users/${id}`, data, headers)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          toast.dismiss();
          toast.success(response.data.message || `Status updated to ${status}`);
          const message =
            status === "approved"
              ? "Kamu sudah di approve sama admin."
              : "Mohon maaf pendaftaran kamu kami tolak."; // Pesan Anda
          const url = `https://wa.me/${phone}?text=${encodeURIComponent(
            message
          )}`;

          window.open(url, "_blank"); // Membuka WhatsApp di tab baru
          fetchUsers();
          navigate("/admin/persetujuan-peneliti");
          setLoading(false);
        } else {
          toast.dismiss();
          toast.error("Update failed");
          fetchUsers();
          setLoading(false);
        }
      })
      .catch(function (error) {
        toast.dismiss();
        toast.error("Update failed");
        setLoading(false);
      });
  };

  return (
    <div>
      <LayoutAdmin>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-start justify-between md:items-end">
            <div className="space-y-4">
              <h1 className=" font-semibold text-[42px] leading-none">
                Persetujuan
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
            </div>
          </div>
          <div className="bg-white shadow-main p-6 rounded-xl space-y-9">
            <h1 className="font-medium text-[18px]">Data Operator</h1>
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
                      <td className="px-6 py-4 text-xs font-medium align-top">
                        {data.name}
                      </td>
                      <td className="px-6 py-4 text-xs font-medium align-top">
                        {data.email}
                      </td>
                      <td className="px-6 py-4 text-xs font-medium align-top">
                        {data.institution}
                      </td>
                      <td className="px-6 py-4 text-xs font-medium align-top">
                        {data.gender}
                      </td>
                      <td className="px-6 py-4 text-xs font-medium align-top">
                        {data.phone_number}
                      </td>
                      <td className="px-6 py-4 text-xs font-medium align-top whitespace-pre-line">
                        {data.tujuan_permohonan}
                      </td>
                      <td className="px-6 py-4 flex gap-3">
                        <button
                          className="bg-[#51A279] px-5 py-1 rounded-lg min-w-[59px] flex items-center justify-center"
                          onClick={(e) =>
                            onUpdate(
                              e,
                              data?.id,
                              "approved",
                              data?.phone_number
                            )
                          }
                        >
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
                        <button
                          className="bg-[#FF5959] px-5 py-1 rounded-lg min-w-[59px] flex items-center justify-center"
                          onClick={(e) =>
                            onUpdate(
                              e,
                              data?.id,
                              "rejected",
                              data?.phone_number
                            )
                          }
                        >
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

export default ApprovePage;
