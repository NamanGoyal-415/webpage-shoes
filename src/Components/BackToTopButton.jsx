import React, { useEffect, useState } from "react";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`back-to-top-button fixed bottom-5 right-5 bg-[#333] text-white py-[10px] px-5 rounded-[5px] cursor-pointer opacity-0 transition-[opacity] duration-[.3s] ease-linear ${isVisible ? "show" : "hide"}`}
        onClick={scrollToTop}
      >
        Back to Top
      </div>
    </>
  );
};

export default BackToTopButton;
