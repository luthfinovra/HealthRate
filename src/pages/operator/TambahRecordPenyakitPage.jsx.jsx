import React, { useCallback, useEffect, useState } from "react";
import InputField from "../../components/inputField/InputField";
import LayoutOperator from "../../components/layout/LayoutOperator";
import { useNavigate, useParams } from "react-router-dom";
import request from "../../utils/request";
import formatColumnName from "../../utils/formatColumnName";
import TextareaField from "../../components/inputField/TextareaField";
import InputSelect from "../../components/inputField/InputSelect";
import toast from "react-hot-toast";
import Loading from "../../components/loading/Loading";

const TambahRecordPenyakitPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [schema, setSchema] = useState([]);
  const [validations, setValidations] = useState([]);

  const fetchDetailDiseases = useCallback(async () => {
    setLoading(true);
    request
      .get(`/diseases/${id}`)
      .then(function (response) {
        setSchema(response?.data?.data?.schema?.columns);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        if (error.response?.status === 404 || error.response?.status === 400) {
          navigate("*"); // Navigate to the Not Found page
        }
      });
  }, [id, navigate]); // Add role to dependencies

  useEffect(() => {
    fetchDetailDiseases();
  }, [fetchDetailDiseases]);

  useEffect(() => {
    if (schema.length > 0) {
      const defaultValues = schema.reduce((acc, field) => {
        let defaultValue = "";
        if (field.type === "boolean") {
          defaultValue = false; // Default untuk boolean
        } else if (
          field.type === "integer" ||
          field.type === "float"
        ) {
          defaultValue = 0; // Default untuk angka
        } else if (
          field.type === "datetime" ||
          field.type === "date" ||
          field.type === "time"
        ) {
          defaultValue = ""; // Default untuk tanggal/waktu
        } else if (field.type === "text") {
          defaultValue = ""; // Default untuk teks
        } else if (field.type === "file") {
          defaultValue = null; // Default untuk file
        }
        acc[field.name] = defaultValue;
        return acc;
      }, {});
      setFormValues(defaultValues);
    }
  }, [schema]);

  const mimeTypeMap = {
    audio: [
      "aac",
      "midi",
      "mp3",
      "ogg",
      "wav",
      "webm",
      "flac",
      "aiff",
      "amr",
      "opus",
    ],
    video: [
      "mp4",
      "avi",
      "mkv",
      "webm",
      "ogg",
      "3gp",
      "flv",
      "mov",
      "wmv",
      "mpg",
      "mpeg",
      "m4v",
      "h264",
      "hevc",
    ],
    image: [
      "jpeg",
      "jpg",
      "png",
      "gif",
      "bmp",
      "webp",
      "tiff",
      "svg",
      "heif",
      "heic",
      "ico",
      "jp2",
      "j2k",
      "avif",
    ],
    "text-document": [
      "pdf",
      "doc",
      "docx",
      "txt",
    ],
    "compressed-document": ["zip", "7z", "tar", "gz", "rar", "bz2", "xz"],
    spreadsheet: ["xls", "xlsx", "csv", "ods"],
  };

  // Fungsi untuk mendapatkan format accept
  const getAcceptFormat = (format) => {
    const formats = mimeTypeMap[format];
    return formats ? formats.map((ext) => `.${ext}`).join(",") : undefined;
  };

  // const handleChange = (name, value) => {
  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // };

  // const handleChangeMultiple = (event) => {
  //   const files = Array.from(event.target.files);

  //   setMultipleDatas((prevFiles) => [...prevFiles, ...files]);

  //   // Clear input value to allow re-selecting the same files
  //   event.target.value = null;
  // };

  const handleChange = (name, value, multiple = false) => {
    setFormValues((prevValues) => {
      if (value instanceof FileList) {
        if (multiple) {
          // For multiple files, store as array
          return {
            ...prevValues,
            [name]: Array.from(value)
          };
        } else {
          // For single file, store just the first file
          return {
            ...prevValues,
            [name]: value[0]
          };
        }
      }
      
      // For non-file inputs
      return {
        ...prevValues,
        [name]: value
      };
    });
  };

  const handleDeleteLocalImage = (name, index) => {
    setFormValues((prevValues) => {
      if (prevValues[name] instanceof Array) {
        // Filter file berdasarkan index yang ingin dihapus
        const updatedFiles = prevValues[name].filter((_, i) => i !== index);
        return {
          ...prevValues,
          [name]: updatedFiles, // Update array file dengan yang tersisa
        };
      }
      return prevValues; // Jika bukan file multiple, tidak ada perubahan
    });
  };

  const validateInputs = (schema, formValues) => {
    const errors = {};
    const MAX_FILE_SIZE = 10 * 1024 * 1024;

    schema.forEach((field) => {
      const value = formValues[field.name];

      // Validasi field kosong
      if (!value && field.required) {
        errors[field.name] = `${formatColumnName(field.name)} is required.`;
        return;
      }

      // Validasi untuk angka (integer, float)
      if (
        ["integer", "float"].includes(field.type) &&
        value !== undefined &&
        isNaN(value)
      ) {
        errors[field.name] = `${formatColumnName(
          field.name
        )} must be a number.`;
        return;
      }

      // Validasi untuk boolean
      // if (field.type === "boolean" && typeof value !== "boolean") {
      //   // Optional: explicitly convert to boolean if needed
      //   const boolValue = value === 1 ? 1 : 
      //                     value === 0 ? 0 : 
      //                     value;
        
      //   if (typeof boolValue !== "boolean") {
      //     errors[field.name] = `${formatColumnName(field.name)} must be true or false.`;
      //     return;
      //   }
      // }

      // Validasi untuk email
      if (
        field.type === "text" &&
        field.format === "email" &&
        value &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        errors[field.name] = `${formatColumnName(
          field.name
        )} must be a valid email address.`;
        return;
      }

      // Validasi untuk nomor telepon
      if (
        field.type === "text" &&
        field.format === "phone" &&
        value &&
        !/^\+?[0-9]{10,15}$/.test(value)
      ) {
        errors[field.name] = `${formatColumnName(
          field.name
        )} must be a valid phone number.`;
        return;
      }

      // Validasi untuk tanggal
      if (["date", "datetime"].includes(field.type) && value) {
        const date = new Date(value);
        if (isNaN(date.getTime())) {
          errors[field.name] = `${formatColumnName(
            field.name
          )} must be a valid date.`;
          return;
        }
      }

      // Validasi untuk file (Jika tipe file berupa array)
      if (field.type === "file" && Array.isArray(value)) {

        const fileErrors = [];
        
        value.forEach((file, index) => {
          // Check file extension
          const fileExtension = file?.name?.split(".").pop().toLowerCase();
          const allowedExtensions = mimeTypeMap[field.format] || [];
          if (!allowedExtensions.includes(fileExtension)) {
            fileErrors.push(
              `File ${index + 1} must be a valid file of type ${allowedExtensions.join(", ")}`
            );
          }
          
          // Check file size
          if (file.size > MAX_FILE_SIZE) {
            fileErrors.push(
              `File ${index + 1} must be less than 10MB`
            );
          }
        });

        // If there are any errors, add them to the field
        if (fileErrors.length > 0) {
          errors[field.name] = fileErrors.join(". ");
        }
      }

      // Validasi untuk file (Jika tipe file tunggal)
      if (field.type === "file" && !Array.isArray(value) && value) {
        const fileExtension = value?.name?.split(".").pop().toLowerCase();
        const allowedExtensions = mimeTypeMap[field.format] || [];
        if (!allowedExtensions.includes(fileExtension)) {
          errors[field.name] = `${formatColumnName(
            field.name
          )} must be a valid file of type ${allowedExtensions.join(", ")}.`;
        }

        // Check file size
        if (value.size > MAX_FILE_SIZE) {
          errors[field.name] = `${formatColumnName(
            field.name
          )} must be less than 10MB.`;
        }
      }

      // Validasi untuk panjang teks (jika ada aturan min/max length)
      if (
        field.type === "text" &&
        value &&
        ((field.minLength && value.length < field.minLength) ||
          (field.maxLength && value.length > field.maxLength))
      ) {
        errors[field.name] = `${formatColumnName(field.name)} must be between ${
          field.minLength
        } and ${field.maxLength} characters.`;
      }
    });

    return errors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValidations([]);
    setLoading(true);
    toast.loading("Saving data...");

    // Validasi input berdasarkan skema
    const errors = validateInputs(schema, formValues);

    if (Object.keys(errors).length > 0) {
      setValidations(
        Object.entries(errors).map(([name, message]) => ({ name, message }))
      );
      toast.dismiss();
      toast.error("Please fix the validation errors.");
      setLoading(false);
      return;
    }

    const data = new FormData();
    schema.forEach((field) => {
      const value = formValues[field.name];

      // Cek jika input adalah file multiple
      if (field.type === "file" && Array.isArray(value)) {
        value.forEach((file) => {
          data.append(`${field.name}[]`, file); // Tambahkan setiap file ke FormData
        });
      } else {
        data.append(`${field.name}`, value || "");
      }
    });

    request
      .post(`/diseases/${id}/records`, data)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          toast.dismiss();
          toast.success(response.data.message);
          navigate(`/operator/record-penyakit/${id}`);
        } else {
          toast.dismiss();
          toast.error("Invalid Input");
        }
      })
      .catch((error) => {
        setValidations(
          Object.entries(error?.response?.data?.data || {}).flatMap(
            ([name, messages]) => messages.map((message) => ({ name, message }))
          )
        );
        toast.dismiss();
        toast.error("Invalid Input");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <LayoutOperator>
      <div className="space-y-4">
        <div className="space-y-1 mb-5">
          <h1 className="font-semibold text-5xl">
            Tambah Data Record Penyakit
          </h1>
        </div>
        <div className=" space-y-9 grid md:grid-cols-2">
          <div
            className="max-h-[650px] h-full overflow-y-scroll w-full space-y-6 md:max-w-[500px]  bg-white shadow-main p-6 rounded-xl flex flex-col justify-between pr-3 [&::-webkit-scrollbar]:w-2 
  [&::-webkit-scrollbar]:h-2 
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
"
          >
            {loading ? (
              <Loading />
            ) : (
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                {schema.map((field, i) => {
                  let inputType = "text"; // Default input type
                  if (
                    field.type === "integer" ||
                    field.type === "float"
                  ) {
                    inputType = "number";
                  } else if (field.type === "datetime") {
                    inputType = "datetime-local";
                  } else if (field.type === "file") {
                    inputType = "file";
                  } else if (field.type === "date") {
                    inputType = "date";
                  } else if (field.type === "time") {
                    inputType = "time";
                  }

                  // Render berdasarkan tipe field
                  if (field.type === "boolean") {
                    return (
                      <div key={field.name} className="mb-4">
                        <InputSelect
                          id={field.name}
                          name={field.name}
                          label={formatColumnName(field.name)}
                          value={formValues[field.name] || ""}
                          onChange={(e) =>
                            handleChange(field.name, e.target.value)
                          }
                        >
                          <option value="" disabled selected hidden>
                            {`Pilih ${formatColumnName(field.name)}`}
                          </option>
                          <option value={1}>True</option>
                          <option value={0}>False</option>
                        </InputSelect>
                        {validations
                          .filter((v) => v.name === field.name)
                          .map((v, idx) => (
                            <span key={idx} className="text-red-500 text-sm">
                              {v.message}
                            </span>
                          ))}
                      </div>
                    );
                  } else if (field.type === "text") {
                    return (
                      <div key={field.name} className="mb-4">
                        <TextareaField
                          id={field.name}
                          name={field.name}
                          value={formValues[field.name] || ""}
                          onChange={(e) =>
                            handleChange(field.name, e.target.value)
                          }
                          placeholder={`Input your ${field.name}`}
                          required
                          label={formatColumnName(field.name)} // Format label
                        />
                        {validations
                          .filter((v) => v.name === field.name)
                          .map((v, idx) => (
                            <span key={idx} className="text-red-500 text-sm">
                              {v.message}
                            </span>
                          ))}
                      </div>
                    );
                  } else {
                    return (
                      <div key={field.name} className="mb-4">
                        <InputField
                          id={field.name}
                          name={field.name}
                          type={inputType}
                          step={field.type === "float" ? "0.001" : undefined}
                          value={field.type === "file" ? formValues[field.name] : formValues[field.name] || ""}
                          onChange={(e) =>
                            handleChange(
                              field.name,
                              field.type === "phone"
                                ? e.target.value.replace(/[^0-9]/g, "")
                                : field.type === "file"
                                  ? e.target.files
                                  : e.target.value,
                              field.type === "file" && (field.multiple === "1" || field.multiple === true))
                          }
                          validations={validations}
                          placeholder={`Input your ${field.name}`}
                          label={formatColumnName(field.name)}
                          accept={field.type === "file" ? getAcceptFormat(field.format) : undefined}
                          multiple={field.type === "file" && (field.multiple === "1" || field.multiple === true) ? true : undefined}
                          multipleDatas={field.type === "file" && (field.multiple === "1" || field.multiple === true) ? formValues[field.name] : undefined}
                          handleDeleteLocalImage={(index) => handleDeleteLocalImage(field.name, index)}
                        />
                      </div>
                    );
                  }
                })}
                <button
                  className="bg-[#554F9B] rounded-lg w-full py-2 text-white"
                  type="submit"
                >
                  Tambah
                </button>
              </form>
            )}
          </div>
          <div className="hidden md:block">
            <img
              loading="lazy"
              src="/vektor/vektorTambah.png"
              alt="vektor-tambah"
            />
          </div>
        </div>
      </div>
    </LayoutOperator>
  );
};

export default TambahRecordPenyakitPage;
