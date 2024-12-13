import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import DynamicTable from "../../components/table/DynamicTable";
import request from "../../utils/request";
import Pagination from "../../components/paginations/Pagination";
import Loading from "../../components/loading/Loading";
import ModalDetail from "../../components/modal/ModalDetail";

const DetailPenyakitPage = () => {
  const { id } = useParams();

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
                <h1 className="font-medium text-[18px]">Data Record</h1>

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
