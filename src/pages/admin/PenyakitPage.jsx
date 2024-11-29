import React, { useCallback, useEffect, useState } from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import InputSearch from "../../components/inputField/InputSearch";
import DefaultTable from "../../components/table/DefaultTable";
import request from "../../utils/request";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Pagination from "../../components/paginations/Pagination";
import Loading from "../../components/loading/Loading";

const PenyakitPage = () => {
  const [diseasesDatas, setDiseasesDatas] = useState([]);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  const [paginations, setPaginations] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const rowMenu = [
    { menu: "id" },
    { menu: "nama penyakit" },
    { menu: "deskripsi penyakit" },
    { menu: "Lihat" },
    { menu: "Edit" },
    { menu: "Hapus" },
  ];

  const onDelete = async (e, id) => {
    e.preventDefault();
    setLoading(true);
    toast.loading("Deleting data...");

    request
      .delete(`/diseases/${id}`)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          toast.dismiss();
          toast.success(response.data.message);
          fetchDiseases();
          navigate("/admin/penyakit");
        } else {
          toast.dismiss();
          toast.error(response.data.message);
        }
      })
      .catch(function (error) {
        toast.dismiss();
        toast.error(error.data.message);
      });
  };

  const fetchDiseases = useCallback(async () => {
    setLoading(true);
    const payload = {
      page: page,
      per_page: limit,
      name: name,
    };
    request
      .get(`/diseases`, payload)
      .then(function (response) {
        setDiseasesDatas(response.data.data.diseases);
        setPaginations(response.data.data.pagination); // Add a fallback value for pagination
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  }, [name, page, limit]); // Add role to dependencies

  useEffect(() => {
    fetchDiseases();
  }, [fetchDiseases]);

  return (
    <div>
      <LayoutAdmin>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-start justify-between md:items-end">
            <div className="space-y-4">
              <h1 className=" font-semibold text-[42px] leading-none">
                Penyakit
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
            <h1 className="font-medium text-[18px]">Data Record</h1>
            {loading ? (
              <Loading />
            ) : (
              <DefaultTable rowMenu={rowMenu}>
                {diseasesDatas && diseasesDatas.length > 0 ? (
                  diseasesDatas.map((data, index) => (
                    <tr
                      key={index}
                      className="text-gray-700 bg-white border-b  hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-xs font-medium align-top ">
                        {data.id}
                      </td>
                      <td className="px-6 py-4 text-xs font-medium align-top">
                        {data.name}
                      </td>
                      <td className="px-6 py-4 text-xs font-medium align-top">
                        {data.deskripsi}
                      </td>
                      <td className="px-6 py-4 align-top">
                        <button
                          className=" bg-[#554F9B] px-5 py-1 rounded-lg min-w-[59px] text-white text-sm"
                          onClick={() =>
                            navigate(
                              `/admin/penyakit/detail-penyakit/${data.id}`
                            )
                          }
                        >
                          Lihat
                        </button>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <button
                          className=" bg-[#FACC2C] px-5 py-1 rounded-lg min-w-[59px]"
                          onClick={() =>
                            navigate(`/admin/penyakit/edit-penyakit/${data.id}`)
                          }
                        >
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_376_202)">
                              <path
                                d="M2.75 13.095V15.375C2.75 15.585 2.915 15.75 3.125 15.75H5.405C5.5025 15.75 5.6 15.7125 5.6675 15.6375L13.8575 7.45504L11.045 4.64254L2.8625 12.825C2.7875 12.9 2.75 12.99 2.75 13.095ZM16.0325 5.28004C16.325 4.98754 16.325 4.51504 16.0325 4.22254L14.2775 2.46754C13.985 2.17504 13.5125 2.17504 13.22 2.46754L11.8475 3.84004L14.66 6.65254L16.0325 5.28004Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_376_202">
                                <rect
                                  width="18"
                                  height="18"
                                  fill="white"
                                  transform="translate(0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <button
                          className=" bg-[#FF5959] px-5 py-1 rounded-lg min-w-[59px]"
                          type="button"
                          onClick={(e) => onDelete(e, data.id)}
                        >
                          <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.0956 7.11632C13.0956 7.16732 12.7403 12.2229 12.5373 14.3506C12.4102 15.6563 11.662 16.4482 10.5397 16.4707C9.67736 16.4925 8.83319 16.5 8.00263 16.5C7.12085 16.5 6.25852 16.4925 5.42148 16.4707C4.33676 16.4415 3.58789 15.6338 3.46729 14.3506C3.25852 12.2154 2.9097 7.16732 2.90321 7.11632C2.89673 6.96257 2.94082 6.81633 3.03029 6.69783C3.11847 6.58834 3.24555 6.52234 3.37912 6.52234H12.6261C12.7591 6.52234 12.8797 6.58834 12.975 6.69783C13.0638 6.81633 13.1085 6.96257 13.0956 7.11632Z"
                              fill="white"
                            />
                            <path
                              d="M14 4.48265C14 4.17441 13.7841 3.93291 13.5247 3.93291H11.5809C11.1854 3.93291 10.8418 3.61643 10.7536 3.17019L10.6447 2.62346C10.4923 1.96273 9.9665 1.5 9.37649 1.5H6.62416C6.02766 1.5 5.50702 1.96273 5.34882 2.65946L5.24703 3.17094C5.1582 3.61643 4.81457 3.93291 4.41971 3.93291H2.4759C2.21591 3.93291 2 4.17441 2 4.48265V4.76764C2 5.06837 2.21591 5.31737 2.4759 5.31737H13.5247C13.7841 5.31737 14 5.06837 14 4.76764V4.48265Z"
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

export default PenyakitPage;
