import React from "react";

const InputField = ({ icon, type, id, placeholder, value }) => {
  return (
    <div class="flex">
      <span class="inline-flex items-center px-3 text-sm text-gray-900  border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
        {icon}
      </span>
      <input
        type={type}
        id={id}
        class="rounded-none rounded-e-lg  border border-l-0 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default InputField;
