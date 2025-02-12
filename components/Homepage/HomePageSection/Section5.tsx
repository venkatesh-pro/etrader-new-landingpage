import React from "react";

const Section5 = () => {
  return (
    <div className="bg-background-alt-a">
      <div className="mt-[80px] mx-[20px] md:mx-[0px] md:mt-[180px] md:flex items-center justify-center flex-col">
        <h2 className="text-mobile-header-lg md:text-desktop-header-xl mb-[20px] md:my-[40px]">
          Introducing SpaceOS
        </h2>
        <p className="text-mobile-body-md md:text-desktop-body-lg max-w-[920px] md:text-center">
          Customize your space in more ways than ever,{" "}
          <span className="text-color-dark">
            set your climate, adjust the lights, and play your favorite songs.
            And with SpaceOS, the things you do every day become even more
            magical.
          </span>
        </p>
      </div>
      <div className="mt-[60px] md:mt-[100px] md:mx-[48px]">
        <div className="h-[340px] mb-[40px] md:mb-[0px] md:h-full">
          {/* replace to video */}
          <img
            src="/homepageImages/section-5.png"
            className="h-full w-full object-cover md:object-contain "
            alt="image"
          />{" "}
        </div>
      </div>
      <div className="mx-[20px] md:mx-[210px]">
        <h3 className="text-mobile-header-sm md:text-desktop-header-lg mt-[40px] md:mt-[140px]">
          The keys to even more control.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[119px] mt-[30px] md:mt-[80px]">
          <div className="md:max-w-[370px]">
            <hr className="border-divider-a border-[.5px]" />
            <div className="w-[28.64px] h-[22.71px] md:w-[38.19px] md:h-[30.28px] mt-[40px] md:mt-[30px]">
              <img src="/images/speakers.svg" alt="image" />
            </div>
            <p className="text-desktop-body-lg mt-[10px] md:max-w-[320px]">
              <span>Retail.</span>
              <span className="text-color-dark">
                Food outlets and popups, ideal for maximizing exposure in
                high-traffic locations.
              </span>
            </p>
          </div>
          <div className="md:max-w-[370px]">
            <hr className="border-divider-a border-[.5px] mt-[40px] md:mt-[0px]" />
            <div className="w-[29.25px] h-[29.25px] md:w-[39px] md:h-[39px] mt-[40px] md:mt-[30px]">
              <img src="/images/climate.svg" alt="image" />
            </div>
            <p className="text-desktop-body-lg mt-[10px] md:max-w-[320px]">
              <span>Accommodation.</span>
              <span className="text-color-dark">
                Extra living spaces or hospitality designed for rentals and
                tourism retreats.{" "}
              </span>
            </p>
          </div>
          <div className="md:max-w-[370px]">
            <hr className="border-divider-a border-[.5px] mt-[40px] md:mt-[0px]" />
            <div className="w-[29.25px] h-[26.86px] md:w-[39px] md:h-[35.81px] mt-[40px] md:mt-[30px]">
              <img src="/images/ambience.svg" alt="image" />
            </div>
            <p className="text-desktop-body-lg mt-[10px] md:max-w-[320px]">
              <span>Commercial.</span>
              <span className="text-color-dark">
                Secluded space for special events, exhibitions, brand
                activations, and functions.{" "}
              </span>
            </p>
          </div>
          <div className="md:max-w-[370px] md:mt-[80px]">
            <hr className="border-divider-a border-[.5px] mt-[40px] md:mt-[0px]" />
            <div className="w-[31.41px] h-[28.56px] md:w-[41.88px] md:h-[38.08px] mt-[40px] md:mt-[30px]">
              <img src="/images/weather-map.svg" alt="image" />
            </div>
            <p className="text-desktop-body-lg mt-[10px] md:max-w-[320px]">
              <span>Commercial.</span>
              <span className="text-color-dark">
                Secluded space for special events, exhibitions, brand
                activations, and functions.{" "}
              </span>
            </p>
          </div>
          <div className="md:max-w-[370px] md:mt-[80px]">
            <hr className="border-divider-a border-[.5px] mt-[40px] md:mt-[0px]" />
            <div className="w-[32.84px] h-[16.5px] md:w-[43.79px] md:h-[22px] mt-[40px] md:mt-[30px]">
              <img src="/images/guest-access.svg" alt="image" />
            </div>
            <p className="text-desktop-body-lg mt-[10px] md:max-w-[320px]">
              <span>Commercial.</span>
              <span className="text-color-dark">
                Secluded space for special events, exhibitions, brand
                activations, and functions.{" "}
              </span>
            </p>
          </div>
          <div className="md:max-w-[370px] md:mt-[80px]">
            <hr className="border-divider-a border-[.5px] mt-[40px] md:mt-[0px]" />
            <div className="w-[25.47px] h-[25.5px] md:w-[33.96px] md:h-[34px] mt-[40px] md:mt-[30px]">
              <img src="/images/ota-updates.svg" alt="image" />
            </div>
            <p className="text-desktop-body-lg mt-[10px] md:max-w-[320px]">
              <span>Commercial.</span>
              <span className="text-color-dark">
                Secluded space for special events, exhibitions, brand
                activations, and functions.{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[80px] md:mt-[180px]">
        <div className="h-[340px] mb-[40px] md:mb-[0px] md:h-full">
          <img
            src="/homepageImages/section-5.1.png"
            className="h-full w-full object-cover md:object-contain "
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
