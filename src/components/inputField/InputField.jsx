import React from "react";

import { CiFileOn } from "react-icons/ci";
import { GiCancel } from "react-icons/gi";
import { formatFileSize } from "../../utils/formatFileSize";

const InputField = ({
  id,
  name,
  type,
  value,
  step,
  accept,
  multipleDatas = [],
  valueMultiple = [],
  onChange,
  placeholder,
  previewImage,
  multiple = false,
  required = false,
  icon = null,
  label = null,
  disabled = false,
  readOnly = false,
  validations,
  handleDeleteImage, // Fungsi untuk hapus di API
  handleDeleteLocalImage, // Fungsi untuk hapus di local
}) => {
  console.log(value);
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between">
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {label}
          </label>
          {previewImage && (
            <a
              target="_blank"
              rel="noreferrer"
              href={previewImage}
              className="block mb-2 mr-4 text-sm font-medium text-blue-500 underline cursor-pointer"
            >
              Lihat File
            </a>
          )}
        </div>
      )}

      <div className="relative w-full">
        <input
          id={id}
          name={name}
          accept={accept}
          type={type === "image" ? "file" : type}
          step={step}
          value={type === "file" ? "" : value}
          onChange={onChange}
          placeholder={placeholder}
          multiple={multiple}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
            type === "file" ? "hidden " : "block "
          }`}
        />
        <label
          htmlFor={id}
          className={`${
            type === "file" ? "block" : "hidden"
          } bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5 cursor-pointer hover:bg-gray-100 flex items-center`}
        >
          <div className="border border-black rounded-sm bg-gray-200 h-[26px] inline-flex px-2 mr-[4px] whitespace-nowrap">
            <p className="m-auto">Choose Files</p>
          </div>
          <p className="inline-flex text-gray-700 ml-2">
            {multipleDatas && valueMultiple && multiple
              ? `File ${multipleDatas.length + valueMultiple.length}`
              : valueMultiple && multiple
              ? `File ${valueMultiple.length}`
              : multipleDatas && multiple
              ? `File ${multipleDatas.length}`
              : value?.name || "No file chosen"}
          </p>
        </label>

        {icon && (
          <div className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-black flex justify-center items-center">
            {icon}
          </div>
        )}
      </div>
      {/* Render valueMultiple and multipleDatas if multiple is true */}
      {multiple && (
        <div className="mt-2">
          <ul className="space-y-2">
            {/* Render data dari database (valueMultiple) */}
            {valueMultiple?.map((file, index) => (
              <li key={index} className="text-gray-700">
                <div className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 flex justify-between">
                  <div className="flex items-center space-x-4">
                    <CiFileOn className="text-5xl" />
                    <div className="flex flex-col">
                      <p className="block text-sm font-medium text-gray-900">
                        {file?.mediaFilename || "File"}
                      </p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`${file}`}
                        className="block text-xs font-medium text-blue-500 underline"
                      >
                        Lihat
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}

            {/* Render data dari local (multipleDatas) */}
            {multipleDatas?.map((file, index) => (
              <li key={index} className="text-gray-700">
                <div className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 flex justify-between">
                  <div className="flex items-center space-x-4">
                    <CiFileOn className="text-5xl" />
                    <div className="flex flex-col">
                      <p className="block text-sm font-medium text-gray-900">
                        {file?.name}
                      </p>
                      <p className="block text-sm font-medium text-gray-900">
                        {formatFileSize(file?.size)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <GiCancel
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDeleteLocalImage(index)}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {validations &&
        validations.map(
          (validation, index) =>
            (validation.name === name ||
              (validation.name === "media_uri" && type === "image")) && (
              <p key={index} className="mt-2 text-sm text-red-500">
                {validation.message}
              </p>
            )
        )}
    </div>
  );
};

export default InputField;
