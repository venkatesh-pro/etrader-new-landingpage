"use client";

import Carousel from "@/components/Carousel/Carousel";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const images = [
    {
      url: "/homepageImages/section-4.3.png",
      alt: "Sweden Photo One",
    },
    {
      url: "/homepageImages/section-4.3.png",
      alt: "Sweden Photo Two",
    },
  ];

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    gsap.utils
      .toArray([
        "#section4-text-1",
        "#section4-text-2",
        "#section4-text-3",
        "#section4-text-4",
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
              start: "top bottom-=150",
              toggleActions: "play none none reset",
            },
          }
        );
      });

    return () => {
      gsap.killTweensOf([
        "#section4-text-1",
        "#section4-text-2",
        "#section4-text-3",
        "#section4-text-4",
      ]);
    };
  }, []);
  return (
    <div className="mt-[80px] md:mt-[180px] ">
      <div className="">
        <div className="mx-[20px] md:mx-[30px] flex flex-col  md:items-center md:justify-center">
          <button className="text-[12px] md:text-[18px] w-[69px] h-[36px] md:h-[53px] md:w-[98px] border-[2px] border-black rounded-[35px] cursor-default">
            Interior
          </button>
          <h2 className="text-mobile-header-lg md:text-desktop-header-xl my-[20px] md:my-[40px]">
            All-new interior.
          </h2>
          <p
            id="section4-text-1"
            className="text-mobile-body-md md:text-desktop-body-xl max-w-[920px]"
          >
            Refined materials integrate seamlessly with smart automation{" "}
            <span className="text-color-dark">
              to create a reimagined environment that changes your perception of
              what a premium space should feel like.
            </span>
          </p>
        </div>

        <div className="mt-[60px] md:mt-[100px] md:mx-[30px] desktop:mx-[48px]">
          <div className="h-[260px] md:h-full">
            <img
              src="/homepageImages/section-4.png"
              className="h-full w-full object-cover md:object-contain"
              alt="image"
            />
          </div>
        </div>
        <div className="mt-[40px] md:mt-[140px] ">
          <div className="flex flex-col md:items-center">
            <div>
              <h3 className=" text-mobile-header-sm md:text-desktop-header-lg mx-[20px] lapS:mx-[30px] desktop:mt-[0px] ">
                Expansive architecture.
              </h3>
              <p
                id="section4-text-2"
                className="text-mobile-body-md md:text-desktop-body-lg max-w-[840px] mt-[30px] md:mt-[40px] mx-[20px] lapS:mx-[30px] desktop:mt-[0px] "
              >
                Space One models feature an undercover canopy, a spacious deck,
                and floor-to-ceiling glass that captures expansive views.{" "}
                <span className="text-color-dark">
                  Select layouts include a bathroom and a functional kitchen
                  with ample storage. Designed to surpass the lifespan of
                  conventional tiny homes, Space One models offer up to 33% more
                  width than shipping containers and up to 25% more ceiling
                  height than typical portable cabins, while remaining
                  crane-movable between locations. Set up in various
                  environments as premium short-term accommodation or a
                  versatile long-term space.<sup>6</sup>
                </span>
              </p>

              {/* this is repeated two time for responsivness */}
              <div className="md:hidden block mt-[80px] md:mt-[180px] mb-[60px] md:mb-[140px] h-[260px] md:h-full">
                <img
                  src="/homepageImages/section-4.1.png"
                  className="h-full w-full object-cover md:object-contain "
                  alt="image"
                />
              </div>
              <div
                id="section4-text-3"
                className="md:flex lapS:flex-row flex-col hidden justify-between max-w-[920px] mt-[100px] mx-[20px] lapS:mx-[30px] desktop:mt-[100px]"
              >
                <div className="min-w-[260px]">
                  <hr className="border-divider-a border-[.5px]" />
                  <p className="text-desktop-header-lg mt-[30px]">2x</p>
                  <p className="text-desktop-body-lg text-color-dark mt-[-10px]">
                    More Deck Area<sup>6</sup>
                  </p>
                </div>
                <div className="min-w-[260px] lapS:ml-[119px]  mt-[30px] lapS:mt-[0px]">
                  <hr className="border-divider-a border-[.5px]" />
                  <p className="text-desktop-header-lg mt-[30px]">33%</p>
                  <p className="text-desktop-body-lg text-color-dark mt-[-10px]">
                    Increased Depth<sup>6</sup>
                  </p>
                </div>
                <div className="min-w-[260px] lapS:ml-[119px] mt-[30px] lapS:mt-[0px]">
                  <hr className="border-divider-a border-[.5px]" />
                  <p className="text-desktop-header-lg mt-[30px]">25%</p>
                  <p className="text-desktop-body-lg text-color-dark mt-[-10px]">
                    Higher Ceiling<sup>6</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-[20px] md:mx-[30px] lapL:mx-[70px] desktop:mx-[210px] ">
          <div className="md:block hidden mt-[180px] mb-[140px] h-full">
            <img
              src="/homepageImages/section-4.1.png"
              className="h-full w-full object-contain "
              alt="image"
            />
          </div>
          {/* this is repeated two time for responsivness */}
          <div className=" md:hidden flex flex-col justify-between md:mt-[100px] ">
            <div className="md:min-w-[260px]">
              <hr className="border-divider-a border-[.5px]" />
              <p className="text-desktop-header-md md:text-desktop-header-lg mt-[30px]">
                2x
              </p>
              <p className="text-mobile-body-md md:text-desktop-body-lg text-color-dark mt-[-10px]">
                More Deck Area<sup>6</sup>
              </p>
            </div>
            <div className="md:min-w-[260px] md:ml-[119px] mt-[30px]">
              <hr className="border-divider-a border-[.5px]" />
              <p className="text-desktop-header-md md:text-desktop-header-lg mt-[30px]">
                33%
              </p>
              <p className="text-mobile-body-md md:text-desktop-body-lg text-color-dark mt-[-10px]">
                Increased Depth<sup>6</sup>
              </p>
            </div>
            <div className="md:min-w-[260px] md:ml-[119px] mt-[30px]">
              <hr className="border-divider-a border-[.5px]" />
              <p className="text-desktop-header-md md:text-desktop-header-lg mt-[30px]">
                25%
              </p>
              <p className="text-mobile-body-md md:text-desktop-body-lg text-color-dark mt-[-10px]">
                Higher Ceiling<sup>6</sup>
              </p>
            </div>
          </div>
          <h3 className="mx-[20px] md:mx-[0px] md:block hidden text-desktop-header-lg">
            Amenities for every occasion.
          </h3>

          <div className="mt-[60px] custom1209:flex justify-between md:items-center">
            <div className="">
              <div className="custom1209:max-w-[850px] overflow-hidden mx-[-20px] md:mx-[0px] ">
                <Carousel images={images} />
              </div>
              <h3 className="md:hidden block text-mobile-header-sm md:text-desktop-header-lg mt-[40px] md:mt-[0px]">
                Amenities for every occasion.
              </h3>
            </div>
            <div className=" flex flex-col ">
              <div className="custom1209:ml-[30px] desktop:ml-[89px]">
                <hr className="block mt-[40px] custom1209:hidden border-divider-a" />
                <div className="w-[31.5px] h-[24.09px] md:w-[42px] md:h-[32.12px] mt-[40px] custom1209:mt-[0px]">
                  <img src="/images/open-plan.svg" alt="image" />
                </div>
                <p className="text-mobile-body-md md:text-desktop-body-lg mt-[10px] md:mt-[10px]">
                  Open Plan.{" "}
                  <span className="text-color-dark">
                    A seamless, elegant, and versatile canvas for personalized
                    interior design.{" "}
                  </span>
                </p>
              </div>
              <div className="custom1209:ml-[30px] desktop:ml-[89px] custom1209:mt-[30px] desktop:mt-[59px]">
                <hr className="block mt-[40px] custom1209:hidden border-divider-a" />
                <div className="w-[21.35px] h-[29.58px] md:w-[28.46px] md:h-[39.44px] mt-[40px] custom1209:mt-[0px]">
                  <img src="/images/wardrobe.svg" alt="image" />
                </div>
                <p className="text-mobile-body-md md:text-desktop-body-lg mt-[10px] md:mt-[10px]">
                  Wardrobe.{" "}
                  <span className="text-color-dark">
                    High-quality open shelving, hanging space, and smart
                    storage.
                  </span>
                </p>
              </div>
              <div className="custom1209:ml-[30px] desktop:ml-[89px] custom1209:mt-[30px] desktop:mt-[59px]">
                <hr className="block mt-[40px] custom1209:hidden border-divider-a" />
                <div className="w-[28.5px] h-[27px] md:w-[38px] md:h-[36px] mt-[40px] custom1209:mt-[0px]">
                  <img src="/images/kitchen.svg" alt="image" />
                </div>
                <p className="text-mobile-body-md md:text-desktop-body-lg mt-[10px] md:mt-[10px]">
                  Kitchen.{" "}
                  <span className="text-color-dark">
                    Spacious, flowing design with seamless cooking, dining, and
                    entertaining space.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="my-[80px] md:my-[180px] flex flex-col-reverse custom1209:flex-row custom1209:items-center mx-[-20px] md:mx-[0px]">
            <div className="mx-[20px] md:mx-[0px] mr-[40px] md:mr-[40px] custom1209:max-w-[360px]">
              <p className="text-desktop-body-xl md:text-desktop-header-sm">
                Space that makes you feel good.
              </p>
              <p
                id="section4-text-4"
                className="text-mobile-body-md md:text-desktop-body-lg text-color-dark mt-[15px] "
              >
                Step inside, close the sliding door and experience the vast
                silence offered by double glazed toughened glass. Queue up your
                favorite songs and listen as your space turns into your own
                private sound studio. <sup>3</sup>
              </p>
            </div>
            <div className="h-[260px] mb-[40px] custom1209:mb-[0px] md:h-full w-full">
              {" "}
              <img
                src="/homepageImages/section-4.2.png"
                className="h-full w-full object-cover md:object-contain "
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
