import React from "react";
import NavbarResearcher from "../components/navbar/navbarResearcher";
import { MdLogin } from "react-icons/md";
import InputField from "../components/inputField/InputField";

export const Login = () => {
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
                  Login With Access Data
                </h1>
                <p>
                  Know Your HeartRate by Entering Your HeartRate Into The
                  Application
                </p>
              </div>
              {/* Login Form */}
              {/* The form code remains unchanged */}
              <form className="space-y-4 md:space-y-6" action="#">
                <InputField
                  icon={
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6ZM6 7.5C3.9975 7.5 0 8.505 0 10.5V11.25C0 11.6625 0.3375 12 0.75 12H11.25C11.6625 12 12 11.6625 12 11.25V10.5C12 8.505 8.0025 7.5 6 7.5Z"
                        fill="#53516C"
                      />
                    </svg>
                  }
                  id={"email"}
                  placeholder={"Email"}
                  type={"email"}
                />
                <InputField
                  icon={
                    <svg
                      width="12"
                      height="17"
                      viewBox="0 0 12 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 16.5C1.0875 16.5 0.7345 16.3533 0.441 16.0597C0.1475 15.7662 0.0005 15.413 0 15V7.5C0 7.0875 0.147 6.7345 0.441 6.441C0.735 6.1475 1.088 6.0005 1.5 6H2.25V4.5C2.25 3.4625 2.61575 2.57825 3.34725 1.84725C4.07875 1.11625 4.963 0.750501 6 0.750001C7.037 0.749501 7.9215 1.11525 8.6535 1.84725C9.3855 2.57925 9.751 3.4635 9.75 4.5V6H10.5C10.9125 6 11.2657 6.147 11.5597 6.441C11.8538 6.735 12.0005 7.088 12 7.5V15C12 15.4125 11.8533 15.7657 11.5597 16.0597C11.2662 16.3538 10.913 16.5005 10.5 16.5H1.5ZM6 12.75C6.4125 12.75 6.76575 12.6033 7.05975 12.3098C7.35375 12.0163 7.5005 11.663 7.5 11.25C7.4995 10.837 7.35275 10.484 7.05975 10.191C6.76675 9.898 6.4135 9.751 6 9.75C5.5865 9.749 5.2335 9.896 4.941 10.191C4.6485 10.486 4.5015 10.839 4.5 11.25C4.4985 11.661 4.6455 12.0143 4.941 12.3098C5.2365 12.6053 5.5895 12.752 6 12.75ZM3.75 6H8.25V4.5C8.25 3.875 8.03125 3.34375 7.59375 2.90625C7.15625 2.46875 6.625 2.25 6 2.25C5.375 2.25 4.84375 2.46875 4.40625 2.90625C3.96875 3.34375 3.75 3.875 3.75 4.5V6Z"
                        fill="#53516C"
                      />
                    </svg>
                  }
                  id={"password"}
                  placeholder={"Password"}
                  type={"password"}
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
  );
};
