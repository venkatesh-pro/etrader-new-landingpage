// import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section6 = () => {
  return (
    <div className="px-[30px] mt-[60px] md:px-[60px] md:mt-[140px] flex flex-col-reverse lg:flex-row">
      <div className="lg:w-[50%] mt-[42px] lg:mt-0 lg:pr-[80px]">
        <p className="text-[20px] md:text-[24px] text-[#808080]">Interior</p>
        <p className="text-[26px] leading-[35px] md:text-[42px] md:leading-[50px]">
          Clean lines, spacious ceiling and premium materials.{" "}
        </p>
        <p className="mt-[32px] md:mt-[40px]">
          Space One interiors reflect the luminous qualities of the barefoot
          luxury experience. Accommodation design features include textured
          veneer wall panels, light oak floors, and a selection of base finishes
          and fixtures in blackened steel. Each model has an undercover canopy
          and floor to ceiling glass capturing expansive views, while some
          feature a wardrobe and small kitchen.
        </p>
        <div className="mt-[32px] md:mt-[60px]">
          <Link
            href={"#"}
            className="  bg-[#474746] rounded-[100px] px-[20px] py-[12px]"
          >
            Explore Accessories{" "}
          </Link>
        </div>
      </div>
      <div className="lg:w-[50%]">
        {/* <Image
          src="/homepageImages/section-6.jpg"
          alt="Description of image"
          width={1200}
          height={800}
          layout="intrinsic"
        /> */}
        <img src="homepageImages/section-6.jpg" alt="image" />
      </div>
    </div>
  );
};

export default Section6;
