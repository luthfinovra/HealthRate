import React, { useCallback, useEffect, useState } from "react";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import InputField from "../../components/inputField/InputField";

import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import InputSelect from "../../components/inputField/InputSelect";
import request from "../../utils/request";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { z } from "zod";
import Loading from "../../components/loading/Loading";

const formSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Nama harus memiliki minimal 3 karakter." })
      .max(100, { message: "Nama tidak boleh lebih dari 100 karakter." })
      .regex(/^[a-zA-Z\s]*$/, {
        message: "Nama hanya boleh berisi huruf dan spasi.",
      }),

    email: z
      .string()
      .email({ message: "Masukkan alamat email yang valid." })
      .max(100, { message: "Email tidak boleh lebih dari 100 karakter." }),

    role: z.string().optional(),

    disease_id: z
      .string()
      .refine(
        (val, ctx) =>
          ctx?.parent?.role !== "operator" || (val && val.trim() !== ""),
        { message: "Disease ID wajib jika peran adalah operator." }
      )
      .optional(),

    institution: z.string().optional(),
    gender: z.string().optional(),

    phone_number: z.string().optional(),

    password: z
      .string()
      .min(6, { message: "Kata sandi harus memiliki minimal 6 karakter." })
      .max(100, { message: "Kata sandi tidak boleh lebih dari 100 karakter." })
      .regex(/[A-Z]/, {
        message: "Kata sandi harus mengandung minimal 1 huruf kapital.",
      })
      .regex(/[a-z]/, {
        message: "Kata sandi harus mengandung minimal 1 huruf kecil.",
      })
      .regex(/[0-9]/, {
        message: "Kata sandi harus mengandung minimal 1 angka.",
      })
      .regex(/[@$!%*?&#]/, {
        message: "Kata sandi harus mengandung minimal 1 karakter khusus.",
      })
      .optional(),

    password_confirmation: z.string().optional(),
  })
  .refine(
    (data) =>
      data.role !== "peneliti" || ["male", "female"].includes(data.gender),
    {
      message:
        "Gender wajib dan harus 'male' atau 'female' jika peran adalah peneliti.",
      path: ["gender"],
    }
  )
  .refine((data) => data.password === data.password_confirmation, {
    message: "Konfirmasi kata sandi harus sama dengan kata sandi.",
    path: ["password_confirmation"],
  })
  .refine(
    (data) => data.role !== "peneliti" || /^\d{10,15}$/.test(data.phone_number),
    {
      message:
        "Nomor telepon wajib dan harus berupa angka 10-15 digit jika peran adalah peneliti.",
      path: ["phone_number"],
    }
  );

const EditPenggunaPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [typeInput, setTypeInput] = useState(true);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [penyakitDatas, setPenyakitDatas] = useState([]);
  const [detailUser, setDetailUser] = useState([]);
  const [validations, setValidations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDiseases = useCallback(async () => {
    setLoading(true);
    request
      .get(`/diseases`)
      .then(function (response) {
        setPenyakitDatas(response.data.data.diseases);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  }, []); // Add role to dependencies
  const fetchDetailUser = useCallback(async () => {
    setLoading(true);
    request
      .get(`/admin/users/${id}`)
      .then(function (response) {
        setDetailUser(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  }, [id]); // Add role to dependencies

  useEffect(() => {
    fetchDiseases();
    fetchDetailUser();
  }, [fetchDiseases, fetchDetailUser]);

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

    const data = {
      name: detailUser?.name,
      email: detailUser?.email,
      approval_status: detailUser?.approval_status,
      ...(detailUser?.role === "operator" && {
        disease_id: detailUser?.managed_diseases?.disease_id,
      }),
      ...(detailUser?.role === "peneliti" && {
        institution: detailUser?.institution,
        gender: detailUser?.gender,
        phone_number: detailUser?.phone_number,
      }),
      ...(password !== "" &&
        confirmPassword !== "" && {
          password: password,
          password_confirmation: confirmPassword,
        }),
    };

    const validation = formSchema.safeParse(data);

    if (!validation.success) {
      // Tangani error validasi dari Zod
      handleValidationErrors(validation.error.errors);
      toast.dismiss();
      toast.error("Invalid Input");
      setLoading(false);
      return;
    }

    const headers = {
      "Content-Type": "application/json",
    };

    // Mengirimkan request POST dengan header dinamis
    request
      .put(`admin/users/${id}`, data, headers)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          toast.dismiss();
          toast.success(response.data.message);
          navigate("/admin/users");
        } else {
          window.alert("Gagal login");
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
      });
  };

  const onDelete = async (e, id) => {
    e.preventDefault();
    setLoading(true);
    toast.loading("Deleting data...");

    request
      .delete(`/admin/users/${id}`)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          toast.dismiss();
          toast.success(response.data.message);
          navigate("/admin/users");
        } else {
          toast.dismiss();
          toast.error(response.data.message);
        }
      })
      .catch(function (error) {
        toast.dismiss();
        toast.error(error.data.message);
      });
  };

  return (
    <LayoutAdmin>
      <div className="space-y-4">
        <div className="space-y-1 mb-5">
          <h1 className="font-semibold text-5xl">Detail Data Pengguna</h1>
        </div>

        <div className=" space-y-9 grid md:grid-cols-2">
          <div className=" w-full space-y-6 md:max-w-[500px]  bg-white shadow-main p-6 rounded-xl flex flex-col justify-between">
            {loading ? (
              <Loading />
            ) : (
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                <InputField
                  id={"name"}
                  name={"name"}
                  onChange={(e) =>
                    setDetailUser((prev) => ({
                      ...prev,
                      name: e.target.value, // Memperbarui properti 'name' pada objek detailUser
                    }))
                  }
                  placeholder={"Input your name"}
                  type={"text"}
                  value={detailUser?.name}
                  label={"Name"}
                  validations={validations}
                />
                <InputField
                  id={"email"}
                  name={"email"}
                  onChange={(e) =>
                    setDetailUser((prev) => ({
                      ...prev,
                      email: e.target.value, // Memperbarui properti 'name' pada objek detailUser
                    }))
                  }
                  placeholder={"user@gmail.com"}
                  type={"email"}
                  value={detailUser?.email}
                  label={"Your email"}
                  validations={validations}
                />
                <InputField
                  id={"password"}
                  name={"password"}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  placeholder={"••••••••"}
                  type={typeInput ? "password" : "text"}
                  value={password}
                  icon={
                    typeInput ? (
                      <IoMdEyeOff
                        className="text-xl"
                        onClick={() => {
                          setTypeInput(!typeInput);
                        }}
                      />
                    ) : (
                      <IoMdEye
                        className="text-xl"
                        onClick={() => {
                          setTypeInput(!typeInput);
                        }}
                      />
                    )
                  }
                  label={"Password"}
                  validations={validations}
                />
                <InputField
                  id={"password_confirmation"}
                  name={"password_confirmation"}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                  placeholder={"••••••••"}
                  type={typeInput ? "password" : "text"}
                  value={confirmPassword}
                  icon={
                    typeInput ? (
                      <IoMdEyeOff
                        className="text-xl"
                        onClick={() => {
                          setTypeInput(!typeInput);
                        }}
                      />
                    ) : (
                      <IoMdEye
                        className="text-xl"
                        onClick={() => {
                          setTypeInput(!typeInput);
                        }}
                      />
                    )
                  }
                  label={"Confirm password"}
                  validations={validations}
                />
                <InputField
                  id={"role"}
                  name={"role"}
                  type={"text"}
                  value={detailUser?.role}
                  label={"Role"}
                  disabled
                />
                {/* <InputField
                  id={'status'}
                  name={'status'}
                  type={'text'}
                  value={detailUser?.approval_status}
                  label={'Status'}
                /> */}
                <InputSelect
                  id="status"
                  name="approval_status"
                  placeholder="Pilih status"
                  label="Status"
                  value={detailUser?.approval_status || ""}
                  validations={validations}
                  onChange={(e) =>
                    setDetailUser((prev) => ({
                      ...prev,
                      approval_status: e.target.value,
                    }))
                  }
                >
                  <option value="" disabled hidden>
                    Pilih status
                  </option>
                  <option value="rejected">Tolak</option>
                  <option value="approved">Terima</option>
                  <option value="pending">Menunggu</option>
                </InputSelect>

                {detailUser?.role === "operator" && (
                  <InputSelect
                    id="disease_id"
                    name="disease_id"
                    type="text"
                    placeholder="Pilih penyakit"
                    label="Penyakit"
                    value={detailUser?.managed_diseases?.disease_id || ""}
                    validations={validations}
                    onChange={(e) =>
                      setDetailUser((prev) => ({
                        ...prev,
                        managed_diseases: {
                          ...prev.managed_diseases, // Pastikan properti lain di dalam managed_diseases tidak hilang
                          disease_id: e.target.value, // Perbarui hanya disease_id
                        },
                      }))
                    }
                  >
                    <option value="" disabled hidden>
                      Pilih Penyakit
                    </option>
                    {penyakitDatas &&
                      penyakitDatas.map((data, index) => (
                        <option value={data.id} key={index}>
                          {data.name}
                        </option>
                      ))}
                  </InputSelect>
                )}

                {detailUser?.role === "peneliti" && (
                  <>
                    <InputField
                      id={"phone_number"}
                      name={"phone_number"}
                      onChange={(e) =>
                        setDetailUser((prev) => ({
                          ...prev,
                          phone_number: e.target.value, // Memperbarui properti 'name' pada objek detailUser
                        }))
                      }
                      placeholder={"masukan nomor telepon"}
                      type={"text"}
                      value={detailUser?.phone_number}
                      label={"Nomor telepon"}
                      validations={validations}
                    />
                    <InputSelect
                      id={"gender"}
                      name={"gender"}
                      type={"text"}
                      label={"Jenis Kelamin"}
                      value={detailUser?.gender}
                      validations={validations}
                      onChange={(e) =>
                        setDetailUser((prev) => ({
                          ...prev,
                          gender: e.target.value, // Memperbarui properti 'name' pada objek detailUser
                        }))
                      }
                    >
                      <option value="" disabled selected hidden>
                        Pilih jenis kelamin
                      </option>
                      <option value={"male"}>Pria</option>
                      <option value={"female"}>Perempuan</option>
                    </InputSelect>
                    <InputField
                      id={"institution"}
                      name={"institution"}
                      onChange={(e) =>
                        setDetailUser((prev) => ({
                          ...prev,
                          institution: e.target.value, // Memperbarui properti 'name' pada objek detailUser
                        }))
                      }
                      placeholder={"masukan institution"}
                      type={"text"}
                      value={detailUser?.institution}
                      label={"Institution"}
                      validations={validations}
                    />
                  </>
                )}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className="bg-[#FACC2C] rounded-lg w-full py-2 text-white"
                    type="submit"
                  >
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="m-auto"
                    >
                      <g clipPath="url(#clip0_376_202)">
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
                  <button
                    className="bg-[#FF5959] rounded-lg w-full py-2 text-white"
                    type="button"
                    onClick={(e) => onDelete(e, detailUser?.id)}
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="m-auto"
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

export default EditPenggunaPage;
