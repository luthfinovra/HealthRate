import React from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import InputField from "../../components/inputField/InputField";

import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const TambahPenggunaPage = () => {
  return (
    <LayoutAdmin>
      <div className="space-y-4">
        <div className="space-y-1 mb-5">
          <h1 className="font-semibold text-5xl">Tambah Data Pengguna</h1>
        </div>
        <p className=" max-w-3xl font-normal text-[14px] text-[#2D3748] leading-[150%]">
          Aritmia adalah gangguan pada irama detak jantung. Dalam kondisi
          normal, jantung berdetak dengan ritme yang teratur. Namun, pada
          aritmia, ritme ini terganggu.
        </p>
        <div className=" space-y-9 grid md:grid-cols-2">
          <div className=" w-full space-y-6 md:max-w-[500px]  bg-white shadow-main p-6 rounded-xl dark:border-gray-700 flex flex-col justify-between">
            <div className="space-y-6">
              <InputField
                placeholder={"nama"}
                type={"text"}
                icon={<BsPerson />}
              />
              <InputField
                placeholder={"email"}
                type={"email"}
                icon={<MdOutlineEmail />}
              />
              <InputField
                placeholder={"password"}
                type={"password"}
                icon={<RiLockPasswordLine />}
              />
              <InputField placeholder={"roles"} icon={<BsPerson />} />
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
    </LayoutAdmin>
  );
};

export default TambahPenggunaPage;
