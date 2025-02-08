import Image from "next/image";
import React from "react";

const Section7 = () => {
  return (
    <div className="px-[30px] md:px-[60px] md:mt-[140px] mt-[60px]">
      <p className="text-[24px] lg:text-[72px] md:text-[52px] sm:text-[32px]">
        Take a closer look inside.
      </p>
      <div className="mt-[32px] md:mt-[60px] w-full">
        <Image
          className="w-full"
          src="/homepageImages/section-7.jpg"
          alt="Description of image"
          width={1200}
          height={800}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default Section7;
