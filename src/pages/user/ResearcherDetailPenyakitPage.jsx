import React, { useCallback, useEffect, useState } from "react";
import DynamicTable from "../../components/table/DynamicTable";
import Pagination from "../../components/paginations/Pagination";
import request from "../../utils/request";
import { useNavigate, useParams } from "react-router-dom";
import DefaultFouter from "../../components/footer/DefaultFouter";
import NavbarResearcher from "../../components/navbar/navbarResearcher";
import ModalDetail from "../../components/modal/ModalDetail";
import Loading from "../../components/loading/Loading";
import { IoIosArrowBack } from "react-icons/io";
import { FaDownload } from "react-icons/fa";

const ResearcherDetailPenyakitPage = () => {
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
      });
  }, [id, page, limit]); // Add role to dependencies

  useEffect(() => {
    fetchDetailDiseases();
  }, [fetchDetailDiseases]);

  console.log(selectedRecord);
  return (
    <div>
      <NavbarResearcher />
      <section className="bg-white py-8 lg:py-16 antialiased mt-[80px] max-[375px]:mx-[16px] max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-7xl mx-auto space-y-10">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="gap-5 flex items-end">
              {/* Back Button */}
              <button
                onClick={() => navigate(-1)} // Go back to the previous page
                className="space-x-3 border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 hover:bg-gray-300 hover:text-gray-600"
              >
                <IoIosArrowBack className="text-black" />
              </button>
              <h1 className="font-semibold text-[42px] leading-none">
                {detailDiseasesDatas?.name}
              </h1>
            </div>

            <p className="font-normal text-[14px] text-[#2D3748] leading-[150%]">
              {detailDiseasesDatas?.deskripsi}
            </p>

            <div className="bg-white shadow-main p-6 rounded-xl dark:border-gray-700 space-y-9">
              <div className="flex items-center justify-between">
                <h1 className="font-medium text-[18px]">Data Record</h1>
                <button
                  onClick={() =>
                    window.open(detailDiseasesDatas?.export_url, "_blank")
                  }
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
            <DefaultFouter />
          </>
        )}
      </section>

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

export default ResearcherDetailPenyakitPage;
