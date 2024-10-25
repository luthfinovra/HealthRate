import React, { useState } from "react";

const CardHome = ({ id, isActive, handleClick, icon }) => {
  return (
    <div
      className={`${
        isActive
          ? "max-w-[350px] border-2 rounded-xl p-3 bg-white"
          : "max-w-[100px] bg-[#605E78]"
      } w-full max-h-[250px] h-[250px]  flex justify-center items-center rounded-xl transition-all duration-300 m-2`}
      onClick={() => handleClick(id)}
    >
      {isActive ? (
        <div className=" h-full space-y-5 ">
          <div className="bg-[#605E78] shadow-main appearance-none p-2 rounded-2xl  w-16 h-16 flex items-center justify-center ">
            {icon}
          </div>
          <div className="w-full h-full  rounded-xl space-y-3 ">
            <h1 className="font-semibold text-sm lg:text-[21px]">
              Penyebab Myocardial
            </h1>
            <p className="text-sm lg:text-base">
              <ul className="list-disc ml-7">
                <li>Masalah pada sistem listrik jantung</li>
                <li>Penyakit jantung</li>
                <li>Stress atau kecemasan</li>
                <li>Efek samping obat-obatan tertentu</li>
              </ul>
            </p>
          </div>
        </div>
      ) : (
        <div>{icon}</div>
      )}
    </div>
  );
};
export default CardHome;
