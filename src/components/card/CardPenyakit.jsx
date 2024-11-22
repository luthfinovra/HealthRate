import React from "react";

const CardPenyakit = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/researcher/penyakit/arrythmia">
        <img
          className="rounded-t-lg w-full h-56 object-cover"
          src="https://d1bpj0tv6vfxyp.cloudfront.net/articles/647822_26-3-2021_9-47-1.webp"
          alt="Arrythmia"
        />
      </a>
      <div className="p-5">
        <a href="/researcher/penyakit/arrythmia">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Arrythmia
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          1000 Record • Updated 21 hours ago
        </p>
      </div>
    </div>
  );
};

export default CardPenyakit;
