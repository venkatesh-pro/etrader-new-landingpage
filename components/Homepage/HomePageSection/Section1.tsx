import React from "react";

const Section1 = () => {
  return (
    <div className="mt-[100px] mx-[48px]">
      <h1 className="text-desktop-header-xl text-header-b mt-[171px]">
        Space One
      </h1>
      <div className="mt-[30px] flex justify-between">
        <div>
          <p className="text-desktop-body-xl">
            Two sizes. Tons of possibilities.
          </p>
          <p className="text-desktop-body-xl text-color-dark">
            From $56,990 or $495/wk for 12 mo. <sup>1</sup>
          </p>
        </div>
        <div className="flex ">
          <button className="text-[18px] h-[53px] w-[97px] bg-[#F2F2F3] rounded-[40px]">
            Design
          </button>
          <button className="text-[18px] h-[53px] w-[98px] bg-[#F2F2F3] ml-[15px] rounded-[40px]">
            Interior
          </button>
          <button className="text-[18px] h-[53px] w-[134px] bg-[#F2F2F3] ml-[15px] rounded-[40px]">
            Tech Specs
          </button>
        </div>
      </div>
      <div className="mt-[100px] ">
        <div className="">
          <img
            src="/homepageImages/section-1.png"
            className="h-full w-full object-contain "
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
