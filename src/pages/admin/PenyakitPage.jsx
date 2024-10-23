import React from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import TabelPenyakit from "../../components/table/TabelPenyakit";

const PenyakitPage = () => {
  return (
    <div>
      <LayoutAdmin>
        <div className="space-y-4">
          <div className="space-y-1 mb-5">
            <h1 className="font-semibold text-5xl">Penyakit</h1>
            <p className="font-base text-lg text-[#554F9B] tracking-[0.1em]">
              Kamis, 28 Juni 2024
            </p>
          </div>
          <p className=" max-w-3xl font-normal text-[14px] text-[#2D3748] leading-[150%]">
            Aritmia adalah gangguan pada irama detak jantung. Dalam kondisi
            normal, jantung berdetak dengan ritme yang teratur. Namun, pada
            aritmia, ritme ini terganggu.
          </p>
          <div className="bg-white shadow-main p-6 rounded-xl dark:border-gray-700 space-y-9">
            <h1 className="font-medium text-[18px]">Data Operator</h1>
            <TabelPenyakit />
          </div>
        </div>
      </LayoutAdmin>
    </div>
  );
};

export default PenyakitPage;
