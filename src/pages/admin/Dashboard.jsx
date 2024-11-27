import React, { useCallback, useEffect, useState } from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import request from "../../utils/request";
import DefaultTable from "../../components/table/DefaultTable";
import Pagination from "../../components/paginations/Pagination";
import Loading from "../../components/loading/Loading";
import BtnDropdown from "../../components/button/BtnDropdown";

const Dashboard = () => {
  const [logDatas, setLogDatas] = useState([]);
  const [stats, setStats] = useState([]);
  const [action, setAction] = useState("");
  const [model, setModel] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  const [paginations, setPaginations] = useState({});
  const [loading, setLoading] = useState(true);
  const rowMenu = [
    { menu: "pelaku" },
    { menu: "role" },
    { menu: "aksi" },
    { menu: "waktu" },
    { menu: "keterangan" },
  ];
  const modelDatas = [
    { menu: "Semua", value: "" },
    { menu: "Penyakit", value: "Disease" },
    { menu: "Record", value: "DiseaseRecord" },
    { menu: "Pengguna", value: "User" },
  ];
  const actionDatas = [
    { menu: "Semua", value: "" },
    { menu: "Tambah", value: "create" },
    { menu: "Edit", value: "edit" },
    { menu: "Hapus", value: "delete" },
  ];

  // Ambil tanggal hari ini
  const today = new Date();
  // Format tanggal: Kamis, 28 Juni 2024
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(today);

  const fetchLogs = useCallback(async () => {
    setLoading(true);
    const payload = {
      action: action,
      page: page,
      per_page: limit,
      is_success: true,
      model: model,
    };
    request
      .get(`/admin/logs`, payload)
      .then(function (response) {
        setLogDatas(response.data.data.logs);
        setPaginations(response.data.data.pagination); // Add a fallback value for pagination
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  }, [action, model, page, limit]); // Add role to dependencies

  const fetchDiseasesStats = useCallback(async () => {
    setLoading(true);
    request
      .get(`/diseases/stats`)
      .then(function (response) {
        setStats(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  }, []); // Add role to dependencies

  useEffect(() => {
    fetchLogs();
    fetchDiseasesStats();
  }, [fetchLogs, fetchDiseasesStats]);
  return (
    <div>
      <LayoutAdmin>
        <div className="space-y-1 mb-5">
          <h1 className="font-semibold text-5xl">Dashboard</h1>
          <p className="font-base text-lg text-[#554F9B] tracking-[0.1em]">
            {formattedDate}
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mb-10">
          <a
            href="/#"
            className="flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow flex-row p-4 col-span-2"
          >
            <div className="flex flex-col  leading-normal">
              <p className="mb-2 font-semibold text-base text-[#202224] ">
                Total Upload Detak
              </p>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {stats?.total_disease_records ?? "0"}
              </h5>
            </div>
            <div className="bg-[#d3d1e9] appearance-none p-2 rounded-lg  max-w-16 max-h-16 h-full w-full flex items-center justify-center ">
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  opacity="0.587821"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.66675 5.33333C6.66675 8.27885 9.05456 10.6667 12.0001 10.6667C14.9456 10.6667 17.3334 8.27885 17.3334 5.33333C17.3334 2.38781 14.9456 0 12.0001 0C9.05456 0 6.66675 2.38781 6.66675 5.33333ZM20.0001 10.6667C20.0001 12.8758 21.7909 14.6667 24.0001 14.6667C26.2092 14.6667 28.0001 12.8758 28.0001 10.6667C28.0001 8.45753 26.2092 6.66667 24.0001 6.66667C21.7909 6.66667 20.0001 8.45753 20.0001 10.6667Z"
                  fill="#554F9B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9778 13.3333C5.68255 13.3333 0.517678 16.5686 0.000868912 22.9322C-0.0272823 23.2788 0.635616 23.9999 0.970003 23.9999H22.9956C23.9972 23.9999 24.0128 23.1939 23.9972 22.9333C23.6065 16.3908 18.3616 13.3333 11.9778 13.3333ZM31.2746 23.9999L26.1333 23.9999C26.1333 20.9987 25.1417 18.229 23.4683 16.0007C28.0103 16.0504 31.7189 18.3468 31.998 23.1999C32.0092 23.3954 31.998 23.9999 31.2746 23.9999Z"
                  fill="#554F9B"
                />
              </svg>
            </div>
          </a>
          <a
            href="/#"
            className="flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow flex-row p-4 col-span-2"
          >
            <div className="flex flex-col  leading-normal">
              <p className="mb-2 font-semibold text-base text-[#202224] ">
                Upload Harian
              </p>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {stats?.total_disease_records ?? "0"}
              </h5>
            </div>
            <div className="bg-[#d3d1e9] appearance-none p-2 rounded-lg  max-w-16 max-h-16 h-full w-full flex items-center justify-center ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 5.4375C0.75 4.1943 1.24386 3.00201 2.12294 2.12294C3.00201 1.24386 4.1943 0.75 5.4375 0.75H18.5625C19.8057 0.75 20.998 1.24386 21.8771 2.12294C22.7561 3.00201 23.25 4.1943 23.25 5.4375V12H16.6875C15.4443 12 14.252 12.4939 13.3729 13.3729C12.4939 14.252 12 15.4443 12 16.6875V23.25H5.4375C4.1943 23.25 3.00201 22.7561 2.12294 21.8771C1.24386 20.998 0.75 19.8057 0.75 18.5625V5.4375ZM13.875 22.9856C14.5381 22.753 15.1405 22.3743 15.6375 21.8775L21.8775 15.6356C22.3734 15.139 22.7515 14.5373 22.9837 13.875H16.6875C15.9416 13.875 15.2262 14.1713 14.6988 14.6988C14.1713 15.2262 13.875 15.9416 13.875 16.6875V22.9856Z"
                  fill="#554F9B"
                />
              </svg>
            </div>
          </a>
          {stats.diseases &&
            stats.diseases.length > 0 &&
            stats.diseases.map((data, index) => (
              <a
                key={index}
                href="/#"
                className="flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow flex-row p-4"
              >
                <div className="flex flex-col  leading-normal">
                  <p className="mb-2 font-semibold text-base text-[#202224] ">
                    Total {data.name}
                  </p>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.disease_records_count ?? "0"}
                  </h5>
                </div>
                <div className="bg-[#d3d1e9] appearance-none p-2 rounded-lg  max-w-16 max-h-16 h-full w-full flex items-center justify-center ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0002 1.68083C17.7998 -1.53663 21.3465 0.311218 22.833 3.47925C23.6275 5.17248 24.2672 8.1762 23.8876 11.3105H18.5132L17.8115 9.72615C17.5212 8.97772 16.5496 8.89924 16.1715 9.62162L15.5989 10.7147L14.426 5.65907C14.2374 4.64113 12.8935 4.58068 12.6399 5.59395L11.3838 10.6021L10.9678 8.93397C10.7829 8.18121 9.88676 7.93507 9.39863 8.53288L7.12438 11.3105H0.112418C-0.26724 8.1762 0.372509 5.17248 1.16726 3.47925C2.65354 0.311218 6.2002 -1.53663 12.0002 1.68083ZM23.5027 13.3006C22.2599 17.8964 15.8537 23.2603 12.0002 24C8.14656 23.2599 1.74045 17.8967 0.497623 13.301H7.5327C7.8347 13.301 8.10249 13.1427 8.26983 12.8992L9.63962 11.2263L10.4935 14.6689C10.7358 15.6508 12.0214 15.6407 12.2649 14.6722L13.492 9.78292L14.3773 13.5999C14.5847 14.4996 15.7111 14.6178 16.0873 13.8032L16.9006 12.25L17.1148 12.7332C17.2716 13.0889 17.5986 13.2966 17.9397 13.2969L23.5027 13.3006Z"
                      fill="#554F9B"
                    />
                  </svg>
                </div>
              </a>
            ))}
        </div>
        <div className="bg-white shadow-main p-6 rounded-xl dark:border-gray-700 space-y-9">
          <h1 className="font-medium text-[18px]">Riwayat Kegiatan</h1>
          <div className="flex gap-2">
            <BtnDropdown
              title={"Aksi"}
              rowMenu={actionDatas}
              setState={setAction}
              value={action}
            />
            <BtnDropdown
              title={"Model"}
              rowMenu={modelDatas}
              setState={setModel}
              value={model}
            />
          </div>
          {/* Loading State */}
          {loading ? (
            <Loading />
          ) : (
            <DefaultTable rowMenu={rowMenu}>
              {logDatas && logDatas.length > 0 ? (
                logDatas.map((data, index) => (
                  <tr
                    key={index}
                    className="text-gray-700 bg-white border-b cursor-pointer hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-xs font-medium whitespace-nowrap">
                      {data?.user?.name}
                    </td>
                    <td className="px-6 py-4 text-xs font-medium whitespace-nowrap">
                      {data?.user?.role}
                    </td>
                    <td className="px-6 py-4 text-xs font-medium whitespace-nowrap">
                      {data?.description}
                    </td>
                    <td className="px-6 py-4 text-xs font-medium whitespace-nowrap">
                      {data?.timestamp}
                    </td>
                    <td className="px-6 py-4 text-xs font-medium">
                      {data?.changes}
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
        <div className="m-[55px]">
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

export default Dashboard;
