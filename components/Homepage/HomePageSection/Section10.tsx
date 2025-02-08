import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section10 = () => {
  return (
    <div className=" relative md:mt-[200px] mt-[60px]">
      <div className=" lg:absolute w-full flex items-center flex-col text-center top-[-10%]">
        <p className="text-[24px] lg:text-[72px] md:text-[52px] sm:text-[32px]">
          Space One
        </p>
        <p className="text-[18px] md:text-[24px] mt-[32px]">
          Available now in Australia.
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

      <div className="mt-[32px] md:mt-[60px] w-full">
        <Image
          className="w-full"
          src="/homepageImages/section-10.png"
          alt="Description of image"
          width={1200}
          height={800}
          layout="intrinsic"
        />
      </div>
      {/* <div className="h-[80px] absolute bottom-[0px] bg-gradient-to-t from-[#000000a4] from-0%  to-[100%] w-full via-transparent to-transparent backdrop-blur-sm"></div> */}
    </div>
  );
};

export default Section10;
