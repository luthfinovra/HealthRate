import React from "react";
import TableMyocardial from "../../components/table/TableMyocardial";
import LayoutOperator from "../../components/layout/LayoutOperator";

const MyocardialPage = () => {
  return (
    <div>
      <LayoutOperator>
        <div className="space-y-4">
          <h1 className=" font-semibold text-[42px] leading-none">
            Myocardial Infarction
          </h1>
          <p className=" max-w-3xl font-normal text-[14px] text-[#2D3748] leading-[150%]">
            Myocardial Infarction adalah kondisi medis serius yang terjadi
            ketika aliran darah ke jantung terhambat, menyebabkan kerusakan pada
            otot jantung.
          </p>
          <div className="bg-white shadow-main p-6 rounded-xl dark:border-gray-700 space-y-9">
            <h1 className="font-medium text-[18px]">Data Pasien</h1>
            <TableMyocardial />
          </div>
        </div>
      </LayoutOperator>
    </div>
  );
};

export default MyocardialPage;
