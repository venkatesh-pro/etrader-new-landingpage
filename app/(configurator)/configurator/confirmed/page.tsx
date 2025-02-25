import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col md:flex-row md:mt-[90px]">
      {/* <div className="max-w-[65%] h-[560px] pl-[60px]"> */}
      {/* <div className="lg:pl-[60px] h-[560px]">
        <img
          src="/ConfiguratorImages/popup/SO-FD-I-min.jpg"
          alt="image"
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className=" static top-0 left-0 w-full md:w-[68%]  sm:h-[40vh] h-[280px] md:h-full  z-10 md:z-auto bg-white">
        <div className="lg:pl-[60px]  md:pl-[20px] px-0 list flex h-full transition-transform duration-500 ease-in-out">
          <div className="item flex-shrink-0 w-full h-full flex items-center justify-center">
            <img
              src={"/ConfiguratorImages/popup/SO-FD-I-min.jpg"}
              className="object-cover w-full h-full"
              width={1000}
              height={1000}
              // priority
            />
          </div>
        </div>
      </div>
      {/* <div className="pt-[290px] sm:pt-[40vh] md:pt-0 md:w-[28%] h-full overflow-auto px-[28px] md:px-[48px] left-scroll-area"> */}
      <div className="md:ml-[48px] md:mr-[30px] px-[28px] md:px-0 md:mt-[0px] mt-[40px] ">
        <p className="lapL:text-[40px] lapS:text-[34px] sm:text-[32px] text-[28px]  leading-[30px]">
          Request Submitted
        </p>
        <p className="text-[20px] mt-[40px]">
          We’ll be in touch with the next steps.
        </p>
        <p className="text-[20px] text-[#808080] mt-[10px] md:w-[300px] break-words">
          In the meantime, feel free to reach out if you have any questions.
        </p>

        <div>
          <button className="bg-[#0196F6] text-white rounded-[12px] px-[25px] py-[8px] w-full max-w-[360px] mt-[60px] min-h-[60px] p-4">
            Get Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
