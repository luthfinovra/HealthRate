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
  handleDeleteImage,
  handleDeleteLocalImage,
}) => {

    // Helper function to get relevant validation messages for the field
  const getValidationMessages = () => {
    if (!validations?.length) return [];
    
    // For multiple file inputs, look for field names like "fieldname.0", "fieldname.1", etc.
    if (type === "file" && multiple) {
      // Find all validation messages that start with the field name
      return validations.filter(validation => 
        validation.name.startsWith(name + ".") || validation.name === name
      );
    }
    
    // For non-multiple inputs, return all matching validations
    return validations.filter(validation =>
      validation.name === name || (validation.name === "media_uri" && type === "image")
    );
  };
  
  const getFileFormatHint = (accept) => {
    if (!accept) return "";
    const formats = accept.split(",").map(format => 
      format.trim().replace(".", "").toUpperCase()
    );
    return `(Accepted formats: ${formats.join(", ")})`;
  };

  // Helper to get the file count hint
  const getFileCountHint = () => {
    return multiple ? "Multiple files allowed" : "Maximum 1 file";
  };

  const getFileDisplayText = () => {
    if (multiple) {
      const totalFiles = (multipleDatas?.length || 0);
      return totalFiles > 0 ? `File ${totalFiles}` : "No files chosen";
    } else {
      return value instanceof File ? value.name : "No file chosen";
    }
  };

  const currentValidations = getValidationMessages();

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label
              htmlFor={id}
              className="block text-sm font-medium text-gray-900"
            >
              {label}
            </label>
            {type === "file" && (
              <span className="text-xs text-gray-500">
                {getFileFormatHint(accept)} • {getFileCountHint()}
              </span>
            )}
          </div>
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

      <div className="relative w-full mt-1">
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
            type === "file" ? "hidden" : "block"
          }`}
        />
        {type === "file" && (
          <label
            htmlFor={id}
            className="block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5 cursor-pointer hover:bg-gray-100 flex items-center"
          >
            <div className="border border-black rounded-sm bg-gray-200 h-[26px] inline-flex px-2 mr-[4px] whitespace-nowrap">
              <p className="m-auto">Choose Files</p>
            </div>
            <p className="inline-flex text-gray-700 ml-2 whitespace-nowrap overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
              {getFileDisplayText()}
            </p>
          </label>
        )}

        {icon && (
          <div className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-black flex justify-center items-center">
            {icon}
          </div>
        )}
      </div>

      {/* File Preview Section */}
      {type === "file" && (
        <div className="mt-2">
          <ul className="space-y-2">
            {/* Preview for multiple files */}
            {multiple && multipleDatas?.map((file, index) => (
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

            {/* Preview for single file */}
            {!multiple && value instanceof File && (
              <li className="text-gray-700">
                <div className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 flex justify-between">
                  <div className="flex items-center space-x-4">
                    <CiFileOn className="text-5xl" />
                    <div className="flex flex-col">
                      <p className="block text-sm font-medium text-gray-900">
                        {value.name}
                      </p>
                      <p className="block text-sm font-medium text-gray-900">
                        {formatFileSize(value.size)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <GiCancel
                      className="text-red-500 cursor-pointer"
                      onClick={() => {
                        // Trigger the onChange event with a null value
                        onChange({ target: { value: '', name: name } });
                      }}
                    />
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      )}
      
      <div className="mt-2 space-y-1">
        {currentValidations.map((validation, index) => (
          <p key={index} className="text-sm text-red-500">
            {validation.message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InputField;