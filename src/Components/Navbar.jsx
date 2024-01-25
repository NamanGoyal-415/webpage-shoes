import React from "react";
import logo from "../assets/images/logo.png";
import banner from "../assets/images/sales-banner.png";

export const Navbar = () => {
  function openNav() {
    document.getElementById("navbar").classList.toggle("left-0");
    document.body.classList.toggle("overflow-hidden");
    document.querySelector(".menu").classList.toggle("cross");
  }
  function closeNav() {
    document.getElementById("navBar").classList.remove("left-0");
    document.body.classList.remove("overflow-hidden");
    document.querySelector(".menu").classList.remove("cross");
  }
  return (
    <>
      <section className=" overflow-hidden">
        <div className="container mx-auto px-3">
          <div className="flex justify-between py-4">
            <img src={logo} alt="logo" />
            <img
              className="lg:block hidden mr-20"
              src={banner}
              alt="sales-banner"
            />
          </div>
        </div>
        <nav className=" nav-bar border-[1px] border-[#DEE2E6] shadow-myCustomShadow bg-white">
          <div className="container mx-auto px-3">
            <div className=" py-6 my-0 lg:my-2">
              <div onClick={openNav} className="menu block lg:hidden">
                <span className="nav-line1"></span>
                <span className="nav-line2 my-1"></span>
                <span className="nav-line3"></span>
              </div>
              <ul
                id="navbar"
                className="flex justify-end gap-[15px] sm_view mr-20"
              >
                <li>
                  <a
                    onClick={closeNav}
                    href=""
                    className="head-links text-black text-lg family-robo not-italic font-normal leading-normal duration-200 transition-all ease-linear"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    onClick={closeNav}
                    href=""
                    className="head-links text-black text-lg family-robo not-italic font-normal leading-normal duration-200 transition-all ease-linear"
                  >
                    SNEAKERS KOPEN
                  </a>
                </li>
                <li>
                  <a
                    onClick={closeNav}
                    href=""
                    className="head-links text-black text-lg family-robo not-italic font-normal leading-normal duration-200 transition-all ease-linear"
                  >
                    INTERVIEWS
                  </a>
                </li>
                <li>
                  <a
                    onClick={closeNav}
                    href=""
                    className="head-links text-black text-lg family-robo not-italic font-normal leading-normal duration-200 transition-all ease-linear"
                  >
                    SALE
                  </a>
                </li>
                <li>
                  <a
                    onClick={closeNav}
                    href=""
                    className="head-links text-black text-lg family-robo not-italic font-normal leading-normal duration-200 transition-all ease-linear"
                  >
                    SNEAKERS VAN DE DEG
                  </a>
                </li>
                <li>
                  <a
                    onClick={closeNav}
                    href=""
                    className="head-links text-black text-lg family-robo not-italic font-normal leading-normal duration-200 transition-all ease-linear"
                  >
                    SNEAKERS FORUM
                  </a>
                </li>
                <li>
                  <a
                    onClick={closeNav}
                    href=""
                    className="head-links text-black text-lg family-robo not-italic font-normal leading-normal duration-200 transition-all ease-linear"
                  >
                    BLOG
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
