import React from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import TabelPenyakit from "../../components/table/TabelPenyakit";
import InputSearch from "../../components/inputField/InputSearch";
import BtnDropdown from "../../components/button/BtnDropdown";
import DefaultTable from "../../components/table/DefaultTable";
import DynamicTable from "../../components/table/DynamicTable";

const PenyakitPage = () => {
  const rowMenu = [
    { menu: "id" },
    { menu: "nama penyakit" },
    { menu: "deskripsi penyakit" },
  ];
  const datas = [
    {
      id: "P001",
      "nama penyakit": "Arrythmia",
      "deskripsi penyakit":
        "Aritmia adalah gangguan pada irama detak jantung. Dalam kondisi normal, jantung berdetak dengan ritme yang teratur. Namun, pada aritmia, ritme ini terganggu.",
    },
    {
      id: "P002",
      "nama penyakit": "Myocardial Infarction",
      "deskripsi penyakit":
        "Myocardial Infarction adalah kondisi medis serius yang terjadi ketika aliran darah ke jantung terhambat, menyebabkan kerusakan pada otot jantung.",
    },
  ];
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
              <InputSearch />
              <BtnDropdown title={"Roles"} rowMenu={rowMenu} />
            </div>
          </div>
          <div className="bg-white shadow-main p-6 rounded-xl dark:border-gray-700 space-y-9">
            <h1 className="font-medium text-[18px]">Data Record</h1>
            <DynamicTable
              rowMenu={rowMenu}
              datas={datas}
              btnView
              btnEdit
              btnDelete
            />
          </div>
        </div>
      </LayoutAdmin>
    </div>
  );
};

export default PenyakitPage;
