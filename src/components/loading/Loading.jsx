import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-6 h-full w-full gap-5  ">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
