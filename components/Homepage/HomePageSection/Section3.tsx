import React from "react";

const Section3 = () => {
  return (
    <div className="mt-[80px] md:mt-[180px]">
      <div className="bg-background-b text-white ">
        <div className="pt-[80px] md:pt-[180px] md:flex flex-col justify-center items-center w-full">
          <div className="mx-[20px] md:mx-[30px] desktop:mx-[0px] md:flex items-center flex-col">
            <button className="text-[12px] md:text-[18px] h-[36px] w-[69px] md:h-[53px] md:w-[97px] border-[2px] border-white rounded-[35px]">
              Design
            </button>
            <h2 className="text-mobile-header-lg md:text-desktop-header-xl mt-[20px] md:mt-[40px]">
              Building of the future.
            </h2>
            <p className="text-mobile-body-md md:text-desktop-body-xl max-w-[920px] md:text-center mt-[20px] md:mt-[40px]">
              Space One is Space’s most advanced modular building ever.{" "}
              <span className="text-color-dark">
                Available in two sizes and five stunning finishes. It promises
                an unparalleled living experience.
              </span>
            </p>
          </div>
          {/* </div> */}
          <div className="mt-[60px] md:mt-[100px] md:mx-[30px] desktop:mx-[48px]">
            <div className="h-[380px] md:h-full">
              <img
                src="/homepageImages/section-3.png"
                className="h-full w-full object-cover md:object-contain"
                alt="image"
              />
            </div>
          </div>
          <div className="mx-[20px] md:mx-[30px] desktop:mx-[0px] mt-[60px] md:mt-[140px]">
            <h3 className="text-mobile-header-sm md:text-desktop-header-lg">
              An evolution in prefab.
            </h3>
            <p className=" text-mobile-body-md md:text-desktop-body-lg max-w-[840px] mt-[30px] md:mt-[40px]">
              Space’s advanced modular buildings allow for a multitude of uses.
              <span className="text-color-dark">
                Unlike traditional construction methods with intensive on-site
                labor and lengthy timelines, Space modular buildings are
                manufactured in-house by machine and delivered to site ready for
                installation, minimizing material wastage and potential weather
                delays. As a result, Space One allows property owners and
                developers the flexibility to scale and increase footprint with
                ease. Space One is an evolution in manufacturing of sustainable
                space. <sup>6</sup>
              </span>
            </p>

            <div className="flex flex-col lapS:flex-row justify-between desktop:max-w-[920px] mt-[60px] md:mt-[100px]">
              <div className="min-w-[260px]">
                <hr className="border-divider-b border-[.5px]" />
                <p className="text-desktop-header-md md:text-desktop-header-lg mt-[30px]">
                  80%
                </p>
                <p className="text-mobile-body-md md:text-desktop-body-lg text-color-dark mt-[-10px]">
                  Faster to Construct<sup>6</sup>
                </p>
              </div>
              <div className="min-w-[260px] lapS:ml-[119px] mt-[30px] lapS:mt-[0px]">
                <hr className="border-divider-b border-[.5px]" />
                <p className="text-desktop-header-md md:text-desktop-header-lg mt-[30px]">
                  65%
                </p>
                <p className="text-mobile-body-md md:text-desktop-body-lg text-color-dark mt-[-10px]">
                  Less Material Wastage<sup>6</sup>
                </p>
              </div>
              <div className="min-w-[260px] lapS:ml-[119px] mt-[30px] lapS:mt-[0px]">
                <hr className="border-divider-b border-[.5px]" />
                <p className="text-desktop-header-md md:text-desktop-header-lg mt-[30px]">
                  24%
                </p>
                <p className="text-mobile-body-md md:text-desktop-body-lg text-color-dark mt-[-10px]">
                  Superior Insulation<sup>6</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[20px] md:mx-[30px] lapL:mx-[70px] desktop:mx-[210px]">
          <div className="h-[340px] md:h-full my-[60px] md:my-[180px]">
            <img
              src="/homepageImages/section-3.1.png"
              className="h-full w-full object-cover desktop:object-contain"
              alt="image"
            />
          </div>
          <h3 className="text-mobile-header-sm md:text-desktop-header-lg">
            A truly welcoming experience.
          </h3>

          {/* need to work on video responsive */}
          <div className="mt-[60px]  custom1209:flex justify-between items-center">
            <div className="custom1209:min-w-[850px] w-full md:h-[700px] bg-red-500 overflow-auto">
              <video
                controls
                autoPlay
                loop
                className="h-full object-cover"
                src="/homepageImages/section-3-video.mp4"
              ></video>
            </div>
            <div className="flex flex-col justify-between">
              <div className=" custom1209:ml-[30px] desktop:ml-[89px]">
                <hr className="block mt-[60px] custom1209:hidden border-divider-b" />
                <div className="w-[25.5px] h-[28.49px] md:w-[34px] md:h-[37.98px] mt-[40px] custom1209:mt-[0px]">
                  <img src="/images/canopy.svg" alt="image" />
                </div>
                <p className="text-mobile-body-md md:text-desktop-body-lg mt-[10px] md:mt-[0px]">
                  Canopy.{" "}
                  <span className="text-color-dark">
                    Futuristic facade design with undercover deck and durable
                    textured composite cladding.
                  </span>
                </p>
              </div>
              <div className="custom1209:ml-[30px] desktop:ml-[89px]">
                <hr className="block mt-[40px] custom1209:mt-[0px] custom1209:hidden border-divider-b" />
                <div className="w-[31.46px] h-[28.5px] md:w-[41.95px] md:h-[38px] mt-[40px] custom1209:mt-[0px]">
                  <img src="/images/subframe.svg" alt="image" />
                </div>
                <p className="text-mobile-body-md md:text-desktop-body-lg mt-[10px] md:mt-[0px]">
                  Subframe.
                  <span className="text-color-dark">
                    Integrated floor system that sits above terrain as its own
                    base for improved stability.{" "}
                  </span>
                </p>
              </div>
              <div className="custom1209:ml-[30px] desktop:ml-[89px]">
                <hr className="block mt-[40px] custom1209:mt-[0px] custom1209:hidden border-divider-b" />
                <div className="w-[28.17px] h-[28.49px] md:w-[37.56px] md:h-[37.98px] mt-[40px] custom1209:mt-[0px]">
                  <img src="/images/net-zero.svg" alt="image" />
                </div>
                <p className="text-mobile-body-md md:text-desktop-body-lg mt-[10px] md:mt-[0px]">
                  Net Zero.
                  <span className="text-color-dark">
                    Store energy generated by solar roof or from the grid with
                    Powerwall 3 and solar array.3
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[80px] md:my-[180px] flex custom1209:flex-row flex-col-reverse  custom1209:items-center">
            <div className=" md:mr-[40px] custom1209:max-w-[360px]">
              <p className="text-desktop-body-xl md:text-desktop-header-sm">
                Crane in and connect.
              </p>
              <p className="text-mobile-body-md md:text-desktop-body-lg text-color-dark">
                Space One is designed to move with you. Its precision-engineered
                steel structure is lightweight yet incredibly strong, allowing
                for seamless crane placement on most terrains, flat or sloped.
                Space is redefining the way sustainable buildings are made.
                <sup>1</sup>
              </p>
            </div>
            <div className="h-[260px] mb-[40px] custom1209:mb-[0px] md:h-full w-full">
              <img
                src="/homepageImages/section-3.2.png"
                className="h-full w-full object-cover md:object-contain "
                alt="image"
              />
            </div>
          </div>
          <div className="mt-[80px] md:mt-[0px] flex flex-col custom1209:flex-row custom1209:items-center">
            <div className="h-[260px] mb-[40px] custom1209:mb-[0px] md:h-full w-full">
              <img
                src="/homepageImages/section-3.3.png"
                className="h-full w-full object-cover md:object-contain "
                alt="image"
              />
            </div>
            <div className=" custom1209:mr-[0px] custom1209:ml-[40px] custom1209:max-w-[360px]">
              <p className="text-desktop-body-xl md:text-desktop-header-sm">
                Built for safety.
              </p>
              <p className="text-mobile-body-md md:text-desktop-body-lg text-color-dark mt-[15px] md:mt-[0px]">
                Engineered from the ground up for safety and durability, Space
                One features a precision-engineered light-gauge steel frame for
                superior stability and fire-resilience. Its elevated floor
                system adapts to flat or uneven terrain, minimizing vegetation
                clearing and preserving the natural landscape.
              </p>
            </div>
          </div>

          <div className="mx-[20px] md:mx-[0px]">
            <h3 className="mt-[120px] md:mt-[180px] text-mobile-header-sm md:text-desktop-header-lg">
              Adding value to growing industries.
            </h3>

            <div className="flex flex-col custom1209:flex-row justify-between mt-[40px] md:mt-[80px]">
              <div className="custom1209:max-w-[370px]">
                <hr className="border-divider-b border-[.5px]" />
                <div className="mt-[40px] custom1209:mt-[30px]">
                  <img src="/images/retail.svg" alt="image" />
                </div>
                <p className="text-desktop-body-lg mt-[10px] custom1209:max-w-[320px]">
                  <span>Retail.</span>{" "}
                  <span className="text-color-dark">
                    Food outlets and popups, ideal for maximizing exposure in
                    high-traffic locations.
                  </span>
                </p>
              </div>
              <div className="custom1209:max-w-[370px]">
                <hr className="border-divider-b border-[.5px] mt-[40px] custom1209:mt-[0px]" />
                <div className="mt-[40px] custom1209:mt-[30px]">
                  <img src="/images/accommodation.svg" alt="image" />
                </div>
                <p className="text-desktop-body-lg mt-[10px] custom1209:max-w-[320px]">
                  <span>Accommodation.</span>{" "}
                  <span className="text-color-dark">
                    Extra living spaces or hospitality designed for rentals and
                    tourism retreats.{" "}
                  </span>
                </p>
              </div>
              <div className="custom1209:max-w-[370px]">
                <hr className="border-divider-b border-[.5px] mt-[40px] custom1209:mt-[0px]" />
                <div className="mt-[40px] custom1209:mt-[30px]">
                  <img src="/images/commercial.svg" alt="image" />
                </div>
                <p className="text-desktop-body-lg mt-[10px] custom1209:max-w-[320px]">
                  <span>Commercial.</span>{" "}
                  <span className="text-color-dark">
                    Secluded space for special events, exhibitions, brand
                    activations, and functions.{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[60px] md:mt-[140px]">
          <div className="h-[340px] md:h-full">
            <img
              src="/homepageImages/section-3.4.png"
              className="h-full w-full object-cover md:object-contain"
              alt="image"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
