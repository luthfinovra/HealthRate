import React, { useState } from "react";
import NavbarResearcher from "../components/navbar/navbarResearcher";
import InputField from "../components/inputField/InputField";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import TextareaField from "../components/inputField/TextareaField";
import { z } from "zod";
import toast from "react-hot-toast";
import request from "../utils/request";
import { useNavigate } from "react-router-dom";
import InputSelect from "../components/inputField/InputSelect";

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

    phone_number: z
      .string()
      .regex(/^628[1-9][0-9]{6,11}$/, {
        message:
          "Nomor telepon harus dengan format 62 dan terdiri dari 10-15 digit.",
      })
      .optional(),

    tujuan_permohonan: z.string().optional(),

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

const Register = () => {
  const navigate = useNavigate();
  const [typeInput, setTypeInput] = useState(true);

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [institution, setInstitution] = useState();
  const [gender, setGender] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [tujuanPermohonan, setTujuanPermohonan] = useState();
  const [validations, setValidations] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "082132092648";
    const message = "Halo, saya mengalami kendala saat melakukan pendaftaran.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleGmailClick = () => {
    const email = "aryafirmansyah200404@gmail.com";
    const subject = "Kendala Pendaftaran";
    const body = "Halo, saya mengalami kendala saat melakukan pendaftaran.";
    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };

  const handleValidationErrors = (errors) => {
    setValidations(
      errors.map((err) => ({ name: err.path[0], message: err.message }))
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValidations([]);
    toast.loading("Saving data...");

    const data = {
      name: name,
      email: email,
      institution: institution,
      gender: gender,
      phone_number: phoneNumber,
      tujuan_permohonan: tujuanPermohonan,
      password: password,
      password_confirmation: confirmPassword,
    };

    const validation = formSchema.safeParse(data);

    if (!validation.success) {
      // Tangani error validasi dari Zod
      handleValidationErrors(validation.error.errors);
      toast.dismiss();
      toast.error("Invalid Input");
      return;
    }

    const headers = {
      "Content-Type": "application/json",
    };

    // Mengirimkan request POST dengan header dinamis
    request
      .post(`/auth/register`, data, headers)
      .then(function (response) {
        setIsLoading(false); // Stop loading
        if (response.status === 200 || response.status === 201) {
          toast.dismiss();
          toast.success(response.data.message);
          navigate("/");
        }
      })
      .catch(function (error) {
        setIsLoading(false); // Stop loading
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
  return (
    <section className="bg-[#444444] h-screen">
      {/* Navbar */}
      <NavbarResearcher className="fixed top-0 left-0 right-0 z-50" />

      {/* Content */}
      <div className="pt-24 grid grid-cols-1 md:grid-cols-3  h-full">
        <div className="md:col-span-2 bg-[#3B3A48] h-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-[30px] text-white max-w-[807px] w-full m-auto py-10">
            <h1 className="text-2xl font-semibold  sm:text-3xl md:text-4xl lg:text-5xl">
              Health Care
            </h1>
            <h1 className=" text-3xl sm:text-4xl md:text-5xl font-semibold ">
              Database Penyakit dengan Data yang Valid
            </h1>
            <p className="text-xl sm:text-lg md:text-xl ">
              Health Care adalah platform kesehatan yang menyediakan akses
              database dari berbagai penyakit dengan data yang valid. Health
              Care menawarkan data-data dari berbagai penyakit yang ada dalam
              database, untuk membantu para peneliti dalam penilaian kesehatan.
            </p>
          </div>
        </div>
        <div className="w-full bg-white xl:p-0 flex justify-center items-center">
          <div className="p-6  sm:p-8">
            <div className="">
              <h1 className="text-[24px] font-semibold">Daftar</h1>
              <p>
                Sudah punya akun?{" "}
                <a href="/" className="text-[#554F9B]">
                  Login Sekarang
                </a>
              </p>
            </div>

            {/* Login Form */}
            {/* The form code remains unchanged */}
            <form onSubmit={onSubmit} className="mt-[35px]">
              <div
                className="space-y-4 md:space-y-6 overflow-y-auto max-h-[470px] pr-3 [&::-webkit-scrollbar]:w-2 
  [&::-webkit-scrollbar]:h-2 
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
"
              >
                <InputField
                  id={"name"}
                  name={"name"}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  placeholder={"Masukan Nama..."}
                  type={"text"}
                  value={name}
                  required
                  label={"Name"}
                  validations={validations}
                />
                <InputSelect
                  id={"gender"}
                  name={"gender"}
                  type={"text"}
                  label={"Jenis Kelamin"}
                  value={gender}
                  validations={validations}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Pilih jenis kelamin
                  </option>
                  <option value={"male"}>Pria</option>
                  <option value={"female"}>Perempuan</option>
                </InputSelect>
                <InputField
                  id={"email"}
                  name={"email"}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  placeholder={"user@gmail.com"}
                  type={"email"}
                  value={email}
                  required
                  label={"Your email"}
                  validations={validations}
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <InputField
                    id={"institution"}
                    name={"institution"}
                    onChange={(event) => {
                      setInstitution(event.target.value);
                    }}
                    placeholder={"Enter your Institusi"}
                    type={"text"}
                    value={institution}
                    required
                    label={"Institusi"}
                    validations={validations}
                  />
                  <InputField
                    id={"phone_number"}
                    name={"phone_number"}
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                    placeholder={"Enter your phone number"}
                    type={"text"}
                    value={phoneNumber}
                    required
                    label={"Phone number"}
                    validations={validations}
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <InputField
                    id={"password"}
                    name={"password"}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    placeholder={"••••••••"}
                    type={typeInput ? "password" : "text"}
                    value={password}
                    required
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
                    id={"confirmPassword"}
                    name={"confirmPassword"}
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                    }}
                    placeholder={"••••••••"}
                    type={typeInput ? "password" : "text"}
                    value={confirmPassword}
                    required
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
                </div>
                <TextareaField
                  id={"tujuan"}
                  name={"tujuan"}
                  placeholder={"Type your tujuan in here..."}
                  label={"tujuan"}
                  value={tujuanPermohonan}
                  required
                  onChange={(e) => {
                    setTujuanPermohonan(e.target.value);
                  }}
                  validations={validations}
                />
              </div>
              <div className="space-y-[30px]">
                <button
                  type="submit"
                  className={`mt-[50px] w-full text-white bg-[#554F9B] hover:bg-[#4D4788] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                    isLoading ? "cursor-not-allowed opacity-70" : ""
                  }`}
                  disabled={isLoading} // Disable button while loading
                >
                  {isLoading ? (
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
                    "Daftar"
                  )}
                </button>
                <hr />
                <div className="flex flex-col items-center justify-center">
                  <p>Terdapat kendala Daftar? Silahkan hubungi kami</p>
                  <div className="inline-flex items-center gap-3 mt-[10px]">
                    <div>
                      <img
                        loading="lazy"
                        src="vektor/logos_whatsapp-icon.png"
                        alt="WhatsApp"
                        className="cursor-pointer"
                        onClick={() => handleWhatsAppClick()}
                      />
                    </div>
                    <div>
                      <img
                        loading="lazy"
                        src="vektor/logos_google-gmail.png"
                        alt="Gmail"
                        className="cursor-pointer"
                        onClick={() => handleGmailClick()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
