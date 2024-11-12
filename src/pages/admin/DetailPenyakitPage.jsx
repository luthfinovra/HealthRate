import React from "react";
import { useParams } from "react-router-dom";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import TabelPenyakit from "../../components/table/TabelPenyakit";
import InputSearch from "../../components/inputField/InputSearch";
import BtnDropdown from "../../components/button/BtnDropdown";
import DynamicTable from "../../components/table/DynamicTable";

const DetailPenyakitPage = () => {
  const { id } = useParams();

  const rowMenu = [
    { menu: "RECORD" },
    { menu: "ANNOTATIONS" },
    { menu: "JENIS PENYAKIT" },
    { menu: "SIGNALS" },
    { menu: "DURASI" },
    { menu: "TANGGAL TES" },
    { menu: "DATA FORMAT" },
  ];
  const datas = [
    {
      RECOR: "Record 1",
      ANNOTATIONS:
        "Reference Beat, Rtythm, and Signal Quality Annotations (ATR)",
      "JENIS PENYAKIT": "AF",
      SIGNALS: "MLII, V1",
      DURASI: 30.0,
      "TANGGAL TES": "02/12/2024",
      "DATA FORMAT": "Standar",
      id: "RCD-001",
    },
    {
      RECORD: "Record 1",
      ANNOTATIONS:
        "Reference Beat, Rtythm, and Signal Quality Annotations (ATR)",
      "JENIS PENYAKIT": "AF",
      SIGNALS: "MLII, V1",
      DURASI: 30.0,
      "TANGGAL TES": "02/12/2024",
      "DATA FORMAT": "Standar",
      id: "RCD-002",
    },
    {
      RECORD: "Record 1",
      ANNOTATIONS:
        "Reference Beat, Rtythm, and Signal Quality Annotations (ATR)",
      "JENIS PENYAKIT": "AF",
      SIGNALS: "MLII, V1",
      DURASI: 30.0,
      "TANGGAL TES": "02/12/2024",
      "DATA FORMAT": "Standar",
      id: "RCD-003",
    },
  ];
  return (
    <div>
      <LayoutAdmin>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-start justify-between md:items-end">
            <div className="space-y-4">
              <h1 className=" font-semibold text-[42px] leading-none capitalize ">
                {id}
              </h1>
              <p className=" max-w-3xl font-normal text-[14px] text-[#2D3748] leading-[150%]">
                Aritmia adalah gangguan pada irama detak jantung. Dalam kondisi
                normal, jantung berdetak dengan ritme yang teratur. Namun, pada
                aritmia, ritme ini terganggu.
              </p>
            </div>
            <div className="flex gap-2">
              <InputSearch />
              <BtnDropdown title={"Roles"} rowMenu={rowMenu} />
              <BtnDropdown title={"Jenis Penyakit"} rowMenu={rowMenu} />
            </div>
          </div>
          <div className="bg-white shadow-main p-6 rounded-xl dark:border-gray-700 space-y-9">
            <h1 className="font-medium text-[18px]">Data Record</h1>
            <DynamicTable rowMenu={rowMenu} datas={datas} btnView />
          </div>
        </div>
      </LayoutAdmin>
    </div>
  );
};

export default DetailPenyakitPage;
