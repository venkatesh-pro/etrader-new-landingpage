import React from "react";

const Section3 = () => {
  return (
    <div className="px-[30px] mt-[60px] md:px-[60px] md:mt-[140px]">
      <p className="text-[26px] md:text-[42px] leading-[35px] md:leading-[50px]">
        Get to know Space One.
      </p>
      <div className="mt-[32px] md:mt-[64px]  ">
        <div className="grid grid-cols-1 tabS:grid-cols-2 lapS:grid-cols-3 lapL:grid-cols-4 gap-6 items-center justify-items-stretch justify-center">
          <div className="h-[480px] bg-[#0A0B0A] bg-[url('/homepageImages/section-3.1.jpg')] bg-no-repeat bg-cover bg-center rounded-lg">
            <div className="pl-[25px] mt-[25px]">
              <p className="text-[24px]">Spacious Deck</p>
              <p className="text-[16px] text-[#808080]">
                Futuristic wraparound facade with durable undercover decking
                area.
              </p>
            </div>
          </div>
          <div className="h-[480px] bg-[#0A0B0A] bg-[url('/homepageImages/section-3.2.jpg')] bg-no-repeat bg-cover bg-center rounded-lg">
            <div className="pl-[25px] mt-[25px]">
              <p className="text-[24px]">Premium Interior</p>
              <p className="text-[16px] text-[#808080]">
                Bespoke ambient lighting with light oak veneer panelling.
              </p>
            </div>
          </div>
          <div className="h-[480px] bg-[#0A0B0A] bg-[url('/homepageImages/section-3.3.jpg')] bg-no-repeat bg-cover bg-center rounded-lg">
            <div className="pl-[25px] mt-[25px]">
              <p className="text-[24px]">Robust Exterior</p>
              <p className="text-[16px] text-[#808080]">
                Durable steel structure clad in a variety of stunning finishes.
              </p>
            </div>
          </div>
          <div className="h-[480px] bg-[#0A0B0A] bg-[url('/homepageImages/section-3.4.jpg')] bg-no-repeat bg-cover bg-center rounded-lg">
            <div className="pl-[25px] mt-[25px]">
              <p className="text-[24px]">Expansive Glass</p>
              <p className="text-[16px] text-[#808080]">
                Aluminium framed floor to ceiling glass with bespoke sliding
                door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
