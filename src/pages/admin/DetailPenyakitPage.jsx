import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import DynamicTable from "../../components/table/DynamicTable";
import request from "../../utils/request";
import Pagination from "../../components/paginations/Pagination";
import Loading from "../../components/loading/Loading";
import ModalDetail from "../../components/modal/ModalDetail";
import { FaDownload } from "react-icons/fa";
import toast from "react-hot-toast";

const DetailPenyakitPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [detailDiseasesDatas, setDetailDiseasesDatas] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [paginations, setPaginations] = useState({});
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleViewRecord = (data) => {
    setSelectedRecord(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

  const fetchDetailDiseases = useCallback(async () => {
    setLoading(true);
    const payload = {
      page: page,
      per_page: limit,
    };
    request
      .get(`/diseases/${id}/records`, payload)
      .then(function (response) {
        setDetailDiseasesDatas(response.data.data);
        setPaginations(response.data.data.pagination); // Add a fallback value for pagination
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        if (error.response?.status === 404 || error.response?.status === 400) {
          navigate("*"); // Navigate to the Not Found page
        }
      });
  }, [id, page, limit, navigate]); // Add role to dependencies

  useEffect(() => {
    fetchDetailDiseases();
  }, [fetchDetailDiseases]);

  const onDownload = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.loading("Loading...");

    try {
      const response = await request.get(`/diseases/${id}/export`, {
        responseType: "blob", // Penting untuk mengunduh file
      });

      // Buat URL objek dari blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Buat elemen link untuk download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${detailDiseasesDatas?.name}-record.csv`);

      // Tambahkan ke dokumen, klik, dan hapus
      document.body.appendChild(link);
      link.click();
      link.remove();

      toast.dismiss();
      toast.success("File berhasil diunduh");
    } catch (error) {
      toast.dismiss();
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <LayoutAdmin>
        <div className="h-full w-full">
          {loading ? (
            <Loading />
          ) : (
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-start justify-between md:items-end">
                <div className="space-y-4">
                  <h1 className=" font-semibold text-[42px] leading-none capitalize ">
                    {detailDiseasesDatas?.name}
                  </h1>
                  <p className=" max-w-3xl font-normal text-[14px] text-[#2D3748] leading-[150%]">
                    {detailDiseasesDatas?.deskripsi}
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-main p-6 rounded-xl space-y-9">
                <div className="flex items-center justify-between">
                  <h1 className="font-medium text-[18px]">Data Record</h1>
                  <button
                    type="button"
                    onClick={onDownload}
                    className="space-x-3 border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 hover:bg-gray-300 hover:text-gray-600"
                  >
                    <FaDownload className="text-black" />
                    <p>Download Semua Record</p>
                  </button>
                </div>
                <DynamicTable
                  rowMenu={detailDiseasesDatas?.schema}
                  datas={detailDiseasesDatas?.records}
                  btnView
                  onDetail={(data) => handleViewRecord(data.data)}
                />
              </div>
              <Pagination
                recordsTotal={paginations?.total}
                limit={limit}
                page={page}
                setPage={setPage}
              />
            </div>
          )}
        </div>
      </LayoutAdmin>
      <ModalDetail
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Record Details"
        schema={detailDiseasesDatas?.schema}
        record={selectedRecord}
      />
    </div>
  );
};

export default DetailPenyakitPage;
