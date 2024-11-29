import React, { useEffect, useState } from "react";
import NavbarResearcher from "../components/navbar/navbarResearcher";
import InputField from "../components/inputField/InputField";
import { useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import request from "../utils/request";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const Login = () => {
  const navigate = useNavigate();

  const [typeInput, setTypeInput] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [status, setStatus] = useState("");
  const [validations, setValidations] = useState([]);
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

  const handleChangeRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClickType = () => {
    setTypeInput(!typeInput);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true

    const isJson = true;
    const headers = {
      "Content-Type": isJson ? "application/json" : "multipart/form-data",
    };
    const data = isJson ? { email, password } : new FormData();

    if (!isJson) {
      data.append("email", email);
      data.append("password", password);
    }

    request
      .post("/auth/login", data, headers)
      .then(function (response) {
        setIsLoading(false); // Stop loading

        if (response?.status === 200 || response?.status === 201) {
          // Handle login logic
          if (rememberMe) {
            localStorage.setItem("email", email);
          } else {
            localStorage.removeItem("email");
          }
          Cookies.set("token", response?.data?.data?.token);
          localStorage.setItem("role", response?.data?.data?.role);

          if (response?.data?.data?.role === "operator") {
            localStorage.setItem(
              "disease_id",
              response?.data?.data?.disease_id
            );
            toast.success(response?.data?.message);
            navigate(
              `/operator/record-penyakit/${response?.data?.data?.disease_id}`
            );
          } else if (response?.data?.data?.role === "peneliti") {
            if (
              response?.data?.data?.approval_status === "pending" ||
              response?.data?.data?.approval_status === "rejected"
            ) {
              toast.error("Gagal Login");
              setStatus(response?.data?.data?.approval_status);
              setIsModalOpen(true);
              Cookies.remove("token");
            } else {
              toast.success(response?.data?.message);
              navigate("/peneliti/penyakit");
            }
          } else if (response?.data?.data?.role === "admin") {
            toast.success(response?.data?.message);
            navigate("/admin/dashboard");
          }
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
        toast.error("Email atau password yang Anda masukkan salah.");
      });
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true); // Secara default, centang checkbox jika data ada
    }
  }, []);

  return (
    <>
      {isModalOpen && status && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {status === "pending" && (
            <div className="bg-white rounded-lg p-6 w-96">
              <h2 className="text-xl font-bold mb-4">
                Akun Anda Dalam Proses Verifikasi
              </h2>
              <p className="text-gray-700 mb-6">
                Akun Anda sedang dalam proses pengecekan oleh admin. Silakan
                tunggu beberapa saat. Anda akan diberi tahu jika akun sudah
                aktif.
              </p>
              <button
                onClick={handleCloseModal}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                OK
              </button>
            </div>
          )}
          {status === "rejected" && (
            <div className="bg-white rounded-lg p-6 w-96">
              <h2 className="text-xl font-bold mb-4 text-red-500">
                Verifikasi Akun Ditolak
              </h2>
              <p className="text-gray-700 mb-6">
                Akun Anda tidak dapat diverifikasi. Silakan periksa kembali data
                yang Anda berikan dan pastikan sudah sesuai dengan persyaratan.
                Anda dapat mencoba mengajukan verifikasi ulang melalui menu
                pengaturan akun.
              </p>
              <button
                onClick={handleCloseModal}
                className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
              >
                Coba Lagi
              </button>
            </div>
          )}
        </div>
      )}

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
                database, untuk membantu para peneliti dalam penilaian
                kesehatan.
              </p>
            </div>
          </div>

          <div className="w-full bg-white xl:p-0 flex justify-center items-center">
            <div className="p-6  sm:p-8">
              <div className="">
                <h1 className="text-[24px] font-semibold">Masuk</h1>
                <p>
                  Belum punya akun?{" "}
                  <a href="/register" className="text-[#554F9B]">
                    Daftar Sekarang
                  </a>
                </p>
              </div>

              {/* Login Form */}
              {/* The form code remains unchanged */}
              <form onSubmit={onSubmit} className="mt-[35px]">
                <div className="space-y-4 md:space-y-6">
                  <InputField
                    id={"email"}
                    name={"email"}
                    onChange={handleChangeEmail}
                    placeholder={"user@gmail.com"}
                    type={"email"}
                    value={email}
                    required
                    label={"Email"}
                    validations={validations}
                  />
                  <InputField
                    id={"password"}
                    name={"password"}
                    onChange={handleChangePassword}
                    placeholder={"••••••••"}
                    type={typeInput ? "password" : "text"}
                    value={password}
                    required
                    icon={
                      typeInput ? (
                        <IoMdEyeOff
                          className="text-xl"
                          onClick={handleClickType}
                        />
                      ) : (
                        <IoMdEye
                          className="text-xl"
                          onClick={handleClickType}
                        />
                      )
                    }
                    label={"Kata Sandi"}
                    validations={validations}
                  />
                  <div className="">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={rememberMe}
                        onChange={handleChangeRememberMe}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      <span className="ms-3 text-sm text-gray-900">
                        Ingat saya
                      </span>
                    </label>
                  </div>
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
                      "Login"
                    )}
                  </button>

                  <hr />
                  <div className="flex flex-col items-center justify-center">
                    <p>Terdapat kendala masuk? Silahkan hubungi kami</p>
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
    </>
  );
};
