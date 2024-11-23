import React, { useState } from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import InputField from "../../components/inputField/InputField";

import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiAddLine } from "react-icons/ri";
import { GoColumns } from "react-icons/go";
import { FiType } from "react-icons/fi";

import InputDropzone from "../../components/inputField/InputDropzone";
import TextareaField from "../../components/inputField/TextareaField";
import InputSelect from "../../components/inputField/InputSelect";
import request from "../../utils/request";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const MAX_FILE_SIZE = 2000000; // 2MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const rowSchema = z
  .object({
    visible: z.number().min(0).max(1),
    column: z
      .string()
      .min(1, { message: "Kolom tidak boleh kosong" })
      .regex(/^[a-z_]+$/, {
        message: "Hanya boleh menggunakan huruf kecil dan format snake_case",
      }) // Validasi untuk snake_case
      .transform((val) => val.replace(/\s+/g, "_")),

    type: z.enum(
      [
        "string",
        "text",
        "email",
        "phone",
        "boolean",
        "integer",
        "float",
        "datetime",
        "time",
        "file",
        "date",
      ],
      {
        errorMap: () => ({ message: "Tipe tidak valid" }),
      }
    ),
    format: z
      .enum(
        [
          "image",
          "audio",
          "video",
          "compressed-document",
          "spreadsheet",
          "text-document",
        ],
        {
          errorMap: () => ({ message: "Tipe tidak valid" }),
        }
      )
      .optional(),
    multiple: z.number().optional(),
  })
  .refine(
    (data) =>
      data.type !== "file" || (data.format && data.multiple !== undefined),
    {
      message: "Kolom format dan multiple wajib diisi jika type adalah file",
      path: ["format"], // Menargetkan error pada field format
    }
  )
  .refine((data) => data.multiple === 0 || data.multiple === 1, {
    message: "Nilai multiple harus 0 atau 1",
  });

// Schema untuk seluruh form
const formSchema = z.object({
  name: z.string().min(1, "Nama penyakit tidak boleh kosong"),
  deskripsi: z.string().min(1, "Deskripsi tidak boleh kosong"),
  cover_page: z
    .any()
    .refine(
      (file) => file?.size <= MAX_FILE_SIZE,
      `The maximum file size that can be uploaded is 2MB`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    ),
});

