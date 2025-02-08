// import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section4 = () => {
  return (
    <div className="px-[30px] mt-[60px] md:px-[60px] md:mt-[140px] flex flex-col-reverse lg:flex-row">
      <div className="lg:w-[50%] mt-[42px] lg:mt-0 lg:pr-[80px]">
        <p className="text-[20px] md:text-[24px] text-[#808080]">Sustainability</p>
        <p className="text-[26px] leading-[35px] md:text-[42px] md:leading-[50px]">
          {" "}
          Setting a new standard for modular manufacturing.
        </p>
        <p className="mt-[32px] md:mt-[40px]">
          Space One sets a new standard for sustainable living.
          Precision-engineered to deliver the robust performance of a
          commercial-grade building and to surpass the lifespan of traditional
          construction, enabling faster and more efficient development and
          expansion than ever before with minimal material wastage.
          <sup className="text-[10px] md:text-sm">2</sup>
        </p>
        <div className="mt-[32px] md:mt-[60px]">
          <Link
            href={"#"}
            className="  bg-[#474746] rounded-[100px] px-[20px] py-[12px]"
          >
            Feature Details
          </Link>
        </div>
      </div>
      <div className="lg:w-[50%]">
        {/* <Image
          src="/homepageImages/section-4.jpg"
          alt="Description of image"
          // width={1200}
          // height={800}
          className="object-cover"
          layout="fill"
        /> */}
        <img src="homepageImages/section-4.jpg" alt="image" />
      </div>
    </div>
  );
};

export default Section4;
