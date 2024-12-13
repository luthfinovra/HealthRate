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
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="flex flex-wrap items-center justify-between p-4">
        <div className="flex gap-12">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              loading="lazy"
              src="/images/logo.png"
              className="h-12"
              alt="HeartCare-Logo"
            />
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
              <div className="shadow-main p-2 text-gray-500 rounded-full bg-red-400 group-hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <IoMdLogOut className="text-white group-hover:text-white" />
              </div>
              {/* Teks */}
              <span className="font-semibold">Keluar</span>
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/")}
                className={`py-2 px-4 rounded ${isActive("/")} 
    w-full max-w-[200px] sm:w-auto sm:px-6 sm:py-3 
    text-center text-sm sm:text-base`}
              >
                Masuk
              </button>
              <button
                onClick={() => navigate("/register")}
                className={`py-2 px-4 rounded ${isActive("/register")} 
    w-full max-w-[200px] sm:w-auto sm:px-6 sm:py-3 
    text-center text-sm sm:text-base`}
              >
                Daftar
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarResearcher;
