// import React from "react";
// import NavbarResearcher from "../components/navbar/navbarResearcher";
// import { MdLogin } from "react-icons/md";

// export const Register = () => {
//   return (
//     <section className="bg-[#444444] h-screen">
//       {/* Navbar */}
//       <NavbarResearcher className="fixed top-0 left-0 right-0 z-50" />

//       {/* Content */}
//       <div className="pt-24 px-3 grid grid-cols-2 gap-5">
//         <div className="">
//           <div className="grid grid-cols-3 gap-5">
//             {/* Images */}
//             {/* The image grid code remains unchanged */}
//             <div className="relative w-full h-[260px]  flex-shrink-0">
//               <img
//                 width={0}
//                 height={0}
//                 loading="lazy"
//                 alt="main-product-img"
//                 src={"images/decor1.png"}
//                 className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
//               />
//             </div>
//             <div className="relative w-full h-[260px]  flex-shrink-0">
//               <img
//                 width={0}
//                 height={0}
//                 loading="lazy"
//                 alt="main-product-img"
//                 src={"images/decor2.png"}
//                 className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
//               />
//             </div>
//             <div className="relative w-full h-[260px]  flex-shrink-0">
//               <img
//                 width={0}
//                 height={0}
//                 loading="lazy"
//                 alt="main-product-img"
//                 src={"images/decor3.png"}
//                 className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
//               />
//             </div>
//             <div className="relative w-full h-[260px]  flex-shrink-0">
//               <img
//                 width={0}
//                 height={0}
//                 loading="lazy"
//                 alt="main-product-img"
//                 src={"images/decor4.png"}
//                 className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
//               />
//             </div>
//             <div className="relative w-full h-[260px]  flex-shrink-0">
//               <img
//                 width={0}
//                 height={0}
//                 loading="lazy"
//                 alt="main-product-img"
//                 src={"images/decor5.png"}
//                 className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
//               />
//             </div>
//             <div className="relative w-full h-[260px]  flex-shrink-0">
//               <img
//                 width={0}
//                 height={0}
//                 loading="lazy"
//                 alt="main-product-img"
//                 src={"images/decor6.png"}
//                 className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
//               />
//             </div>
//             <div className="relative w-full h-[260px]  flex-shrink-0">
//               <img
//                 width={0}
//                 height={0}
//                 loading="lazy"
//                 alt="main-product-img"
//                 src={"images/decor7.png"}
//                 className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
//               />
//             </div>
//             <div className="relative w-full h-[260px]  flex-shrink-0">
//               <img
//                 width={0}
//                 height={0}
//                 loading="lazy"
//                 alt="main-product-img"
//                 src={"images/decor8.png"}
//                 className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
//               />
//             </div>
//             <div className="relative w-full h-[260px]  flex-shrink-0">
//               <img
//                 width={0}
//                 height={0}
//                 loading="lazy"
//                 alt="main-product-img"
//                 src={"images/decor9.png"}
//                 className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col items-center justify-center px-6 py-8 bg-[#DEDEDE] rounded-3xl">
//           <div className="w-full bg-white rounded-3xl shadow max-w-md xl:p-0">
//             <div className="p-6 space-y-4 sm:p-8">
//               <div className="bg-[#D3D3EE] flex justify-center items-center rounded-3xl p-3 mx-auto w-[fit-content]">
//                 <MdLogin className="text-[50px]" />
//               </div>
//               <div className="text-center max-w-xs m-auto">
//                 <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
//                   Login With Access Data
//                 </h1>
//                 <p>
//                   Know Your HeartRate by Entering Your HeartRate Into The
//                   Application
//                 </p>
//               </div>
//               {/* Login Form */}
//               {/* The form code remains unchanged */}
//               <form className="space-y-4 md:space-y-6" action="#">
//                 <div>
//                   <label
//                     for="email"
//                     className="block mb-2 text-sm font-medium text-gray-900"
//                   >
//                     Your email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#D3D3EE] focus:border-[#D3D3EE] block w-full p-2.5"
//                     placeholder="name@company.com"
//                     required=""
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="password"
//                     className="block mb-2 text-sm font-medium text-gray-900"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#D3D3EE] focus:border-[#D3D3EE] block w-full p-2.5"
//                     required=""
//                   />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-start">
//                     <div className="flex items-center h-5">
//                       <input
//                         id="remember"
//                         aria-describedby="remember"
//                         type="checkbox"
//                         className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
//                         required=""
//                       />
//                     </div>
//                     <div className="ml-3 text-sm">
//                       <label for="remember" className="text-gray-500">
//                         Remember me
//                       </label>
//                     </div>
//                   </div>
//                   <a
//                     href="/#"
//                     className="text-sm font-medium text-[#D3D3EE] hover:underline"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full text-black bg-[#D3D3EE] hover:bg-[#c5c5ec] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//                 >
//                   Sign in
//                 </button>
//                 <p className="text-sm font-light text-gray-500">
//                   Don’t have an account yet?{" "}
//                   <a
//                     href="/#"
//                     className="font-medium text-[#D3D3EE] hover:underline"
//                   >
//                     Sign up
//                   </a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";
import NavbarResearcher from "../components/navbar/navbarResearcher";
import { MdLogin } from "react-icons/md";

