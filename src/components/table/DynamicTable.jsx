import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import formatColumnName from "../../utils/formatColumnName";

export default function DynamicTable({
  rowMenu,
  datas,
  btnView = false,
  btnEdit = false,
  btnDelete = false,
  btnAction = false,
  onDetail,
  onEdit,
  onDelete,
}) {
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi
  const location = useLocation(); // Mendapatkan informasi lokasi
  const pathname = location.pathname; // Mendapatkan pathname
  console.log(rowMenu);
  console.log(datas);
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr className="border-b">
            {rowMenu
              ?.filter((column) => column.is_visible)
              .map((item, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {formatColumnName(item.name)}
                </th>
              ))}
            {/* Add an extra column for the button if btnView is true */}
            {btnAction && <th className="px-6 py-3">Action</th>}
            {btnView && <th className="px-6 py-3">Detail</th>}
            {btnEdit && <th className="px-6 py-3">Edit</th>}
            {btnDelete && <th className="px-6 py-3">Delete</th>}
          </tr>
        </thead>
        <tbody>
          {datas?.map((data, rowIndex) => (
            <tr key={rowIndex}>
              {rowMenu
                ?.filter((column) => column.is_visible)
                .map((col, colIndex) => (
                  <td key={colIndex} className="px-6 py-3 align-top">
                    {formatColumnName(data?.data[col.name])}
                  </td>
                ))}

              {btnAction && (
                <td className="px-6 py-4 flex gap-3">
                  <button className="bg-[#51A279] px-5 py-1 rounded-lg min-w-[59px] flex items-center justify-center">
                    <svg
                      width="17"
                      height="13"
                      viewBox="0 0 17 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.0501 13.0001L0.350098 7.3001L1.7751 5.8751L6.0501 10.1501L15.2251 0.975098L16.6501 2.4001L6.0501 13.0001Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button className="bg-[#FF5959] px-5 py-1 rounded-lg min-w-[59px] flex items-center justify-center">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.7 12L0.5 10.8L5.3 6L0.5 1.2L1.7 0L6.5 4.8L11.3 0L12.5 1.2L7.7 6L12.5 10.8L11.3 12L6.5 7.2L1.7 12Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </td>
              )}
              {btnView && (
                <td className="px-6 py-4 align-top">
                  <button
                    className=" bg-[#554F9B] px-5 py-1 rounded-lg min-w-[59px] text-white text-sm"
                    onClick={() => onDetail?.(data)}
                  >
                    Lihat
                  </button>
                </td>
              )}
              {btnEdit && (
                <td className="px-6 py-4 align-top">
                  <button
                    className=" bg-[#FACC2C] px-5 py-1 rounded-lg min-w-[59px]"
                    onClick={() => onEdit?.(data)}
                  >
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_376_202)">
                        <path
                          d="M2.75 13.095V15.375C2.75 15.585 2.915 15.75 3.125 15.75H5.405C5.5025 15.75 5.6 15.7125 5.6675 15.6375L13.8575 7.45504L11.045 4.64254L2.8625 12.825C2.7875 12.9 2.75 12.99 2.75 13.095ZM16.0325 5.28004C16.325 4.98754 16.325 4.51504 16.0325 4.22254L14.2775 2.46754C13.985 2.17504 13.5125 2.17504 13.22 2.46754L11.8475 3.84004L14.66 6.65254L16.0325 5.28004Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_376_202">
                          <rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </td>
              )}
              {btnDelete && (
                <td className="px-6 py-4 align-top">
                  <button
                    className=" bg-[#FF5959] px-5 py-1 rounded-lg min-w-[59px]"
                    onClick={() => onDelete?.(data)}
                  >
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
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Set default props
DynamicTable.defaultProps = {
  onDetail: () => {},
  onEdit: () => {},
  onDelete: () => {},
};
