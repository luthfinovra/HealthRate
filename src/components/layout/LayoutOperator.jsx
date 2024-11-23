import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';

const LayoutOperator = ({ children }) => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={() => setIsActive(!isActive)}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a
                href="https://flowbite.com/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="/images/logo_heartcare.png"
                  className="h-8"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  HeartCare
                </span>
              </a>
            </div>
            <button
              onClick={() => {
                toast.loading('Loading...');
                toast.dismiss();
                toast.success('Berhasil Logout');
                Cookies.remove('token');
                navigate('/');
              }}
              className="shadow-main p-2 text-gray-500 rounded-full bg-red-400 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <IoMdLogOut className="text-white" />
              <span className="sr-only">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-52 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-10 font-medium">
            <li className="flex justify-center ">
              <a
                href={`/operator/record-penyakit/${id}`}
                className={`max-w-[98px] min-h-[74px] w-full inline-flex ${
                  location.pathname === `/operator/record-penyakit/${id}`
                    ? 'bg-white shadow-main'
                    : ' '
                } flex-col items-center justify-center p-2 text-gray-900 rounded-lg group space-y-2`}
              >
                <div
                  className={`${
                    location.pathname === `/operator/record-penyakit/${id}`
                      ? 'bg-[#554F9B]'
                      : ' '
                  } p-2 rounded-lg`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.0001 1.55052C11.6249 -0.460396 13.8415 0.694511 14.7707 2.67453C15.2672 3.7328 15.667 5.61012 15.4297 7.56906H12.0707L11.6322 6.57884C11.4508 6.11108 10.8435 6.06203 10.6072 6.51351L10.2493 7.19669L9.51626 4.03692C9.39839 3.40071 8.55845 3.36293 8.39994 3.99622L7.61489 7.12634L7.35488 6.08373C7.23932 5.61325 6.67923 5.45942 6.37415 5.83305L4.95274 7.56906H0.570262C0.332975 5.61012 0.732818 3.7328 1.22954 2.67453C2.15846 0.694511 4.37512 -0.460396 8.0001 1.55052ZM15.1892 8.81289C14.4124 11.6852 10.4086 15.0377 8.0001 15.5C5.5916 15.0375 1.58778 11.6854 0.811015 8.8131H5.20794C5.39669 8.8131 5.56406 8.71416 5.66864 8.562L6.52476 7.51646L7.05846 9.66806C7.20985 10.2817 8.01338 10.2755 8.16554 9.67015L8.93248 6.61433L9.48583 8.99991C9.61545 9.56223 10.3194 9.63612 10.5546 9.12703L11.0629 8.15622L11.1967 8.45826C11.2948 8.68055 11.4991 8.81038 11.7123 8.81059L15.1892 8.81289Z"
                      fill={`${
                        location.pathname === `/operator/record-penyakit/${id}`
                          ? 'white'
                          : '#554F9B'
                      }`}
                    />
                  </svg>
                </div>
                <span className="text-[#554F9B] text-center text-sm">
                  Penyakit
                </span>
              </a>
            </li>

            <li className="flex justify-center ">
              <a
                href={`/operator/tambah-record/${id}`}
                className={`max-w-[98px] min-h-[74px] w-full inline-flex ${
                  location.pathname === `/operator/tambah-record/${id}`
                    ? 'bg-white shadow-main'
                    : ' '
                } flex-col items-center justify-center p-2 text-gray-900 rounded-lg group space-y-2`}
              >
                <div
                  className={`${
                    location.pathname === `/operator/tambah-record/${id}`
                      ? 'bg-[#554F9B]'
                      : ' '
                  } p-2 rounded-lg`}
                >
                  <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.00003 0.350172C10.2083 -0.320132 10.9472 0.0648371 11.2569 0.724844C11.4224 1.0776 11.5557 1.70337 11.4766 2.35635H10.3569L10.2107 2.02628C10.1503 1.87036 9.94783 1.85401 9.86905 2.0045L9.74977 2.23223L9.50542 1.17897C9.46613 0.966902 9.18615 0.954309 9.13331 1.16541L8.87163 2.20878L8.78496 1.86124C8.74644 1.70442 8.55974 1.65314 8.45805 1.77768L7.98425 2.35635H6.52342C6.44433 1.70337 6.57761 1.0776 6.74318 0.724844C7.05282 0.0648371 7.79171 -0.320132 9.00003 0.350172ZM11.3964 2.77096C11.1375 3.72841 9.80286 4.84589 9.00003 5C8.1972 4.84582 6.86259 3.72848 6.60367 2.77103H8.06931C8.13223 2.77103 8.18802 2.73805 8.22288 2.68733L8.50825 2.33882L8.68615 3.05602C8.73662 3.26058 9.00446 3.25849 9.05518 3.05672L9.31083 2.03811L9.49528 2.8333C9.53848 3.02074 9.77314 3.04537 9.85153 2.87568L10.021 2.55207L10.0656 2.65275C10.0983 2.72685 10.1664 2.77013 10.2374 2.7702L11.3964 2.77096Z"
                      fill={`${
                        location.pathname === `/operator/tambah-record/${id}`
                          ? 'white'
                          : '#554F9B'
                      }`}
                    />
                    <path
                      d="M8.25 15V8.8875L6.3 10.8375L5.25 9.75L9 6L12.75 9.75L11.7 10.8375L9.75 8.8875V15H8.25ZM4.5 18C4.0875 18 3.7345 17.8533 3.441 17.5597C3.1475 17.2662 3.0005 16.913 3 16.5V14.25H4.5V16.5H13.5V14.25H15V16.5C15 16.9125 14.8533 17.2657 14.5597 17.5597C14.2662 17.8538 13.913 18.0005 13.5 18H4.5Z"
                      fill={`${
                        location.pathname === `/operator/tambah-record/${id}`
                          ? 'white'
                          : '#554F9B'
                      }`}
                    />
                  </svg>
                </div>
                <span className="text-[#554F9B] text-center text-sm">
                  Tambah Record
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-52">
        <div className="mt-20">{children}</div>
      </div>
    </div>
  );
};

export default LayoutOperator;
