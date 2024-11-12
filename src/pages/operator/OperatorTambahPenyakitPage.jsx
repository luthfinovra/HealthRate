import React from "react";
import InputField from "../../components/inputField/InputField";
import LayoutOperator from "../../components/layout/LayoutOperator";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import InputDropzone from "../../components/inputField/InputDropzone";

const OperatorTambahPenyakitPage = () => {
  return (
    <LayoutOperator>
      <div className="space-y-4">
        <div className="space-y-1 mb-5">
          <h1 className="font-semibold text-5xl">Tambah Data Arrthmia</h1>
        </div>
        <p className=" max-w-3xl font-normal text-[14px] text-[#2D3748] leading-[150%]">
          Aritmia adalah gangguan pada irama detak jantung. Dalam kondisi
          normal, jantung berdetak dengan ritme yang teratur. Namun, pada
          aritmia, ritme ini terganggu.
        </p>
        <div className=" space-y-9 grid md:grid-cols-2">
          <div className="max-h-[650px] h-full overflow-y-scroll w-full space-y-6 md:max-w-[500px]  bg-white shadow-main p-6 rounded-xl dark:border-gray-700 flex flex-col justify-between">
            <div className="space-y-6">
              <InputField
                placeholder={"Record"}
                type={"text"}
                icon={<BsPerson />}
              />
              <InputField
                placeholder={"Annotations"}
                type={"text"}
                icon={<MdOutlineEmail />}
              />
              <InputField
                placeholder={"Jenis Penyakit"}
                type={"text"}
                icon={<RiLockPasswordLine />}
              />
              <InputField
                placeholder={"Signals"}
                type={"text"}
                icon={<MdOutlineEmail />}
              />
              <InputField
                placeholder={"Durasi"}
                type={"text"}
                icon={<MdOutlineEmail />}
              />
              <InputField
                placeholder={"Tanggal Tes"}
                type={"text"}
                icon={<MdOutlineEmail />}
              />
              <InputField placeholder={"Data Format"} icon={<BsPerson />} />
              <InputDropzone />
            </div>
            <button className="bg-[#554F9B] rounded-lg w-full py-2 text-white">
              Tambah
            </button>
          </div>
          <div className="hidden md:block">
            <img src="/vektor/vektorTambah.png" alt="vektor-tambah" />
          </div>
        </div>
      </div>
    </LayoutOperator>
  );
};

export default OperatorTambahPenyakitPage;
