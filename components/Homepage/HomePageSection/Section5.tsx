"use client";

import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    gsap.utils
      .toArray([
        "#section5-text-1",
        "#section5-text-2",
        "#section5-text-3",
        "#section5-text-4",
      ])
      .forEach((el) => {
        const target = el as HTMLElement;

        gsap.fromTo(
          target,
          { y: 5, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: target,
              // markers: true,
              start: "top bottom-=200",
              toggleActions: "play none none reset",
            },
          }
        );
      });

    return () => {
      gsap.killTweensOf([
        "#section5-text-1",
        "#section5-text-2",
        "#section5-text-3",
        "#section5-text-4",
      ]);
    };
  }, []);

  return (
    <div className="">
      <div className="mx-[20px] md:mx-[30px] desktop:mx-[0px] pt-[80px]  md:pt-[180px] md:flex items-center justify-center flex-col">
        <h2 className="text-mobile-header-lg md:text-desktop-header-xl mb-[20px] md:my-[40px]">
          Introducing SpaceOS
        </h2>
        <p
          id="section5-text-1"
          className="text-mobile-body-md md:text-desktop-body-lg max-w-[920px] md:text-center"
        >
          Customize your space in more ways than ever,{" "}
          <span className="text-color-dark">
            set your climate, adjust the lights, and play your favorite songs.
            And with SpaceOS, the things you do every day become even more
            magical.
          </span>
        </p>
      </div>
      <div className="mt-[60px] md:mt-[100px] md:mx-[30px] desktop:mx-[48px]">
        <div className="h-[340px] mb-[40px] md:mb-[0px] md:h-full">
          {/* replace to video */}
          <img
            src="/homepageImages/section-5.png"
            className="h-full w-full object-cover md:object-contain "
            alt="image"
          />{" "}
        </div>
      </div>
      <div className="mx-[20px] md:mx-[30px] lapL:mx-[70px] desktop:mx-[210px]">
        <h3 className="text-mobile-header-sm md:text-desktop-header-lg mt-[40px] md:mt-[140px]">
          The keys to even more control.
        </h3>

        <div
          id="section5-text-2"
          className="grid grid-cols-1 md:grid-cols-2 lapS:grid-cols-3 mt-[30px] md:mt-[80px] md:gap-[30px] lapS:gap-[30px]"
        >
          <div className="lapS:max-w-[370px]">
            <hr className="border-divider-a border-[.5px]" />
            <div className="w-[28.64px] h-[22.71px] md:w-[38.19px] md:h-[30.28px] mt-[40px] md:mt-[30px]">
              <img src="/images/speakers.svg" alt="image" />
            </div>
            <p className="text-mobile-body-md md:text-desktop-body-lg mt-[10px] md:max-w-[320px]">
              <span>Speakers.</span>{" "}
              <span className="text-color-dark">
                Enjoy your favorite music, media, and handsfree calls with 2
                built-in speakers.<sup>3</sup>
              </span>
            </p>
          </div>
          <div className="lapS:max-w-[370px]">
            <hr className="border-divider-a border-[.5px] mt-[40px] md:mt-[0px]" />
            <div className="w-[29.25px] h-[29.25px] md:w-[39px] md:h-[39px] mt-[40px] md:mt-[30px]">
              <img src="/images/climate.svg" alt="image" />
            </div>
            <p className="text-mobile-body-md md:text-desktop-body-lg mt-[10px] md:max-w-[320px]">
              <span>Climate.</span>{" "}
              <span className="text-color-dark">
                Air inside your space is pure and just the way you like it with
                a smart HVAC system.4
              </span>
            </p>
          </div>
          <div className="lapS:max-w-[370px]">
            <hr className="border-divider-a border-[.5px] mt-[40px] md:mt-[0px]" />
            <div className="w-[29.25px] h-[26.86px] md:w-[39px] md:h-[35.81px] mt-[40px] md:mt-[30px]">
              <img src="/images/ambience.svg" alt="image" />
            </div>
            <p className="text-mobile-body-md md:text-desktop-body-lg mt-[10px] md:max-w-[320px]">
              <span>Ambience.</span>{" "}
              <span className="text-color-dark">
                Adjust intensity of the lights from super bright to dim with
                dynamic fade after dusk.4
              </span>
            </p>
          </div>
          <div className="lapS:max-w-[370px] lapS:mt-[80px]">
            <hr className="border-divider-a border-[.5px] mt-[40px] md:mt-[0px]" />
            <div className="w-[31.41px] h-[28.56px] md:w-[41.88px] md:h-[38.08px] mt-[40px] md:mt-[30px]">
              <img src="/images/weather-map.svg" alt="image" />
            </div>
            <p className="text-mobile-body-md md:text-desktop-body-lg mt-[10px] md:max-w-[320px]">
              <span>Weather Map.</span>{" "}
              <span className="text-color-dark">
                Check the live weather where you are to better plan your daily
                schedule.4
              </span>
            </p>
          </div>
          <div className="lapS:max-w-[370px] lapS:mt-[80px]">
            <hr className="border-divider-a border-[.5px] mt-[40px] md:mt-[0px]" />
            <div className="w-[32.84px] h-[16.5px] md:w-[43.79px] md:h-[22px] mt-[40px] md:mt-[30px]">
              <img src="/images/guest-access.svg" alt="image" />
            </div>
            <p className="text-mobile-body-md md:text-desktop-body-lg mt-[10px] md:max-w-[320px]">
              <span>Guest Access.</span>{" "}
              <span className="text-color-dark">
                Securely issue digital keys with a set expiry date and option to
                limit access.4
              </span>
            </p>
          </div>
          <div className="lapS:max-w-[370px] lapS:mt-[80px]">
            <hr className="border-divider-a border-[.5px] mt-[40px] md:mt-[0px]" />
            <div className="w-[25.47px] h-[25.5px] md:w-[33.96px] md:h-[34px] mt-[40px] md:mt-[30px]">
              <img src="/images/ota-updates.svg" alt="image" />
            </div>
            <p className="text-mobile-body-md md:text-desktop-body-lg mt-[10px] md:max-w-[320px]">
              <span>OTA Updates.</span>{" "}
              <span className="text-color-dark">
                New features and updates making your space safer and more
                capable over time.4
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[80px] md:mt-[180px]">
        <div className="h-[340px] md:h-full">
          <img
            src="/homepageImages/section-5.1.png"
            className="h-full w-full object-cover md:object-contain "
            alt="image"
          />
        </div>
      </div>
      <div id="tech-specs"></div>
    </div>
  );
};

export default Section5;
