import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LayoutAdmin from '../../components/layout/LayoutAdmin';
import DynamicTable from '../../components/table/DynamicTable';
import request from '../../utils/request';
import Pagination from '../../components/paginations/Pagination';

const DetailPenyakitPage = () => {
  const { id } = useParams();

  const [detailDiseasesDatas, setDetailDiseasesDatas] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [paginations, setPaginations] = useState({});
  const [loading, setLoading] = useState(true);

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

  console.log(loading);

  useEffect(() => {
    fetchDetailDiseases();
  }, [fetchDetailDiseases]);

  return (
    <div>
      <LayoutAdmin>
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
          <div className="bg-white shadow-main p-6 rounded-xl dark:border-gray-700 space-y-9">
            <h1 className="font-medium text-[18px]">Data Record</h1>
            <DynamicTable
              rowMenu={detailDiseasesDatas?.schema}
              datas={detailDiseasesDatas?.records}
              btnView
            />
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

export default DetailPenyakitPage;
