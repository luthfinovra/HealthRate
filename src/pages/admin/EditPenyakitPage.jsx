import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import request from "../../utils/request";
import toast from "react-hot-toast";
import { z } from "zod";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import InputField from "../../components/inputField/InputField";
import InputSelect from "../../components/inputField/InputSelect";
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
  name: z.string().min(1, "Nama penyakit tidak boleh kosong"),
  deskripsi: z.string().min(1, "Deskripsi tidak boleh kosong"),
  visibilitas: z.enum(['publik', 'privat']),
  cover_page: z
    .any()
    .refine(
      (file) => {
        if (typeof file === 'string' || !file) return true;
        return file.size <= MAX_FILE_SIZE;
      },
      `The maximum file size that can be uploaded is 2MB`
    )
    .refine(
      (file) => {
        if (typeof file === 'string' || !file) return true;
        return ACCEPTED_IMAGE_TYPES.includes(file.type);
      },
      'Only .jpg, .jpeg, .png and .webp formats are supported'
    )
    .optional(),
});

const EditPenyakitPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [namaPenyakit, setNamaPenyakit] = useState("");
  const [cover, setCover] = useState(null);
  const [coverUrl, setCoverUrl] = useState();
  const [deskripsiPenyakit, setDeskripsiPenyakit] = useState("");
  const [visibilitas, setVisibilitas] = useState("publik");
  const [validations, setValidations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDetailDiseases = useCallback(async () => {
    setLoading(true);
    try {
      const response = await request.get(`/diseases/${id}`);
      const data = response.data.data;
      
      setNamaPenyakit(data.name);
      setCoverUrl(data.cover_page_url);
      setDeskripsiPenyakit(data.deskripsi);
      setVisibilitas(data.visibility || data.visibilitas || "publik");
        
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch disease details");
      if (error.response?.status === 404 || error.response?.status === 400) {
        navigate("*"); // Navigate to the Not Found page
      }
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    fetchDetailDiseases();
  }, [fetchDetailDiseases]);

  const handleValidationErrors = (errors) => {
    setValidations(
      errors.map((err) => ({ name: err.path[0], message: err.message }))
    );
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validation for file type
      if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
        setValidations([{ 
          name: 'cover_page', 
          message: 'Only .jpg, .jpeg, .png and .webp formats are supported' 
        }]);
        e.target.value = null;
        return;
      }

      // Validation for file size
      if (file.size > MAX_FILE_SIZE) {
        setValidations([{ 
          name: 'cover_page', 
          message: 'The maximum file size that can be uploaded is 2MB' 
        }]);
        e.target.value = null;
        return;
      }

      setCover(file);
      // Clear validation errors for cover_page
      setValidations(validations.filter(v => v.name !== 'cover_page'));
    }
  };

  const handleDeleteCover = () => {
    setCover(null);
    setCoverUrl(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setValidations([]);
    setLoading(true);
    toast.loading("Saving data...");

    const dataValidation = formSchema.safeParse({
      name: namaPenyakit,
      deskripsi: deskripsiPenyakit,
      visibilitas: visibilitas,
      cover_page: cover || coverUrl,
    });

    if (!dataValidation.success) {
      handleValidationErrors(dataValidation.error.errors);
      toast.dismiss();
      toast.error("Invalid Input");
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("name", namaPenyakit);
    data.append("deskripsi", deskripsiPenyakit);
    data.append("visibilitas", visibilitas);
    
    // Only append if new cover is selected
    if (cover) {
      data.append("cover_page", cover);
    }

    try {
      const response = await request.post(`/diseases/${id}?_method=PUT`, data);
      
      if (response.status === 200 || response.status === 201) {
        toast.dismiss();
        toast.success(response.data.message);
        navigate("/admin/penyakit");
      } else {
        throw new Error("Failed to save data");
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message || "Failed to update disease");
      if (error?.response?.data?.data) {
        setValidations(
          Object.entries(error.response.data.data).map(
            ([name, message]) => ({
              name,
              message,
            })
          )
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutAdmin>
      <div className="space-y-4">
        <div className="space-y-1 mb-5">
          <h1 className="font-semibold text-5xl">Edit Penyakit</h1>
        </div>

        <div className="space-y-9 grid md:grid-cols-2">
          <div className="w-full space-y-6 md:max-w-[500px] bg-white shadow-main p-6 rounded-xl flex flex-col justify-between">
            {loading ? (
              <Loading />
            ) : (
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                <InputField
                  id="cover_page"
                  name="cover_page"
                  type="file"
                  label="Cover Page"
                  imageOnly={true}
                  previewImage={coverUrl}
                  onChange={handleFileChange}
                  accept="image/*"
                  validations={validations}
                  value={cover}
                  handleDeleteLocalImage={handleDeleteCover}
                />
                <InputField
                  id="name"
                  name="name"
                  onChange={(e) => setNamaPenyakit(e.target.value)}
                  placeholder="Masukan nama penyakit"
                  type="text"
                  value={namaPenyakit}
                  validations={validations}
                  required
                  label="Nama Penyakit"
                />
                <InputSelect
                  id="visibilitas"
                  name="visibilitas"
                  label="Visibilitas"
                  value={visibilitas}
                  validations={validations}
                  onChange={(e) => setVisibilitas(e.target.value)}
                >
                  <option value="publik">Publik</option>
                  <option value="privat">Privat</option>
                </InputSelect>
                <TextareaField
                  id="deskripsi"
                  name="deskripsi"
                  placeholder="Masukan deskrispsi penyakit"
                  label="Deskripsi Penyakit"
                  value={deskripsiPenyakit}
                  validations={validations}
                  required
                  onChange={(e) => setDeskripsiPenyakit(e.target.value)}
                />

                <div>
                  <button
                    className={`w-full text-white bg-[#554F9B] hover:bg-[#4D4788] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                      loading ? 'cursor-not-allowed opacity-70' : ''
                    }`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          ></path>
                        </svg>
                        <span className="ml-2">Memproses...</span>
                      </div>
                    ) : (
                      'Edit'
                    )}
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