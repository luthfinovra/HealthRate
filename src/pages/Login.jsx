import React, { useState } from 'react';
import NavbarResearcher from '../components/navbar/navbarResearcher';
import { MdLogin } from 'react-icons/md';
import InputField from '../components/inputField/InputField';
import { useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import request from '../utils/request';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

export const Login = () => {
  const navigate = useNavigate();

  const [typeInput, setTypeInput] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

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

    const isJson = true; // Ganti sesuai kebutuhan (true untuk JSON, false untuk FormData)

    const headers = {
      'Content-Type': isJson ? 'application/json' : 'multipart/form-data',
    };

    // Data yang dikirimkan
    const data = isJson
      ? { email, password } // JSON
      : new FormData(); // FormData

    if (!isJson) {
      data.append('email', email);
      data.append('password', password);
    }

    // Mengirimkan request POST dengan header dinamis
    request
      .post('/auth/login', data, headers)
      .then(function (response) {
        console.log(response);
        if (response?.status === 200 || response?.status === 201) {
          Cookies.set('token', response?.data?.data?.token);
          localStorage.setItem('role', response?.data?.data?.role);

          if (response?.data?.data?.role === 'operator') {
            toast.dismiss();
            toast.success(response?.data?.message);
            navigate(
              `/operator/record-penyakit/${response?.data?.data?.disease_id}`
            );
          } else if (response?.data?.data?.role === 'peneliti') {
            if (response?.data?.data?.approval_status === 'pending') {
              toast.dismiss();
              toast.error('Gagal Login');
              setIsModalOpen(true); // Tampilkan modal
              Cookies.remove('token'); // Hapus token jika sudah disimpan
            } else {
              toast.dismiss();
              toast.success(response?.data?.message);
              navigate('/peneliti/penyakit');
            }
          } else if (response?.data?.data?.role === 'admin') {
            toast.dismiss();
            toast.success(response?.data?.message);
            navigate('/admin/dashboard');
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">
              Akun Anda Dalam Proses Verifikasi
            </h2>
            <p className="text-gray-700 mb-6">
              Akun Anda sedang dalam proses pengecekan oleh admin. Silakan
              tunggu beberapa saat. Anda akan diberi tahu jika akun sudah aktif.
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
      <section className="bg-[#444444] h-screen">
        {/* Navbar */}
        <NavbarResearcher className="fixed top-0 left-0 right-0 z-50" />

        {/* Content */}
        <div className="pt-24 px-3 grid grid-cols-2 gap-5">
          <div className="">
            <div className="grid grid-cols-3 gap-5">
              {/* Images */}
              {/* The image grid code remains unchanged */}
              <div className="relative w-full h-[260px]  flex-shrink-0">
                <img
                  width={0}
                  height={0}
                  loading="lazy"
                  alt="main-product-img"
                  src={'images/decor1.png'}
                  className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                />
              </div>
              <div className="relative w-full h-[260px]  flex-shrink-0">
                <img
                  width={0}
                  height={0}
                  loading="lazy"
                  alt="main-product-img"
                  src={'images/decor2.png'}
                  className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                />
              </div>
              <div className="relative w-full h-[260px]  flex-shrink-0">
                <img
                  width={0}
                  height={0}
                  loading="lazy"
                  alt="main-product-img"
                  src={'images/decor3.png'}
                  className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                />
              </div>
              <div className="relative w-full h-[260px]  flex-shrink-0">
                <img
                  width={0}
                  height={0}
                  loading="lazy"
                  alt="main-product-img"
                  src={'images/decor4.png'}
                  className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                />
              </div>
              <div className="relative w-full h-[260px]  flex-shrink-0">
                <img
                  width={0}
                  height={0}
                  loading="lazy"
                  alt="main-product-img"
                  src={'images/decor5.png'}
                  className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                />
              </div>
              <div className="relative w-full h-[260px]  flex-shrink-0">
                <img
                  width={0}
                  height={0}
                  loading="lazy"
                  alt="main-product-img"
                  src={'images/decor6.png'}
                  className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                />
              </div>
              <div className="relative w-full h-[260px]  flex-shrink-0">
                <img
                  width={0}
                  height={0}
                  loading="lazy"
                  alt="main-product-img"
                  src={'images/decor7.png'}
                  className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                />
              </div>
              <div className="relative w-full h-[260px]  flex-shrink-0">
                <img
                  width={0}
                  height={0}
                  loading="lazy"
                  alt="main-product-img"
                  src={'images/decor8.png'}
                  className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                />
              </div>
              <div className="relative w-full h-[260px]  flex-shrink-0">
                <img
                  width={0}
                  height={0}
                  loading="lazy"
                  alt="main-product-img"
                  src={'images/decor9.png'}
                  className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-8 bg-[#DEDEDE] rounded-3xl">
            <div className="w-full bg-white rounded-3xl shadow max-w-md xl:p-0">
              <div className="p-6 space-y-4 sm:p-8">
                <div className="bg-[#D3D3EE] flex justify-center items-center rounded-3xl p-3 mx-auto w-[fit-content]">
                  <MdLogin className="text-[50px]" />
                </div>
                <div className="text-center max-w-xs m-auto">
                  <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
                    Login With Access Data
                  </h1>
                  <p>
                    Know Your HeartRate by Entering Your HeartRate Into The
                    Application
                  </p>
                </div>
                {/* Login Form */}
                {/* The form code remains unchanged */}
                <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                  <InputField
                    id={'email'}
                    name={'email'}
                    onChange={handleChangeEmail}
                    placeholder={'user@gmail.com'}
                    type={'email'}
                    value={email}
                    required
                    label={'Your email'}
                  />
                  <InputField
                    id={'password'}
                    name={'password'}
                    onChange={handleChangePassword}
                    placeholder={'••••••••'}
                    type={typeInput ? 'password' : 'text'}
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
                    label={'Password'}
                  />
                  <button
                    type="submit"
                    className="w-full text-black bg-[#D3D3EE] hover:bg-[#c5c5ec] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
