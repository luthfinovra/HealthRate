import React from "react";
import { useLocation, Link } from "react-router-dom";

const LayoutOperator = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
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
            <div className="flex items-center">
              <div className="flex items-center">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user-photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li className="flex justify-center ">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="flex justify-center ">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li className="flex justify-center ">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li className="flex justify-center ">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                href="/arrythmia"
                className={`max-w-[98px] min-h-[74px] w-full inline-flex ${
                  location.pathname === "/arrythmia"
                    ? "bg-white shadow-main"
                    : " "
                } flex-col items-center justify-center p-2 text-gray-900 rounded-lg group space-y-2`}
              >
                <div
                  className={`${
                    location.pathname === "/arrythmia" ? "bg-[#554F9B]" : " "
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
                        location.pathname === "/arrythmia" ? "white" : "#554F9B"
                      }`}
                    />
                  </svg>
                </div>
                <span className="text-[#554F9B] text-center text-sm">
                  Arrythmia
                </span>
              </a>
            </li>
            <li className="flex justify-center ">
              <a
                href="/myocardial"
                className={`max-w-[98px] min-h-[74px] w-full inline-flex ${
                  location.pathname === "/myocardial"
                    ? "bg-white shadow-main"
                    : " "
                } flex-col items-center justify-center p-2 text-gray-900 rounded-lg group space-y-2`}
              >
                <div
                  className={`${
                    location.pathname === "/myocardial" ? "bg-[#554F9B]" : " "
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
                      d="M6.75808 0.499939H8.59843V1.60489C9.18412 1.57229 9.7514 1.60322 10.2612 1.70101C8.09877 2.47414 7.10361 4.4613 6.94074 4.78643L6.93062 4.80649C6.40198 4.73377 5.82963 4.67276 5.28811 4.67735C4.72957 4.72082 4.18805 4.79562 3.29594 5.25198C3.16988 5.33305 3.00057 5.46511 2.77006 5.66738C2.7535 5.6561 2.73556 5.64649 2.71209 5.63269L2.64262 5.59258C2.46851 5.4901 2.28817 5.39662 2.10248 5.31258C1.63503 5.10195 1.06176 4.92267 0.5 4.92267V3.3016C1.47124 3.3016 2.34494 3.60124 2.94075 3.86996C3.14733 3.96315 3.32861 4.05592 3.47905 4.13867C3.61457 3.87907 3.78873 3.63763 3.99665 3.42112L2.98538 1.98059L4.60534 1.02483L5.53794 2.35378C5.92903 2.17226 6.33722 2.02288 6.75762 1.90746L6.75808 0.499939ZM11.7072 4.13198C11.0364 4.41449 10.4558 4.87837 9.93267 5.77186C9.93267 5.77186 8.77142 5.28959 7.82916 5.03885C8.55242 3.70739 9.39345 2.9585 10.6343 2.43611C11.8347 1.93044 13.266 1.80089 14.9674 1.8548L14.8864 3.84321C13.3175 3.7939 12.4181 3.83276 11.7072 4.13198Z"
                      fill={`${
                        location.pathname === "/myocardial"
                          ? "white"
                          : "#554F9B"
                      }`}
                    />
                    <path
                      d="M3.66678 6.02467C0.325174 8.73189 5.09856 15.4999 8.91773 15.4999C12.7369 15.4999 17.9952 8.73774 14.1687 5.63769C14.089 5.57303 14.0099 5.50784 13.9313 5.44211C13.6147 5.17883 13.4045 5.00331 12.8206 4.6882C11.6465 4.6882 10.9389 5.75512 10.6168 6.40539C10.6006 6.43788 10.5805 6.4687 10.557 6.49733L9.81398 8.37374L9.54667 9.24675C9.51838 9.33881 9.52569 9.4369 9.56737 9.52466L9.88023 10.1808L11.4984 10.0103L11.6046 10.8402L10.0822 11.0011L10.1811 12.318L9.26326 12.3748L9.13995 10.732L8.72312 9.85648C8.59765 9.59317 8.5754 9.29874 8.66009 9.02233L8.66791 8.99642L7.73209 9.3809L7.12018 10.7855L6.26442 10.4779L6.74935 9.36544L5.27248 9.0495L5.48319 8.23583L7.3263 8.63034L9.00791 7.9387L9.57382 6.50945C8.11626 5.88718 5.12295 4.84408 3.66632 6.02384"
                      fill={`${
                        location.pathname === "/myocardial"
                          ? "white"
                          : "#554F9B"
                      }`}
                    />
                  </svg>
                </div>
                <span className="text-[#554F9B] text-center text-sm">
                  Myocardial
                </span>
              </a>
            </li>
            <li className="flex justify-center ">
              <a
                href="/upload-arrythmia"
                className={`max-w-[98px] min-h-[74px] w-full inline-flex ${
                  location.pathname === "/upload-arrythmia"
                    ? "bg-white shadow-main"
                    : " "
                } flex-col items-center justify-center p-2 text-gray-900 rounded-lg group space-y-2`}
              >
                <div
                  className={`${
                    location.pathname === "/upload-arrythmia"
                      ? "bg-[#554F9B]"
                      : " "
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
                        location.pathname === "/upload-arrythmia"
                          ? "white"
                          : "#554F9B"
                      }`}
                    />
                    <path
                      d="M8.25 15V8.8875L6.3 10.8375L5.25 9.75L9 6L12.75 9.75L11.7 10.8375L9.75 8.8875V15H8.25ZM4.5 18C4.0875 18 3.7345 17.8533 3.441 17.5597C3.1475 17.2662 3.0005 16.913 3 16.5V14.25H4.5V16.5H13.5V14.25H15V16.5C15 16.9125 14.8533 17.2657 14.5597 17.5597C14.2662 17.8538 13.913 18.0005 13.5 18H4.5Z"
                      fill={`${
                        location.pathname === "/upload-arrythmia"
                          ? "white"
                          : "#554F9B"
                      }`}
                    />
                  </svg>
                </div>
                <span className="text-[#554F9B] text-center text-sm">
                  Upload Arrythmia
                </span>
              </a>
            </li>
            <li className="flex justify-center ">
              <a
                href="/upload-myocardial"
                className={`max-w-[98px] min-h-[74px] w-full inline-flex ${
                  location.pathname === "/upload-myocardial"
                    ? "bg-white shadow-main"
                    : " "
                } flex-col items-center justify-center p-2 text-gray-900 rounded-lg group space-y-2`}
              >
                <div
                  className={`${
                    location.pathname === "/upload-myocardial"
                      ? "bg-[#554F9B]"
                      : " "
                  } p-2 rounded-lg`}
                >
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.58603 0H9.19948V0.368317C9.39471 0.357452 9.5838 0.36776 9.75373 0.400357C9.03293 0.658067 8.7012 1.32045 8.64691 1.42883L8.64354 1.43552C8.46733 1.41128 8.27655 1.39094 8.09604 1.39247C7.90986 1.40696 7.72935 1.4319 7.43198 1.58401C7.38996 1.61104 7.33352 1.65506 7.25669 1.72248C7.25117 1.71872 7.24519 1.71552 7.23736 1.71092L7.21421 1.69755C7.15617 1.66339 7.09606 1.63223 7.03416 1.60421C6.87834 1.53401 6.68725 1.47424 6.5 1.47424V0.933888C6.82375 0.933888 7.11498 1.03377 7.31359 1.12334C7.38244 1.1544 7.44287 1.18533 7.49302 1.21291C7.53819 1.12638 7.59624 1.0459 7.66555 0.973728L7.32846 0.493551L7.86845 0.174965L8.17931 0.617948C8.30968 0.557439 8.44574 0.507649 8.58588 0.469173L8.58603 0ZM10.2357 1.21068C10.0121 1.30485 9.8186 1.45948 9.64423 1.75731C9.64423 1.75731 9.25714 1.59655 8.94306 1.51297C9.18414 1.06915 9.46449 0.81952 9.8781 0.645391C10.2782 0.476834 10.7553 0.43365 11.3225 0.45162L11.2955 1.11442C10.7725 1.09799 10.4727 1.11094 10.2357 1.21068Z"
                      fill={`${
                        location.pathname === "/upload-myocardial"
                          ? "white"
                          : "#554F9B"
                      }`}
                    />
                    <path
                      d="M7.55559 1.84161C6.44172 2.74401 8.03285 5.00003 9.30591 5.00003C10.579 5.00003 12.3317 2.74596 11.0562 1.71261C11.0297 1.69106 11.0033 1.66933 10.9771 1.64742C10.8716 1.55966 10.8015 1.50115 10.6069 1.39612C10.2155 1.39612 9.97963 1.75176 9.87228 1.96851C9.86685 1.97935 9.86017 1.98962 9.85234 1.99916L9.60466 2.62463L9.51556 2.91564C9.50613 2.94632 9.50856 2.97902 9.52246 3.00827L9.62675 3.22698L10.1661 3.17014L10.2015 3.4468L9.69407 3.50043L9.72704 3.93937L9.42109 3.95832L9.37999 3.41072L9.24104 3.11888C9.19922 3.03111 9.1918 2.93297 9.22003 2.84083L9.22264 2.83219L8.9107 2.96035L8.70673 3.42855L8.42147 3.32602L8.58312 2.9552L8.09083 2.84988L8.16107 2.57866L8.77543 2.71016L9.33597 2.47962L9.52461 2.0032C9.03876 1.79578 8.04098 1.44808 7.55544 1.84133"
                      fill={`${
                        location.pathname === "/upload-myocardial"
                          ? "white"
                          : "#554F9B"
                      }`}
                    />
                    <path
                      d="M8.75 15V8.8875L6.8 10.8375L5.75 9.75L9.5 6L13.25 9.75L12.2 10.8375L10.25 8.8875V15H8.75ZM5 18C4.5875 18 4.2345 17.8533 3.941 17.5597C3.6475 17.2662 3.5005 16.913 3.5 16.5V14.25H5V16.5H14V14.25H15.5V16.5C15.5 16.9125 15.3533 17.2657 15.0597 17.5597C14.7662 17.8538 14.413 18.0005 14 18H5Z"
                      fill={`${
                        location.pathname === "/upload-myocardial"
                          ? "white"
                          : "#554F9B"
                      }`}
                    />
                  </svg>
                </div>
                <span className="text-[#554F9B] text-center text-sm">
                  Upload Myocardial
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
