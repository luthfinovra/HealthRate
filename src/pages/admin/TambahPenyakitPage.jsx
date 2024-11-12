import React from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import InputField from "../../components/inputField/InputField";

import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiAddLine } from "react-icons/ri";
import { GoColumns } from "react-icons/go";
import { FiType } from "react-icons/fi";

import InputDropzone from "../../components/inputField/InputDropzone";
import InputTextarea from "../../components/inputField/InputTextarea";

const TambahPenyakitPage = () => {
  return (
    <LayoutAdmin>
      <div className="space-y-4">
        <div className="space-y-1 mb-5">
          <h1 className="font-semibold text-5xl">Tambah Data Penyakit</h1>
        </div>
        <p className=" max-w-3xl font-normal text-[14px] text-[#2D3748] leading-[150%]">
          Aritmia adalah gangguan pada irama detak jantung. Dalam kondisi
          normal, jantung berdetak dengan ritme yang teratur. Namun, pada
          aritmia, ritme ini terganggu.
        </p>
        <div className="  grid md:grid-cols-3 gap-5">
          <div className=" w-full space-y-6  bg-white shadow-main p-6 rounded-xl dark:border-gray-700 flex flex-col justify-between col-span-1">
            <div className="space-y-6">
              <InputDropzone />
              <InputField
                placeholder={"email"}
                type={"email"}
                icon={<MdOutlineEmail />}
              />
              <InputTextarea />
            </div>
            <button className="bg-[#554F9B] rounded-lg w-full py-2 text-white">
              Tambah
            </button>
          </div>
          <div className=" w-full space-y-6  bg-white shadow-main p-6 rounded-xl dark:border-gray-700  col-span-2">
            <div className="flex justify-between items-center border-b pb-2">
              <h1 className="text-xl font-semibold">Schema</h1>
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white shadow-main rounded-lg "
              >
                <RiAddLine className="" />
                Add column
              </button>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <InputField placeholder={"column 1"} icon={<GoColumns />} />
              <InputField placeholder={"type"} icon={<FiType />} />
              <button className=" bg-[#FF5959] px-5 py-1 rounded-lg max-w-[59px]">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0956 7.11632C13.0956 7.16732 12.7403 12.2229 12.5373 14.3506C12.4102 15.6563 11.662 16.4482 10.5397 16.4707C9.67736 16.4925 8.83319 16.5 8.00263 16.5C7.12085 16.5 6.25852 16.4925 5.42148 16.4707C4.33676 16.4415 3.58789 15.6338 3.46729 14.3506C3.25852 12.2154 2.9097 7.16732 2.90321 7.11632C2.89673 6.96257 2.94082 6.81633 3.03029 6.69783C3.11847 6.58834 3.24555 6.52234 3.37912 6.52234H12.6261C12.7591 6.52234 12.8797 6.58834 12.975 6.69783C13.0638 6.81633 13.1085 6.96257 13.0956 7.11632Z"
                    fill="white"
                  />
                  <path
                    d="M14 4.48265C14 4.17441 13.7841 3.93291 13.5247 3.93291H11.5809C11.1854 3.93291 10.8418 3.61643 10.7536 3.17019L10.6447 2.62346C10.4923 1.96273 9.9665 1.5 9.37649 1.5H6.62416C6.02766 1.5 5.50702 1.96273 5.34882 2.65946L5.24703 3.17094C5.1582 3.61643 4.81457 3.93291 4.41971 3.93291H2.4759C2.21591 3.93291 2 4.17441 2 4.48265V4.76764C2 5.06837 2.21591 5.31737 2.4759 5.31737H13.5247C13.7841 5.31737 14 5.06837 14 4.76764V4.48265Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default TambahPenyakitPage;
