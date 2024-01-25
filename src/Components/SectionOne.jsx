import React from "react";
import footimg from "../assets/images/foot-locker.png";
import sideimg from "../assets/images/sidestep.png";

function SectionOne() {
  return (
    <>
      <section className=" py-[56px]">
        <div className="container px-3 mx-auto ">
          <h3 className="text-black family-pops not-italic font-medium md:text-[25px] text-base">
            You can buy the Nike Air Max 97 Men's Shoe - White here:
          </h3>
          <div className="flex-row flex flex-wrap mx-3 justify-center">
            <div className=" xl:w-1/4 sm:w-2/4 w-fit px-3 pt-10">
              <div className=" rounded-[10px] shadow-mycustomshadow">
                <div className=" border-[1px] border-[#0000001b] bg-white py-[27px] px-[44px] rounded-[10px]">
                  <img className="w-full" src={footimg} alt="#" />
                </div>
                <div className="S2-box bg-white pt-[28px] pr-[16px] pb-[31px] pl-[19px]">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <p className="text-black family-pops font-normal not-italic md:text-base text-sm mb-0">
                        Price:
                      </p>
                      <p className="text-black family-pops md:text-xl text-base not-italic font-semibold mb-0">
                        €179,99
                      </p>
                    </div>
                    <button className="text-white family-pops not-italic font-normal rounded-md border-[.311px] border-[#E8E8E8] bg-[#28A745] px-[10px] py-1 md:text-[10px] text-[8px]">
                      Best Price
                    </button>
                  </div>
                  <p className="text-black family-pops font-normal not-italic md:text-base text-sm mb-0">
                    Size:
                  </p>
                  <div className="flex-row flex flex-wrap mx-3 justify-center mb-1 mt-2">
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        41
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        42
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        43
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        44
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        45
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        46
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-[#454729] family-pops font-normal not-italic md:text-base text-sm">
                    View this product as:
                  </p>
                  <a
                    href="#"
                    className="mt-2 text-[#007BFF] family-pops md:text-base text-sm not-italic font-semibold"
                  >
                    Foot Locker NL
                  </a>
                </div>
              </div>
            </div>
            <div className=" xl:w-1/4 sm:w-2/4 w-fit px-3 pt-10">
              <div className=" rounded-[10px] shadow-mycustomshadow">
                <div className=" border-[1px] border-[#0000001b] bg-white py-[27px] px-[44px] rounded-[10px]">
                  <img className="w-full" src={sideimg} alt="#" />
                </div>
                <div className="S2-box bg-white pt-[28px] pr-[16px] pb-[31px] pl-[19px]">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <p className="text-black family-pops font-normal not-italic md:text-base text-sm mb-0">
                        Price:
                      </p>
                      <p className="text-black family-pops md:text-xl text-base not-italic font-semibold mb-0">
                        €179,99
                      </p>
                    </div>
                    <button className="text-white family-pops not-italic font-normal rounded-md border-[.311px] border-[#E8E8E8] bg-[#28A745] px-[10px] py-1 md:text-[10px] text-[8px]">
                      Best Price
                    </button>
                  </div>
                  <p className="text-black family-pops font-normal not-italic md:text-base text-sm mb-0">
                    Size:
                  </p>
                  <div className="flex-row flex flex-wrap mx-3 justify-center mb-1 mt-2">
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        41
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        42
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        43
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        44
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        45
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        46
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-[#454729] family-pops font-normal not-italic md:text-base text-sm">
                    View this product as:
                  </p>
                  <a
                    href="#"
                    className="mt-2 text-[#007BFF] family-pops md:text-base text-sm not-italic font-semibold"
                  >
                    Foot Locker NL
                  </a>
                </div>
              </div>
            </div>
            <div className=" xl:w-1/4 sm:w-2/4 w-fit px-3 pt-10">
              <div className=" rounded-[10px] shadow-mycustomshadow">
                <div className=" border-[1px] border-[#0000001b] bg-white py-[27px] px-[44px] rounded-[10px]">
                  <img className="w-full" src={footimg} alt="#" />
                </div>
                <div className="S2-box bg-white pt-[28px] pr-[16px] pb-[31px] pl-[19px]">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <p className="text-black family-pops font-normal not-italic md:text-base text-sm mb-0">
                        Price:
                      </p>
                      <p className="text-black family-pops md:text-xl text-base not-italic font-semibold mb-0">
                        €179,99
                      </p>
                    </div>
                    <button className="text-white family-pops not-italic font-normal rounded-md border-[.311px] border-[#E8E8E8] bg-[#28A745] px-[10px] py-1 md:text-[10px] text-[8px]">
                      Best Price
                    </button>
                  </div>
                  <p className="text-black family-pops font-normal not-italic md:text-base text-sm mb-0">
                    Size:
                  </p>
                  <div className="flex-row flex flex-wrap mx-3 justify-center mb-1 mt-2">
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        41
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        42
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        43
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        44
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        45
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        46
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-[#454729] family-pops font-normal not-italic md:text-base text-sm">
                    View this product as:
                  </p>
                  <a
                    href="#"
                    className="mt-2 text-[#007BFF] family-pops md:text-base text-sm not-italic font-semibold"
                  >
                    Foot Locker NL
                  </a>
                </div>
              </div>
            </div>
            <div className=" xl:w-1/4 sm:w-2/4 w-fit px-3 pt-10">
              <div className=" rounded-[10px] shadow-mycustomshadow">
                <div className=" border-[1px] border-[#0000001b] bg-white py-[27px] px-[44px] rounded-[10px]">
                  <img className="w-full" src={sideimg} alt="#" />
                </div>
                <div className="S2-box bg-white pt-[28px] pr-[16px] pb-[31px] pl-[19px]">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <p className="text-black family-pops font-normal not-italic md:text-base text-sm mb-0">
                        Price:
                      </p>
                      <p className="text-black family-pops md:text-xl text-base not-italic font-semibold mb-0">
                        €179,99
                      </p>
                    </div>
                    <button className="text-white family-pops not-italic font-normal rounded-md border-[.311px] border-[#E8E8E8] bg-[#28A745] px-[10px] py-1 md:text-[10px] text-[8px]">
                      Best Price
                    </button>
                  </div>
                  <p className="text-black family-pops font-normal not-italic md:text-base text-sm mb-0">
                    Size:
                  </p>
                  <div className="flex-row flex flex-wrap mx-3 justify-center mb-1 mt-2">
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        41
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        42
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        43
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        44
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        45
                      </div>
                    </div>
                    <div className=" w-1/3 px-3 mb-2">
                      <div className=" rounded-[40px] border-[1px] border-[#0000002d] bg-white duration-200 ease-linear hover:bg-[#00000081] cursor-pointer hover:text-white flex justify-center mt-1 text-[#181818] family-pops md:text-base text-sm not-italic font-medium ">
                        46
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-[#454729] family-pops font-normal not-italic md:text-base text-sm">
                    View this product as:
                  </p>
                  <a
                    href="#"
                    className="mt-2 text-[#007BFF] family-pops md:text-base text-sm not-italic font-semibold"
                  >
                    Foot Locker NL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionOne;
