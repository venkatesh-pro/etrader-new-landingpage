import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mx-[24px] md:mx-[48px] md:mt-[160px] mt-[80px] flex flex-col items-center  justify-center !overflow-scroll">
      <div>
        <img src="/tick-green.svg" className="" alt="circle-plus-icon" />
      </div>

      <div className="mt-[40px]">
        <p className="text-[48px] font-[450]">Success</p>
      </div>

      <div className="mt-[40px]">
        <p className="text-[24px] font-[450] text-center">
          <span className="text-black">Your request has been received.</span>
          <br />
          <span className="text-light-silver">
            We’ll be in touch with the next steps.
          </span>
        </p>
      </div>

      <div className="mt-[120px]">
        <p className="text-[20px] font-[450] text-center">Stay Connected</p>
        <p className="text-[14px] font-[400] text-light-silver text-center">
          Be the first to receive the latest Space news, events and product
          updates.
        </p>
      </div>

      <div className="mt-[30px] w-full items-center justify-center flex">
        <Link
          href={"https://www.spacehaven.com.au/pages/brochure"}
          target="_blank"
          className="w-full text-center flex items-center justify-center sm:w-[312px] lapS:w-[342px] p-4 min-h-[60px] rounded-[12px] text-white bg-blue"
        >
          Get Updates
        </Link>
      </div>

      <div className="item flex-shrink-0 w-full h-full hidden md:flex items-center justify-center mt-[60px] ">
        <img
          src={"/ConfiguratorImages/popup/SO-FD-I-min.jpg"}
          className="object-cover w-full h-full"
          width={1000}
          height={1000}
          // priority
        />
      </div>

      <div className="mt-[40px] md:mt-[60px] mb-[118px]">
        <p className="text-[17px] font-[450] text-light-silver">
          Where thou art, that is home.
        </p>
      </div>
    </div>
  );
};

export default page;
