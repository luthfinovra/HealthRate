import React from "react";

const CardPenyakit = ({ image, name, record, dateUpdate, id }) => {
  const defaultImage = "/images/default-image.jpg";

  // Fungsi untuk menghitung selisih waktu
  const timeAgo = (date) => {
    const now = Date.now();
    const updatedTime = new Date(date).getTime();
    const diffInSeconds = Math.floor((now - updatedTime) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <a href={`/peneliti/detail-penyakit/${id}`}>
        <div>
          <img
            loading="lazy"
            className="rounded-t-lg w-full h-56 object-cover"
            src={image || defaultImage}
            alt={name || "Penyakit"}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {name || "Nama Penyakit"}
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              {record || 0} Record •{" "}
              {dateUpdate
                ? "Updated " + timeAgo(dateUpdate)
                : "Updated recently"}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardPenyakit;
