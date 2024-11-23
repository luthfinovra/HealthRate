import React, { useState } from 'react';
import NavbarResearcher from '../components/navbar/navbarResearcher';
import { MdLogin } from 'react-icons/md';
import InputField from '../components/inputField/InputField';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import TextareaField from '../components/inputField/TextareaField';
import { z } from 'zod';
import toast from 'react-hot-toast';
import request from '../utils/request';
import { useNavigate } from 'react-router-dom';
import InputSelect from '../components/inputField/InputSelect';

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

    role: z.string().optional(),

    disease_id: z
      .string()
      .refine(
        (val, ctx) =>
          ctx?.parent?.role !== 'operator' || (val && val.trim() !== ''),
        { message: 'Disease ID wajib jika peran adalah operator.' }
      )
      .optional(),

    institution: z.string().optional(),
    gender: z.string().optional(),

    phone_number: z.string().optional(),

    tujuan_permohonan: z.string().optional(),

    password: z
      .string()
      .min(6, { message: 'Kata sandi harus memiliki minimal 6 karakter.' })
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
      })
      .optional(),

    password_confirmation: z.string().optional(),
  })
  .refine(
    (data) =>
      data.role !== 'peneliti' || ['male', 'female'].includes(data.gender),
    {
      message:
        "Gender wajib dan harus 'male' atau 'female' jika peran adalah peneliti.",
      path: ['gender'],
    }
  )
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Konfirmasi kata sandi harus sama dengan kata sandi.',
    path: ['password_confirmation'],
  })
  .refine(
    (data) => data.role !== 'peneliti' || /^\d{10,15}$/.test(data.phone_number),
    {
      message:
        'Nomor telepon wajib dan harus berupa angka 10-15 digit jika peran adalah peneliti.',
      path: ['phone_number'],
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

  const handleValidationErrors = (errors) => {
    setValidations(
      errors.map((err) => ({ name: err.path[0], message: err.message }))
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValidations([]);
    toast.loading('Saving data...');

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
      toast.error('Invalid Input');
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
    };

    // Mengirimkan request POST dengan header dinamis
    request
      .post(`/auth/register`, data, headers)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          toast.dismiss();
          toast.success(response.data.message);
          navigate('/');
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
      });
  };
  return (
    <section className="bg-[#444444] h-screen">
      {/* Navbar */}
      <NavbarResearcher className="fixed top-0 left-0 right-0 z-50" />

      {/* Content */}
      <div className="pt-24 px-3 md:grid grid-cols-2 gap-5 ">
        <div className="hidden md:block">
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
          <div className="w-full bg-white rounded-3xl shadow max-w-md  xl:p-0 ">
            <div className="p-6 space-y-4 sm:p-8">
              <div className="bg-[#D3D3EE] flex justify-center items-center rounded-3xl p-3 mx-auto w-[fit-content]">
                <MdLogin className="text-[50px]" />
              </div>
              <div className="text-center max-w-xs m-auto">
                <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
                  Register for access Data
                </h1>
                <p>
                  Know Your HeartRate by Entering Your HeartRate Into The
                  Application
                </p>
              </div>
              {/* Login Form */}
              {/* The form code remains unchanged */}
              <form
                className="space-y-4 md:space-y-6 max-h-[40vh] overflow-x-auto"
                onSubmit={onSubmit}
              >
                <InputField
                  id={'name'}
                  name={'name'}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  placeholder={'Masukan Nama...'}
                  type={'text'}
                  value={name}
                  required
                  label={'Name'}
                  validations={validations}
                />
                <InputSelect
                  id={'gender'}
                  name={'gender'}
                  type={'text'}
                  label={'Jenis Kelamin'}
                  value={gender}
                  validations={validations}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Pilih jenis kelamin
                  </option>
                  <option value={'male'}>Pria</option>
                  <option value={'female'}>Perempuan</option>
                </InputSelect>
                <InputField
                  id={'email'}
                  name={'email'}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  placeholder={'user@gmail.com'}
                  type={'email'}
                  value={email}
                  required
                  label={'Your email'}
                  validations={validations}
                />

                <div className="grid grid-cols-2 gap-3">
                  <InputField
                    id={'institution'}
                    name={'institution'}
                    onChange={(event) => {
                      setInstitution(event.target.value);
                    }}
                    placeholder={'Enter your Institusi'}
                    type={'text'}
                    value={institution}
                    required
                    label={'Institusi'}
                    validations={validations}
                  />
                  <InputField
                    id={'phoneNumber'}
                    name={'phoneNumber'}
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                    placeholder={'Enter your phone number'}
                    type={'text'}
                    value={phoneNumber}
                    required
                    label={'Phone number'}
                    validations={validations}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
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
                    validations={validations}
                  />
                  <InputField
                    id={'confirmPassword'}
                    name={'confirmPassword'}
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                    }}
                    placeholder={'••••••••'}
                    type={typeInput ? 'password' : 'text'}
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
                    label={'Confirm password'}
                    validations={validations}
                  />
                </div>
                <TextareaField
                  id={'tujuan'}
                  name={'tujuan'}
                  placeholder={'Type your tujuan in here...'}
                  label={'tujuan'}
                  value={tujuanPermohonan}
                  required
                  onChange={(e) => {
                    setTujuanPermohonan(e.target.value);
                  }}
                  validations={validations}
                />

                <button
                  type="submit"
                  className="w-full text-black bg-[#D3D3EE] hover:bg-[#c5c5ec] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Daftar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
