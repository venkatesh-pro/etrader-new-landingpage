import React from "react";

const Section8 = () => {
  return (
    <div className="px-[30px] mt-[60px] md:px-[60px] md:mt-[140px]">
      <p className="text-[26px] md:text-[42px] leading-[35px] md:leading-[50px]">
        Room for endless possibilities.
      </p>
      <div className="mt-[32px] md:mt-[64px]">
        <div className="grid grid-cols-1 tabS:grid-cols-2 lapS:grid-cols-3 lapL:grid-cols-4 gap-6 items-center justify-items-stretch justify-center">
          <div className="h-[480px]  bg-[#0A0B0A] bg-[url('/homepageImages/section-8.1.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000040] via-[#00000000] to-transparent rounded-lg"></div>
            {/* context */}
            <div className="relative pl-[25px] mt-[25px]">
              <p className="text-[24px]">Accommodation</p>
              <p className="text-[16px]">
                Relocatable modular units for sustainable tourism projects.
              </p>
            </div>
          </div>
          <div className="h-[480px]  bg-[#0A0B0A] bg-[url('/homepageImages/section-8.2.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000040] via-[#00000000] to-transparent rounded-lg"></div>
            {/* context */}
            <div className="relative pl-[25px] mt-[25px]">
              <p className="text-[24px]">Special Events</p>
              <p className="text-[16px]">
                Portable structures for festivals, weddings, or corporate
                events.
              </p>
            </div>
          </div>
          <div className="h-[480px]  bg-[#0A0B0A] bg-[url('/homepageImages/section-8.3.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000040] via-[#00000000] to-transparent rounded-lg"></div>
            {/* context */}
            <div className="relative pl-[25px] mt-[25px]">
              <p className="text-[24px]">Retail Pop-up</p>
              <p className="text-[16px]">
                Flexible retail spaces for seasonal pop-up or short-term
                operations.
              </p>
            </div>
          </div>
          <div className="h-[480px]  bg-[#0A0B0A] bg-[url('/homepageImages/section-8.4.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000040] via-[#00000000] to-transparent rounded-lg"></div>
            {/* context */}
            <div className="relative pl-[25px] mt-[25px]">
              <p className="text-[24px]">Creative Space</p>
              <p className="text-[16px]">
                Functional addition for storage, or to focus on the things you
                love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
