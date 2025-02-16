"use client";
import { gsap } from "gsap";
import React, { useLayoutEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section1",
        // markers: true,
        start: "top bottom-=200",
        toggleActions: "play none none reset",
      },
    });

    tl.fromTo(
      "#section1-text-1",
      { y: 5, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div id="section1">
      <div className="mx-[20px] md:mx-[30px] desktop:mx-[48px]">
        <h1 className="text-mobile-header-xl md:text-desktop-header-xl text-header-b mt-[60px] md:mt-[150px] desktop:mt-[227px] ">
          Space One
        </h1>
        <div className="mt-[30px] flex flex-col md:flex-row justify-between">
          <div id="section1-text-1">
            <p className="text-mobile-body-md md:text-desktop-body-xl">
              Two sizes. Tons of possibilities.
            </p>
            <p className="text-mobile-body-md md:text-desktop-body-xl text-color-dark">
              From $56,990 or $495/wk for 12 mo.<sup>1</sup>
            </p>
          </div>
          <div className="flex mt-[30px] md:mt-[0px]">
            <button
              className="text-[13px] md:text-[18px] w-[72px] h-[37px] md:h-[53px] md:w-[97px] bg-[#F2F2F3] rounded-[40px]"
              onClick={() => {
                document
                  .getElementById("design")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Design
            </button>
            <button
              className="text-[13px] md:text-[18px] h-[37px] w-[72px] md:h-[53px] md:w-[98px] bg-[#F2F2F3] ml-[15px] rounded-[40px]"
              onClick={() => {
                document
                  .getElementById("interior")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Interior
            </button>
            <button
              className="text-[13px] md:text-[18px] h-[37px] w-[98px] md:h-[53px] md:w-[134px] bg-[#F2F2F3] ml-[15px] rounded-[40px]"
              onClick={() => {
                document
                  .getElementById("tech-specs")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Tech Specs
            </button>
          </div>
        </div>
      </div>
      <div className="mx-[0px] md:mx-[30px] desktop:mx-[48px] mt-[40px] md:mt-[100px] ">
        <div className="h-[380px] md:h-full">
          <img
            src="/homepageImages/section-1.png"
            className="h-full w-full object-cover md:object-contain "
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
