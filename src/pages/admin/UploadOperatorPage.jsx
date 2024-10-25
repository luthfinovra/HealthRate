import React from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";

const UploadOperatorPage = () => {
  return (
    <LayoutAdmin>
      <div className="space-y-4">
        <div className="space-y-1 mb-5">
          <h1 className="font-semibold text-5xl">Tambah Data Operator</h1>
        </div>
        <p className=" max-w-3xl font-normal text-[14px] text-[#2D3748] leading-[150%]">
          Aritmia adalah gangguan pada irama detak jantung. Dalam kondisi
          normal, jantung berdetak dengan ritme yang teratur. Namun, pada
          aritmia, ritme ini terganggu.
        </p>
        <div className="bg-white shadow-main p-6 rounded-xl dark:border-gray-700 space-y-9"></div>
      </div>
    </LayoutAdmin>
  );
};

export default UploadOperatorPage;
