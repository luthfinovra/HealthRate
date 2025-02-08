import React, { useCallback, useEffect, useState } from 'react';
import LayoutAdmin from '../../components/layout/LayoutAdmin';
import InputField from '../../components/inputField/InputField';

import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import InputSelect from '../../components/inputField/InputSelect';
import request from '../../utils/request';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { z } from 'zod';

const formSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Nama harus memiliki minimal 3 karakter.' })
      .max(100, { message: 'Nama tidak boleh lebih dari 100 karakter.' })
      .regex(/^[a-zA-Z\s]*$/, {
        message: 'Nama hanya boleh berisi huruf dan spasi.',
      }),

    email: z
      .string()
      .email({ message: 'Masukkan alamat email yang valid.' })
      .max(100, { message: 'Email tidak boleh lebih dari 100 karakter.' }),

    password: z
      .string()
      .min(8, { message: 'Kata sandi harus memiliki minimal 8 karakter.' })
      .max(100, { message: 'Kata sandi tidak boleh lebih dari 100 karakter.' })
      .regex(/[A-Z]/, {
        message: 'Kata sandi harus mengandung minimal 1 huruf kapital.',
      })
      .regex(/[a-z]/, {
        message: 'Kata sandi harus mengandung minimal 1 huruf kecil.',
      })
      .regex(/[0-9]/, {
        message: 'Kata sandi harus mengandung minimal 1 angka.',
      })
      .regex(/[@$!%*?&#]/, {
        message: 'Kata sandi harus mengandung minimal 1 karakter khusus.',
      }),

    password_confirmation: z
      .string()
      .min(8, {
        message: 'Konfirmasi kata sandi harus memiliki minimal 8 karakter.',
      })
      .max(100, {
        message: 'Konfirmasi kata sandi tidak boleh lebih dari 100 karakter.',
      }),

    role: z
      .string()
      .min(3, { message: 'Peran harus memiliki minimal 3 karakter.' })
      .max(100, { message: 'Peran tidak boleh lebih dari 100 karakter.' }),

    disease_id: z.string().optional(), // Opsional secara default
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Konfirmasi kata sandi harus sama dengan kata sandi',
    path: ['password_confirmation'],
  })
  .refine(
    (data) =>
      data.role !== 'operator' ||
      (data.disease_id && data.disease_id.trim() !== ''),
    {
      message: 'Disease ID wajib jika peran adalah operator.',
      path: ['disease_id'],
    }
  );

const TambahPenggunaPage = () => {
  const navigate = useNavigate();
  const [typeInput, setTypeInput] = useState(true);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [role, setRole] = useState();
  const [idPenyakit, setIdPenyakit] = useState();
  const [penyakitDatas, setPenyakitDatas] = useState([]);
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

  useEffect(() => {
    fetchDiseases();
  }, [fetchDiseases]);

  const handleValidationErrors = (errors) => {
    setValidations(
      errors.map((err) => ({ name: err.path[0], message: err.message }))
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValidations([]);
    setLoading(true);
    toast.loading('Saving data...');

    const validation = formSchema.safeParse({
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmPassword,
      role: role,
      disease_id: idPenyakit,
    });

    if (!validation.success) {
      // Tangani error validasi dari Zod
      handleValidationErrors(validation.error.errors);
      toast.dismiss();
      toast.error('Invalid Input');
      setLoading(false);
      return;
    }
    const headers = {
      'Content-Type': 'application/json',
    };

    const data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmPassword,
      role: role,
      ...(role === 'operator' && { disease_id: idPenyakit }),
    };
    request
      .post(`/admin/users`, data, headers)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          toast.dismiss();
          toast.success(response.data.message);
          navigate('/admin/users');
        } else {
          window.alert('Gagal login');
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
        toast.error('Invalid Input');
        setLoading(false);
      });
  };
  return (
    <LayoutAdmin>
      <div className="space-y-4">
        <div className="space-y-1 mb-5">
          <h1 className="font-semibold text-5xl">Tambah Data Pengguna</h1>
        </div>
        <p className=" max-w-3xl font-normal text-[14px] text-[#2D3748] leading-[150%]">
          Anda dapat menambahkan data dari pengguna secara langsung dengan
          memilih role apa yang akan ditambahkan.
        </p>
        <div className=" space-y-9 grid md:grid-cols-2">
          <div className=" w-full space-y-6 md:max-w-[500px]  bg-white shadow-main p-6 rounded-xl flex flex-col justify-between">
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
              <InputField
                id={'name'}
                name={'name'}
                onChange={(e) => setName(e.target.value)}
                placeholder={'Input your name'}
                type={'text'}
                value={name}
                required
                label={'Name'}
                validations={validations}
              />
              <InputField
                id={'email'}
                name={'email'}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={'user@gmail.com'}
                type={'email'}
                value={email}
                required
                label={'Your email'}
                validations={validations}
              />
              <InputField
                id={'password'}
                name={'password'}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder={'••••••••'}
                type={typeInput ? 'password' : 'text'}
                value={password}
                required
                validations={validations}
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
                label={'Password'}
              />
              <InputField
                id={'password_confirmation'}
                name={'password_confirmation'}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
                placeholder={'••••••••'}
                type={typeInput ? 'password' : 'text'}
                value={confirmPassword}
                required
                validations={validations}
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
                label={'Confirm password'}
              />
              <InputSelect
                id={'role'}
                name={'role'}
                type={'text'}
                placeholder={'e.g Active'}
                label={'Role'}
                value={role}
                validations={validations}
                required
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="" disabled selected hidden>
                  Pilih Role
                </option>
                <option value={'admin'}>Admin</option>
                <option value={'operator'}>Operator</option>
                <option value={'peneliti'}>Peneliti</option>
              </InputSelect>
              {/* Menampilkan input tambahan jika role adalah operator */}
              {role === 'operator' && (
                <InputSelect
                  id={'disease_id'}
                  name={'disease_id'}
                  type={'text'}
                  placeholder={'Pilih penyakit'}
                  label={'Penyakit'}
                  value={idPenyakit} // Anda mungkin perlu membuat state untuk ini
                  validations={validations}
                  required
                  onChange={(e) => {
                    setIdPenyakit(e.target.value); // Update state 'penyakit'
                  }}
                >
                  <option value="" disabled selected hidden>
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

              <button
                type="submit"
                className={`mt-[50px] w-full text-white bg-[#554F9B] hover:bg-[#4D4788] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                  loading ? 'cursor-not-allowed opacity-70' : ''
                }`}
                disabled={loading} // Disable button while loading
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
                  'Tambah'
                )}
              </button>
            </form>
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

export default TambahPenggunaPage;
