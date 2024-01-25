import React, { useEffect, useState } from "react";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div
        className={`preloader flex justify-center items-center fixed top-0 left-0 w-full h-full ${
          loading ? "show" : "hide"
        }`}
      >
        <div className="spinner rounded-[50%] w-12 h-12 border-4 border-[#ffffff57] border-t-4 border-t-[#fff] "></div>
      </div>
    </div>
  );
};

export default Preloader;
