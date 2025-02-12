import Carousel from "@/components/Carousel/Carousel";
import React from "react";

const Section2 = () => {
  const images = [
    {
      url: "/homepageImages/section-2.png",
      alt: "Sweden Photo One",
    },
    {
      url: "/homepageImages/section-2.png",
      alt: "Sweden Photo Two",
    },
  ];

  return (
    <div className="mt-[50px] md:mt-[100px]">
      <div>
        <h1 className="text-mobile-header-sm md:text-desktop-header-lg text-header-b text-center">
          Your everyday space, but so much more.
        </h1>
        <p className="text-mobile-body-md md:text-desktop-body-lg mt-[20px] md:mt-[40px] text-center text-color-dark">
          Extra room made easy, designed to grow with you and adapt to your
          environment.
        </p>
        <div className="w-[100%]">
          <div className="mx-[20px] md:mx-[210px] mt-[40px] md:mt-[60px]  overflow-hidden ">
            <Carousel images={images} />
          </div>
          <div className="flex flex-col md:flex-row justify-between mx-[20px] md:mx-[210px] mt-[60px] md:mt-[90px]">
            <div className="mt-[40px] md:mt-[0px] w-full md:max-w-[370px]">
              <hr className="border-divider-a border-[.5px]" />
              <div className="w-[25.5px] h-[29.17px] md:w-[34px] md:h-[38.89px] mt-[40px] md:mt-[34px] ">
                <img
                  src="/images/design.svg"
                  className="w-full h-full object-cover md:object-contain"
                  alt=""
                />
              </div>
              <p className="w-full md:max-w-[320px] mt-[10px] text-desktop-body-lg">
                <span>Design. </span>
                <span className="text-color-dark">
                  Customize your Space One. Choose your exterior color, layout,
                  and optional features.
                </span>
              </p>
            </div>
            <div className="mt-[40px] md:mt-[0px] w-full md:max-w-[370px]">
              <hr className="border-divider-a border-[.5px]" />
              <div className="w-[31.51px] h-[25.5px] md:w-[34px] md:h-[38.89px] mt-[40px] md:mt-[34px] ">
                {" "}
                <img
                  src="/images/manufacturing.svg"
                  alt=""
                  className="w-full h-full object-cover md:object-contain"
                />
              </div>
              <p className="w-full md:max-w-[320px] mt-[10px] text-desktop-body-lg">
                <span>Manufacturing. </span>
                <span className="text-color-dark">
                  Prefabricated off-site to reduce assembly time and enhance
                  building quality.{" "}
                </span>
              </p>
            </div>
            <div className="mt-[40px] md:mt-[0px] w-full md:max-w-[370px]">
              <hr className="border-divider-a border-[.5px]" />
              <div className="w-[22.5px] h-[28.3px] md:w-[34px] md:h-[38.89px] mt-[40px] md:mt-[34px] ">
                <img
                  src="/images/delivery.svg"
                  alt=""
                  className="object-cover md:object-contain"
                />
              </div>
              <p className="w-full md:max-w-[320px] mt-[10px] text-desktop-body-lg">
                <span>Delivery. </span>
                <span className="text-color-dark">
                  Your new Space One begins its journey from factory to site,
                  ready for the crane in.1{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
