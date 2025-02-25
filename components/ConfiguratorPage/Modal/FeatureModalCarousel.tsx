import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { data } from "@/data";

interface FeatureModelCarouselProps {
  isModalOpenCarousel: boolean;
  setIsModalOpenCarousel: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeatureModalCarousel = ({
  isModalOpenCarousel,
  setIsModalOpenCarousel,
}: FeatureModelCarouselProps) => {
  const sliderData = data.optionalUpgradesForLayout;
  const isMobile = global.innerWidth <= 768;
  const [isVisible, setIsVisible] = useState(isModalOpenCarousel);

  useEffect(() => {
    if (isModalOpenCarousel) {
      setIsVisible(true);
    } else {
      // Wait for fade-out animation before unmounting
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isModalOpenCarousel]);

  if (!isVisible) return null;

  return (
    <div
      className="flex overflow-y-auto bg-[#00000079] backdrop-blur-[3px] fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 min-h-[100%] md:min-h-[calc(100%-1rem)] max-h-full cursor-pointer"
      onClick={() => setIsModalOpenCarousel(false)} // Close modal when clicking on the background
    >
      <div
        className={`w-[100vw] ${
          isModalOpenCarousel ? "animate-fadeIn" : "animate-fadeOut"
        }`}
      >
        <div
          className="relative w-full max-h-full  no-scrollbar cursor-default"
          onClick={(e) => e.stopPropagation()} // Prevent click events on Swiper from closing the modal
        >
          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            slidesPerView={1.75}
            spaceBetween={0} // Space between slides
            initialSlide={0} // Start from the first slide
            keyboard={true}
            centeredSlides={true} // Keep the active slide centered
            // centeredSlidesBounds={true} // Respect the bounds to prevent the jump
            navigation
            breakpoints={{
              320: { slidesPerView: 1.2 },
              480: { slidesPerView: 1.3 },
              768: { slidesPerView: 1.4 },
              1024: { slidesPerView: 1.75 },
              1503: { slidesPerView: 1.85 },
              1579: { slidesPerView: 1.9 },
              1692: { slidesPerView: 2.0 },
            }}
            pagination={{ clickable: true }}
            className="swiper-container"
            style={
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "--swiper-pagination-color": "#ffffff",
                "--swiper-pagination-bullet-inactive-color": isMobile
                  ? "#5D5F63"
                  : "#80808077",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "10px",
                "--swiper-pagination-bullet-horizontal-gap": "10px",
              } as React.CSSProperties
            }
            mousewheel={{
              sensitivity: 10, // Adjust sensitivity (lower value = slower scrolling)
              forceToAxis: true, // Scroll only on the intended axis
              releaseOnEdges: true, // Allow scrolling to stop at edges when loop is false
              thresholdTime: 1000,
            }}
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={index} className="mr-[20px]">
                <div className="bg-white flex-shrink-0 max-w-[840px] flex flex-col-reverse md:flex-col rounded-[24px] relative">
                  {/* Slide Content */}
                  <div className="flex items-center">
                    <p className="p-[15px] pl-[30px] text-[24px] md:text-[32px]">
                      {item.name}
                    </p>
                    <button
                      onClick={() => setIsModalOpenCarousel(false)}
                      type="button"
                      className="w-[40px] h-[40px] md:w-[52px] md:h-[52px] flex absolute rounded-full top-[13px] right-[20px] text-black text-sm justify-center items-center bg-[#00000026] md:bg-white"
                    >
                      <svg
                        className="w-[18.19px] h-[18.19px] text-white md:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <img
                      src={item.image}
                      alt={`Slide ${index}`}
                      className="object-cover w-full h-full md:rounded-t-[0px] rounded-t-[24px] md:rounded-b-[24px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* <div className="swiper-button-next">Next</div> */}
            {/* <div className="swiper-button-prev">Prev</div> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeatureModalCarousel;
