import Link from "next/link";
import React from "react";

const Section1 = () => {
  return (
    <div className="h-[500px] md:h-[700px] lg:h-[calc(100vh-50px)] bg-[url('/homepageImages/section-1.png')] bg-no-repeat bg-cover bg-center relative ">
      <div className="h-[100%] flex flex-col justify-center px-[30px] md:px-[60px]">
        <h1 className="text-[48px] md:text-[72px]">Space One</h1>
        <p className="text-[18px] md:text-[24px] mt-[17px]">
          A new era of Space.
        </p>
        <p className="text-[18px] md:text-[24px] text-[#808080]">
          Rent from $495/wk (min 12-months){" "}
          <sup className="text-sm ml-[-7px]">1</sup>
        </p>
        <div className="mt-[32px]">
          <Link
            href={"/configurator"}
            className="  bg-[#0197F7] rounded-[100px] px-[20px] py-[12px]"
          >
            Configure Now
          </Link>
        </div>
      </div>
      <div className="h-[80px] absolute bottom-[0px] bg-gradient-to-t from-[#000000a4] from-0%  to-[100%] w-full via-transparent to-transparent backdrop-blur-sm"></div>

      {/* <div className="absolute bottom-0 h-[160px] w-full bg-gradient-to-t from-white/70 via-transparent to-transparent backdrop-blur-lg"></div> */}
    </div>
  );
};

export default Section1;