const Register = () => {
  return (
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
                src={"images/decor1.png"}
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
              />
            </div>
            <div className="relative w-full h-[260px]  flex-shrink-0">
              <img
                width={0}
                height={0}
                loading="lazy"
                alt="main-product-img"
                src={"images/decor2.png"}
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
              />
            </div>
            <div className="relative w-full h-[260px]  flex-shrink-0">
              <img
                width={0}
                height={0}
                loading="lazy"
                alt="main-product-img"
                src={"images/decor3.png"}
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
              />
            </div>
            <div className="relative w-full h-[260px]  flex-shrink-0">
              <img
                width={0}
                height={0}
                loading="lazy"
                alt="main-product-img"
                src={"images/decor4.png"}
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
              />
            </div>
            <div className="relative w-full h-[260px]  flex-shrink-0">
              <img
                width={0}
                height={0}
                loading="lazy"
                alt="main-product-img"
                src={"images/decor5.png"}
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
              />
            </div>
            <div className="relative w-full h-[260px]  flex-shrink-0">
              <img
                width={0}
                height={0}
                loading="lazy"
                alt="main-product-img"
                src={"images/decor6.png"}
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
              />
            </div>
            <div className="relative w-full h-[260px]  flex-shrink-0">
              <img
                width={0}
                height={0}
                loading="lazy"
                alt="main-product-img"
                src={"images/decor7.png"}
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
              />
            </div>
            <div className="relative w-full h-[260px]  flex-shrink-0">
              <img
                width={0}
                height={0}
                loading="lazy"
                alt="main-product-img"
                src={"images/decor8.png"}
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
              />
            </div>
            <div className="relative w-full h-[260px]  flex-shrink-0">
              <img
                width={0}
                height={0}
                loading="lazy"
                alt="main-product-img"
                src={"images/decor9.png"}
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
                  Register for access Data
                </h1>
                <p>
                  Know Your HeartRate by Entering Your HeartRate Into The
                  Application
                </p>
              </div>
              {/* Login Form */}
              {/* The form code remains unchanged */}
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#D3D3EE] focus:border-[#D3D3EE] block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      for="firstName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#D3D3EE] focus:border-[#D3D3EE] block w-full p-2.5"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="lastName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#D3D3EE] focus:border-[#D3D3EE] block w-full p-2.5"
                      required=""
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      for="institusi"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Institusi
                    </label>
                    <input
                      type="text"
                      name="institusi"
                      id="institusi"
                      placeholder="Institusi"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#D3D3EE] focus:border-[#D3D3EE] block w-full p-2.5"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="phoneNumber"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="08123456789"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#D3D3EE] focus:border-[#D3D3EE] block w-full p-2.5"
                      required=""
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#D3D3EE] focus:border-[#D3D3EE] block w-full p-2.5"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="konfirmasiPassword"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Konfirmasi Password
                    </label>
                    <input
                      type="password"
                      name="konfirmasiPassword"
                      id="konfirmasiPassword"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#D3D3EE] focus:border-[#D3D3EE] block w-full p-2.5"
                      required=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="tujuanPermohonan"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Tujuan Permohonan
                  </label>
                  <input
                    type="text"
                    name="tujuanPermohonan"
                    id="tujuanPermohonan"
                    placeholder="Tujuan Permohonan"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#D3D3EE] focus:border-[#D3D3EE] block w-full p-2.5"
                    required=""
                  />
                </div>

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
