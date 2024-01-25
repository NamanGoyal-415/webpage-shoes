import React, { useState } from "react";

const SectionTwo = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <>
      <section>
        <div className="container mx-auto px-3">
          <div className=" w-full h-14 flex lg:gap-24 gap-4">
            <button
              onClick={() => handleTabClick(1)}
              className={
                activeTab === 1
                  ? "active  text-[#f00] relative after:absolute after:w-full after:h-1 after:bg-[#f00] after:bottom-[10px] after:left-0 after:content-[''] bg-transparent border-none family-pops lg:text-xl text-sm not-italic font-normal"
                  : " duration-200 ease-linear text-black bg-transparent border-none family-pops lg:text-xl text-sm not-italic font-normal outline-0"
              }
            >
              Description
            </button>
            <button
              onClick={() => handleTabClick(2)}
              className={
                activeTab === 2
                  ? "active  text-[#f00] relative after:absolute after:w-full after:h-1 after:bg-[#f00] after:bottom-[10px] after:left-0 after:content-[''] bg-transparent border-none family-pops lg:text-xl text-sm not-italic font-normal"
                  : " duration-200 ease-linear text-black bg-transparent border-none family-pops lg:text-xl text-sm not-italic font-normal outline-0"
              }
            >
              Additional Information
            </button>
            <button
              onClick={() => handleTabClick(3)}
              className={
                activeTab === 3
                  ? "active  text-[#f00] relative after:absolute after:w-full after:h-1 after:bg-[#f00] after:bottom-[10px] after:left-0 after:content-[''] bg-transparent border-none family-pops lg:text-xl text-sm not-italic font-normal"
                  : " duration-200 ease-linear text-black bg-transparent border-none family-pops lg:text-xl text-sm not-italic font-normal outline-0"
              }
            >
              Reviews (1)
            </button>
          </div>

          <div className=" pb-14">
            {activeTab === 1 && (
              <p className="text-[#4D4D4D] family-pops lg:text-xl text-sm not-italic font-normal">
                Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
                euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet
                nulla in leo ullamcorper, in finibus elit porta. Sed eget congue
                neque, mattis finibus neque. In vel dolor ac augue pretium
                suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse
                imperdiet lorem eleifend nisi euismod, vel consequat ipsum
                luctus. Morbi auctor vulputate hendrerit. Etiam vel lectus
                tortor. Pellentesque non pharetra mi. Cura
              </p>
            )}
            {activeTab === 2 && (
              <p className="text-[#4D4D4D] family-pops lg:text-xl text-sm not-italic font-normal">
                Additional Information
              </p>
            )}
            {activeTab === 3 && (
              <div className="text-[#4D4D4D] family-pops lg:text-xl text-sm not-italic font-normal">
                Reviews
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
