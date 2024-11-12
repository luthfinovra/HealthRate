import React from "react";
import LayoutOperator from "../../components/layout/LayoutOperator";
import DynamicTable from "../../components/table/DynamicTable";

const OperatorPanyakitPage = () => {
  const rowMenu = [
    { menu: "record" },
    { menu: "annotations" },
    { menu: "jenis penyakit" },
    { menu: "signals" },
    { menu: "durasi" },
    { menu: "tanggal tes" },
    { menu: "data format" },
  ];
  const datas = [
    {
      record: "record 1",
      annotations:
        "Reference Beat, Rtythm, and Signal Quality Annotations (ATR)",
      "jenis penyakit": "AF",
      signals: "MLII, V1",
      durasi: "30.00",
      "tanggal tes": "02/12/2024",
      "data format": "Standar",
    },
  ];
  return (
    <div>
      <LayoutOperator>
        <div className="space-y-4">
          <h1 className=" font-semibold text-[42px] leading-none">Arrythmia</h1>
          <p className=" max-w-3xl font-normal text-[14px] text-[#2D3748] leading-[150%]">
            Aritmia adalah gangguan pada irama detak jantung. Dalam kondisi
            normal, jantung berdetak dengan ritme yang teratur. Namun, pada
            aritmia, ritme ini terganggu.
          </p>
          <div className="bg-white shadow-main p-6 rounded-xl dark:border-gray-700 space-y-9">
            <h1 className="font-medium text-[18px]">Data Records</h1>
            {/* <DynamicTable /> */}
            <DynamicTable rowMenu={rowMenu} datas={datas} btnEdit btnDelete />
          </div>
        </div>
      </LayoutOperator>
    </div>
  );
};

export default OperatorPanyakitPage;
