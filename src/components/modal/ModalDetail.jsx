import React from "react";
import formatColumnName from "../../utils/formatColumnName";

const ModalDetail = ({ isOpen, onClose, title, schema, record }) => {
  if (!isOpen) return null;

  // Filter file data untuk ditampilkan di bagian bawah
  const fileData = schema
    .filter((field) => field.type === "file" && record[field.name])
    .map((field) => ({
      label: field.name,
      url: record[field.name],
    }));

  // Filter non-file data untuk ditampilkan secara umum
  const displayData = schema.filter((field) => field.type !== "file");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-[1000px] p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✖
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayData.map((field, index) => (
            <div key={index} className="bg-white shadow p-4 rounded">
              <h1 className="text-lg font-bold">
                {formatColumnName(field.name)}
              </h1>
              <p>{record[field.name]}</p>
            </div>
          ))}
        </div>
        {fileData.length > 0 && (
          <div className="space-y-4">
            {fileData.map((file, index) => (
              <div key={index} className="flex items-center space-x-4">
                <button
                  onClick={() => window.open(file.url, "_blank")}
                  className="px-4 py-2 text-white bg-[#554F9B] rounded hover:bg-[#6A63B0]"
                >
                  Download {formatColumnName(file.label)}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalDetail;
