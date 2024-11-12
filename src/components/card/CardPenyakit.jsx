import React from "react";

const CardPenyakit = () => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/researcher/penyakit/arrythmia">
        <img
          class="rounded-t-lg"
          src="https://d1bpj0tv6vfxyp.cloudfront.net/articles/647822_26-3-2021_9-47-1.webp"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="/researcher/penyakit/arrythmia">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Arrythmia
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          1000 Record • Updated 21 hours ago
        </p>
      </div>
    </div>
  );
};

export default CardPenyakit;
