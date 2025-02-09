import React from "react";

const Section5 = () => {
  return (
    <div className="bg-background-alt-a">
      <div className="mt-[180px] flex items-center justify-center flex-col">
        <h2 className="text-desktop-header-xl my-[40px]">
          Introducing SpaceOS
        </h2>
        <p className="text-desktop-body-lg max-w-[920px] text-center">
          Customize your space in more ways than ever,{" "}
          <span className="text-color-dark">
            set your climate, adjust the lights, and play your favorite songs.
            And with SpaceOS, the things you do every day become even more
            magical.
          </span>
        </p>
      </div>
      <div className="mt-[100px] mx-[48px]">
        <div>
          {/* replace to video */}
          <img
            src="/homepageImages/section-5.png"
            className="h-full w-full object-contain "
            alt="image"
          />{" "}
        </div>
      </div>
      <div className="mx-[210px]">
        <h3 className="text-desktop-header-lg mt-[140px]">
          The keys to even more control.
        </h3>

        <div className="grid grid-cols-3 gap-x-[119px] mt-[80px]">
          <div className="max-w-[370px]">
            <hr className="border-divider-a border-[.5px]" />
            <div className="mt-[30px]">
              <img src="/images/speakers.svg" alt="image" />
            </div>
            <p className="text-desktop-body-lg mt-[10px] max-w-[320px]">
              <span>Retail.</span>
              <span className="text-color-dark">
                Food outlets and popups, ideal for maximizing exposure in
                high-traffic locations.
              </span>
            </p>
          </div>
          <div className="max-w-[370px]">
            <hr className="border-divider-a border-[.5px]" />
            <div className="mt-[30px]">
              <img src="/images/climate.svg" alt="image" />
            </div>
            <p className="text-desktop-body-lg mt-[10px] max-w-[320px]">
              <span>Accommodation.</span>
              <span className="text-color-dark">
                Extra living spaces or hospitality designed for rentals and
                tourism retreats.{" "}
              </span>
            </p>
          </div>
          <div className="max-w-[370px]">
            <hr className="border-divider-a border-[.5px]" />
            <div className="mt-[30px]">
              <img src="/images/ambience.svg" alt="image" />
            </div>
            <p className="text-desktop-body-lg mt-[10px] max-w-[320px]">
              <span>Commercial.</span>
              <span className="text-color-dark">
                Secluded space for special events, exhibitions, brand
                activations, and functions.{" "}
              </span>
            </p>
          </div>
          <div className="max-w-[370px] mt-[80px]">
            <hr className="border-divider-a border-[.5px]" />
            <div className="mt-[30px]">
              <img src="/images/weather-map.svg" alt="image" />
            </div>
            <p className="text-desktop-body-lg mt-[10px] max-w-[320px]">
              <span>Commercial.</span>
              <span className="text-color-dark">
                Secluded space for special events, exhibitions, brand
                activations, and functions.{" "}
              </span>
            </p>
          </div>
          <div className="max-w-[370px] mt-[80px]">
            <hr className="border-divider-a border-[.5px]" />
            <div className="mt-[30px]">
              <img src="/images/guest-access.svg" alt="image" />
            </div>
            <p className="text-desktop-body-lg mt-[10px] max-w-[320px]">
              <span>Commercial.</span>
              <span className="text-color-dark">
                Secluded space for special events, exhibitions, brand
                activations, and functions.{" "}
              </span>
            </p>
          </div>
          <div className="max-w-[370px] mt-[80px]">
            <hr className="border-divider-a border-[.5px]" />
            <div className="mt-[30px]">
              <img src="/images/ota-updates.svg" alt="image" />
            </div>
            <p className="text-desktop-body-lg mt-[10px] max-w-[320px]">
              <span>Commercial.</span>
              <span className="text-color-dark">
                Secluded space for special events, exhibitions, brand
                activations, and functions.{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[180px]">
        <div>
          <img
            src="/homepageImages/section-5.1.png"
            className="h-full w-full object-contain "
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
