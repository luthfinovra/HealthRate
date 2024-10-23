import React from "react";
import TableArrythmia from "../../components/table/TableArrythmia";
import LayoutOperator from "../../components/layout/LayoutOperator";

const ArrythmiaPage = () => {
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
            <TableArrythmia />
          </div>
        </div>
      </LayoutOperator>
    </div>
  );
};

export default ArrythmiaPage;
