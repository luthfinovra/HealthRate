import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import request from "../../utils/request";
import toast from "react-hot-toast";
import { z } from "zod";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import InputField from "../../components/inputField/InputField";
import TextareaField from "../../components/inputField/TextareaField";
import Loading from "../../components/loading/Loading";

const MAX_FILE_SIZE = 2000000; // 2MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  name: z.string().min(1, "Nama penyakit tidak boleh kosong").optional(),
  deskripsi: z.string().min(1, "Deskripsi tidak boleh kosong").optional(),
  cover_page: z
    .any()
    .refine(
      (file) => file?.size <= MAX_FILE_SIZE,
      `The maximum file size that can be uploaded is 2MB`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    )
    .optional(),
});

const EditPenyakitPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [namaPenyakit, setNamaPenyakit] = useState("");
  const [cover, setCover] = useState("");
  const [coverUrl, setCoverUrl] = useState();
  const [deskripsiPenyakit, setDeskripsiPenyakit] = useState("");
  const [validations, setValidations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDetailDiseases = useCallback(async () => {
    setLoading(true);
    request
      .get(`/diseases/${id}`)
      .then(function (response) {
        setNamaPenyakit(response.data.data.name);
        setCoverUrl(response?.data?.data?.cover_page);
        setDeskripsiPenyakit(response?.data?.data?.deskripsi);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  }, [id]); // Add role to dependencies

  useEffect(() => {
    fetchDetailDiseases();
  }, [fetchDetailDiseases]);

  const handleValidationErrors = (errors) => {
    setValidations(
      errors.map((err) => ({ name: err.path[0], message: err.message }))
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValidations([]);
    setLoading(true);
    toast.loading("Saving data...");

    const dataValidation = {
      name: namaPenyakit,
      deskripsi: deskripsiPenyakit,
      ...(cover !== "" && {
        cover_page: cover,
      }),
    };

    const validation = formSchema.safeParse(dataValidation);

    if (!validation.success) {
      // Tangani error validasi dari Zod
      handleValidationErrors(validation.error.errors);
      toast.dismiss();
      toast.error("Invalid Input");
      setLoading(false);
      return;
    }

    const data = new FormData(); // FormData
    data.append("name", namaPenyakit);
    data.append("deskripsi", deskripsiPenyakit);
    if (cover !== "") {
      data.append("cover_page", cover);
    }

    // Mengirimkan request POST dengan header dinamis
    request
      .post(`/diseases/${id}?_method=PUT`, data)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          toast.dismiss();
          toast.success(response.data.message);
          navigate("/admin/penyakit");
          setLoading(false);
        } else {
          toast.dismiss();
          toast.error("Invalid Input");
          setLoading(false);
        }
      })
      .catch(function (error) {
        setValidations(
          Object.entries(error?.response?.data?.data || {}).map(
            ([name, message]) => ({
              name,
              message,
            })
          )
        );
        toast.dismiss();
        toast.error("Invalid Input");
        setLoading(false);
      });
  };

  return (
    <LayoutAdmin>
      <div className="space-y-4">
        <div className="space-y-1 mb-5">
          <h1 className="font-semibold text-5xl">Edit Penyakit</h1>
        </div>

        <div className=" space-y-9 grid md:grid-cols-2">
          <div className=" w-full space-y-6 md:max-w-[500px]  bg-white shadow-main p-6 rounded-xl dark:border-gray-700 flex flex-col justify-between">
            {loading ? (
              <Loading />
            ) : (
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                <InputField
                  id={"cover_page"}
                  name={"cover_page"}
                  type={"file"}
                  label={"Cover Page"}
                  imageOnly={true}
                  previewImage={coverUrl}
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

                <div className="">
                  <button
                    className="bg-[#554F9B] rounded-lg w-full py-2 text-white"
                    type="submit"
                  >
                    Edit
                  </button>
                </div>
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
    </LayoutAdmin>
  );
};

export default EditPenyakitPage;
