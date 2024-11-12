import React, { useState } from "react";

const BtnDropdown = ({ rowMenu, title }) => {
  // State to manage the dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility on button click
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      {/* Dropdown Button */}
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-black bg-white shadow-main font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {title}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown Menu with Absolute Positioning */}
      <div
        id="dropdown"
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 z-10 bg-white divide-y shadow-main divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        style={{ top: "100%", left: 0 }}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          {rowMenu.map((item, index) => (
            <li key={index}>
              <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                {item.menu}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BtnDropdown;