const TambahPenyakitPage = () => {
  const navigate = useNavigate();
  const [validations, setValidations] = useState([]);
  const [rowValidation, setRowValidation] = useState([]);
  const [namaPenyakit, setNamaPenyakit] = useState("");
  const [cover, setCover] = useState();
  const [deskripsiPenyakit, setDeskripsiPenyakit] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState({
    isOpen: false,
    errors: [],
  });

  const [rows, setRows] = useState([
    { visible: 1, column: "", type: "", format: "", multiple: 0 },
  ]);

  const addRow = () => {
    const newRow = {
      visible: 1,
      column: "",
      type: "",
      format: "",
      multiple: 0,
    };
    setRows([...rows, newRow]);
  };

  const handleValidationErrors = (errors) => {
    setValidations(
      errors.map((err) => ({ name: err.path[0], message: err.message }))
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValidations([]);
    setRowValidation([]);
    setLoading(true);
    toast.loading("Saving data...");
    // Data yang dikirimkan
    const dataValidation = formSchema.safeParse({
      name: namaPenyakit,
      deskripsi: deskripsiPenyakit,
      cover_page: cover,
    });

    if (!dataValidation.success) {
      // Tangani error validasi dari Zod
      handleValidationErrors(dataValidation.error.errors);
      toast.dismiss();
      toast.error("Invalid Input 1");
      setLoading(false);
      return;
    }

    const validationResults = [];
    let errorRow = false;

    rows.forEach((row, index) => {
      // Buat salinan row untuk menghapus properti yang tidak relevan
      const rowToValidate = { ...row };

      // Hapus `format` dan `multiple` jika `type` bukan "file"
      if (row.type !== "file") {
        delete rowToValidate.format;
      }

      // Validasi menggunakan Zod
      const result = rowSchema.safeParse(rowToValidate);
      console.log(result);
      if (!result.success) {
        errorRow = true;
        validationResults.push({
          index,
          errors: result.error.errors.map((err) => ({
            path: err.path.join("."),
            message: err.message,
          })),
        });
      }
    });

    // Perbarui state rowValidation dengan hasil validasi
    if (errorRow) {
      setRowValidation(validationResults);
      toast.dismiss();
      toast.error("Invalid Input 2");
      setLoading(false);
      return;
    }
    const data = new FormData(); // FormData
    data.append("name", namaPenyakit);
    data.append("deskripsi", deskripsiPenyakit);
    data.append("cover_page", cover);
    rows.forEach((row, index) => {
      if (row.column !== "" && row.type !== "") {
        data.append(`schema[columns][${index}][is_visible]`, row.visible);
        data.append(`schema[columns][${index}][name]`, row.column);
        data.append(`schema[columns][${index}][type]`, row.type);
        if (row.type === "file") {
          data.append(`schema[columns][${index}][format]`, row.format);
          data.append(`schema[columns][${index}][multiple]`, row.multiple);
        }
      }
    });

    // Mengirimkan request POST dengan header dinamis
    request
      .post("/diseases", data)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          toast.dismiss();
          toast.success(response.data.message);
          navigate("/admin/penyakit");
        } else {
          window.alert("Gagal login");
        }
      })
      .catch(function (error) {
        toast.dismiss(); // Hentikan semua toast
        toast.error("Gagal menyimpan data");
        setLoading(false);
        console.log("Error:", error);
      });
  };

  return (
    <>
      {modalData.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Error List</h2>
            <ul className="list-disc pl-5">
              {modalData.errors.map((error, index) => (
                <li key={index} className="text-red-500">
                  {error.message}
                </li>
              ))}
            </ul>
            <button
              onClick={() =>
                setModalData({
                  isOpen: false,
                  errors: [],
                })
              }
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
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
          <div className="  grid grid-cols-1 md:grid-cols-3 md:gap-5">
            <div className=" w-full space-y-6  bg-white shadow-main p-6 rounded-xl flex flex-col justify-between  col-span-1">
              <div className="space-y-6">
                <InputField
                  id={"cover_page"}
                  name={"cover_page"}
                  type={"file"}
                  label={"Cover Page"}
                  imageOnly={true}
                  // previewImage={oldData.mediaUri}
                  validations={validations}
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const img = e.target.files[0];
                      setCover(img);
                    }
                  }}
                />
                <InputField
                  id={"name"}
                  name={"name"}
                  onChange={(e) => setNamaPenyakit(e.target.value)}
                  placeholder={"Masukan nama penyakit"}
                  type={"text"}
                  value={namaPenyakit}
                  validations={validations}
                  required
                  label={"Nama Penyakit"}
                />
                <TextareaField
                  id={"deskripsi"}
                  name={"deskripsi"}
                  placeholder={"Masukan deskrispsi penyakit"}
                  label={"Deskripsi Penyakit"}
                  value={deskripsiPenyakit}
                  validations={validations}
                  required
                  onChange={(e) => {
                    setDeskripsiPenyakit(e.target.value);
                  }}
                />
              </div>
              <button
                className="bg-[#554F9B] rounded-lg w-full py-2 text-white"
                type="button" // Pastikan ini adalah "button"
                onClick={onSubmit} // Gunakan onClick bukan onSubmit
              >
                Tambah
              </button>
            </div>
            <div className="w-full space-y-6 bg-white shadow-main p-6 rounded-xl dark:border-gray-700 col-span-2 overflow-x-auto">
              <div className="flex justify-between items-center border-b pb-2">
                <h1 className="text-xl font-semibold">Schema</h1>
                <button
                  type="button"
                  onClick={addRow}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white shadow-main rounded-lg"
                >
                  <RiAddLine className="mr-2" />
                  Add column
                </button>
              </div>

              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase">
                    <tr>
                      <th scope="col" className="w-4">
                        Visible
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Column
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Type
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Format
                      </th>
                      <th scope="col" className="w-4">
                        Multiple
                      </th>
                      <th scope="col" className="px-3 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => {
                      // Cari error untuk baris ini berdasarkan indeks
                      const rowErrors = rowValidation.find(
                        (validation) => validation.index === index
                      );

                      return (
                        <tr
                          key={index}
                          className="bg-white hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <td className="w-4 p-4">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                checked={row.visible === 1}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                onChange={(e) =>
                                  setRows((prevRows) =>
                                    prevRows.map((row, i) =>
                                      i === index
                                        ? {
                                            ...row,
                                            visible: e.target.checked ? 1 : 0,
                                          }
                                        : row
                                    )
                                  )
                                }
                              />
                            </div>
                          </td>
                          <td className="px-3 py-4 min-w-[172px]">
                            <div className="input-container flex items-center">
                              <InputField
                                id={"column"}
                                name={"column"}
                                placeholder={"Masukan column"}
                                type={"text"}
                                value={row.column}
                                onChange={(e) =>
                                  setRows((prevRows) =>
                                    prevRows.map((row, i) =>
                                      i === index
                                        ? { ...row, column: e.target.value }
                                        : row
                                    )
                                  )
                                }
                              />
                              {/* Tampilkan ikon error jika ada error */}
                              {rowErrors &&
                                rowErrors.errors.some(
                                  (error) => error.path === "column"
                                ) && (
                                  <button
                                    onClick={() =>
                                      setModalData({
                                        isOpen: true,
                                        errors: rowErrors.errors.filter(
                                          (error) => error.path === "column"
                                        ),
                                      })
                                    }
                                    className="ml-2 text-red-500"
                                    title="Klik untuk melihat error"
                                  >
                                    ⚠️
                                  </button>
                                )}
                            </div>
                          </td>
                          <td className="px-3 py-4 min-w-[172px]">
                            <div className="input-container flex items-center">
                              <InputSelect
                                id={"type"}
                                name={"type"}
                                type={"text"}
                                value={row.type}
                                onChange={(e) =>
                                  setRows((prevRows) =>
                                    prevRows.map((row, i) =>
                                      i === index
                                        ? { ...row, type: e.target.value }
                                        : row
                                    )
                                  )
                                }
                              >
                                <option value="" disabled hidden>
                                  Type
                                </option>
                                <option value="string">string</option>
                                <option value="text">text</option>
                                <option value="integer">integer</option>
                                <option value="decimal">decimal</option>
                                <option value="float">float</option>
                                <option value="datetime">datetime</option>
                                <option value="date">date</option>
                                <option value="time">time</option>
                                <option value="file">file</option>
                                <option value="boolean">boolean</option>
                                <option value="email">email</option>
                                <option value="phone">phone</option>
                              </InputSelect>
                              {/* Tampilkan ikon error jika ada error */}
                              {rowErrors &&
                                rowErrors.errors.some(
                                  (error) => error.path === "type"
                                ) && (
                                  <button
                                    onClick={() =>
                                      setModalData({
                                        isOpen: true,
                                        errors: rowErrors.errors.filter(
                                          (error) => error.path === "type"
                                        ),
                                      })
                                    }
                                    className="ml-2 text-red-500"
                                    title="Klik untuk melihat error"
                                  >
                                    ⚠️
                                  </button>
                                )}
                            </div>
                          </td>
                          <td className="px-3 py-4 min-w-[172px]">
                            <div className="input-container flex items-center">
                              <InputSelect
                                id={"format"}
                                name={"format"}
                                type={"text"}
                                disabled={row.type !== "file"}
                                value={row.format}
                                onChange={(e) =>
                                  setRows((prevRows) =>
                                    prevRows.map((row, i) =>
                                      i === index
                                        ? { ...row, format: e.target.value }
                                        : row
                                    )
                                  )
                                }
                              >
                                <option value="" disabled hidden>
                                  Format
                                </option>

                                <option value="image">image</option>
                                <option value="audio">audio</option>
                                <option value="video">video</option>
                                <option value="spreadsheet">spreadsheet</option>
                                <option value="compressed-document">
                                  compressed-document
                                </option>
                                <option value="text-document">
                                  text-document
                                </option>
                              </InputSelect>
                              {/* Tampilkan error untuk input "format" */}
                              {rowErrors &&
                                rowErrors.errors.some(
                                  (error) => error.path === "format"
                                ) && (
                                  <button
                                    onClick={() =>
                                      setModalData({
                                        isOpen: true,
                                        errors: rowErrors.errors.filter(
                                          (error) => error.path === "format"
                                        ),
                                      })
                                    }
                                    className="ml-2 text-red-500"
                                    title="Klik untuk melihat error"
                                  >
                                    ⚠️
                                  </button>
                                )}
                            </div>
                          </td>
                          <td className="w-4 p-4">
                            <div className="flex items-center">
                              <input
                                disabled={row.type !== "file"}
                                type="checkbox"
                                checked={row.multiple === 1}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                onChange={(e) =>
                                  setRows((prevRows) =>
                                    prevRows.map((row, i) =>
                                      i === index
                                        ? {
                                            ...row,
                                            multiple: e.target.checked ? 1 : 0,
                                          }
                                        : row
                                    )
                                  )
                                }
                              />
                            </div>
                          </td>
                          <td className="flex items-center px-6 py-4">
                            <button
                              onClick={() =>
                                setRows(rows.filter((_, i) => i !== index))
                              }
                              className="bg-red-500 px-3 py-1 text-white rounded-lg"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
};

export default TambahPenyakitPage;
