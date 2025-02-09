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
    {
      url: "/homepageImages/section-2.png",
      alt: "Sweden Photo Two",
    },
  ];

  return (
    <div className="mt-[100px]">
      <div>
        <h1 className="text-desktop-header-lg text-header-b text-center">
          Your everyday space, but so much more.
        </h1>
        <p className="text-desktop-body-lg mt-[40px] text-center text-color-dark">
          Extra room made easy, designed to grow with you and adapt to your
          environment.
        </p>
        <div className=" w-[100%]">
          <div className="mx-[210px] mt-[60px]  overflow-hidden ">
            <Carousel images={images} />
          </div>
          <div className="flex justify-between mx-[210px] mt-[90px]">
            <div className="max-w-[370px]">
              <hr className="border-divider-a border-[.5px]" />
              <div className="mt-[34px] ">
                <img src="/images/design.svg" alt="" />
              </div>
              <p className="max-w-[320px] mt-[10px] text-desktop-body-lg">
                <span>Design. </span>
                <span className="text-color-dark">
                  Customize your Space One. Choose your exterior color, layout,
                  and optional features.
                </span>
              </p>
            </div>
            <div className="max-w-[370px]">
              <hr className="border-divider-a border-[.5px]" />
              <div className="mt-[34px] ">
                <img src="/images/manufacturing.svg" alt="" />
              </div>
              <p className="max-w-[320px] mt-[10px] text-desktop-body-lg">
                <span>Manufacturing. </span>
                <span className="text-color-dark">
                  Prefabricated off-site to reduce assembly time and enhance
                  building quality.{" "}
                </span>
              </p>
            </div>
            <div className="max-w-[370px]">
              <hr className="border-divider-a border-[.5px]" />
              <div className="mt-[34px] ">
                <img src="/images/delivery.svg" alt="" />
              </div>
              <p className="max-w-[320px] mt-[10px] text-desktop-body-lg">
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
