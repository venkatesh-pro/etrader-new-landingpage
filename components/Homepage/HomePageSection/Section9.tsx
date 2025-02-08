import Image from "next/image";
import React from "react";

const Section9 = () => {
  return (
    <div className="px-[30px] md:px-[60px] md:mt-[140px] mt-[60px]">
      <p className="text-[24px] lg:text-[72px] md:text-[52px] sm:text-[32px]">
        Unlock the potential of your parcel.
      </p>
      <p className="text-[15px] md:text-[17px] mt-[32px] md:mt-[50px]">
        Designed and manufactured in Sydney, Australia. Space One is available
        in two sizes, each providing the space and amenities for a multitude of
        uses.
      </p>
      <div className="mt-[32px] md:mt-[60px] w-full">
        <Image
          className="w-full"
          src="/homepageImages/section-9.png"
          alt="Description of image"
          width={1200}
          height={800}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default Section9;
