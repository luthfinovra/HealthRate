import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

const NavbarResearcher = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get current location (URL)
  const [hasToken, setHasToken] = useState(false);

  // Check if token exists in cookies
  useEffect(() => {
    const token = Cookies.get("token");
    setHasToken(!!token); // Set true if token exists
  }, []);

  // Helper function to determine if the button is active based on the current location
  const isActive = (path) =>
    location.pathname === path
      ? "bg-[#554F9B] text-white"
      : "bg-transparent text-[#554F9B] hover:bg-[#6A63B0] hover:text-white";

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between p-4">
        <div className="flex gap-12">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              loading="lazy"
              src="/images/logo_heartcare.png"
              className="h-12"
              alt="Flowbite Logo"
            />
            <span className="hidden md:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              HeartCare
            </span>
          </a>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {hasToken ? (
            <button
              onClick={() => {
                toast.loading("Loading...");
                toast.dismiss();
                toast.success("Berhasil Logout");
                Cookies.remove("token");
                navigate("/");
              }}
              className="group flex items-center space-x-1 text-red-400 hover:text-red-600"
            >
              {/* Lingkaran */}
              <div className="shadow-main p-2 text-gray-500 rounded-full bg-red-400 group-hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600">
                <IoMdLogOut className="text-white group-hover:text-white" />
              </div>
              {/* Teks */}
              <span className="font-semibold">Keluar</span>
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/")}
                className={`py-2 px-4 rounded ${isActive("/")}`}
              >
                Masuk
              </button>
              <button
                onClick={() => navigate("/register")}
                className={`py-2 px-4 rounded ${isActive("/register")}`}
              >
                Daftar
              </button>
            </>
          )}
          {hasToken && (
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarResearcher;
