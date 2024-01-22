import React from "react";

const Loader = () => {
  return (
    <div
      className={`xl:px-20 lg:px-12 px-5 flex justify-center py-5 mx-auto max-w-screen-2xl items-center my-2`}
    >
      <div className="flex items-center justify-center  ">
        <div className="animate-spin rounded-full border-t-4 border-t-transparent border-blue-500 border-solid border-4 h-12 w-12"></div>
      </div>
    </div>
  );
};

export default Loader;
