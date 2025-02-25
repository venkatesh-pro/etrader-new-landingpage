import React, { useEffect, useState, useRef } from "react";

interface SliderProps {
  sliderImages: string[];
}

const Slider: React.FC<SliderProps> = ({ sliderImages }) => {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(0); // To store the X position where the touch started
  const touchEndX = useRef(0); // To store the X position where the touch ended

  // Adjust active index if the sliderImages array length changes
  useEffect(() => {
    setActive((prevActive) =>
      prevActive >= sliderImages.length ? sliderImages.length - 1 : prevActive
    );
  }, [sliderImages]);

  if (!sliderImages || sliderImages.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        No images available
      </div>
    );
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swipe left
      setActive((prevActive) =>
        prevActive + 1 >= sliderImages.length ? 0 : prevActive + 1
      );
    } else if (diff < -50) {
      // Swipe right
      setActive((prevActive) =>
        prevActive - 1 < 0 ? sliderImages.length - 1 : prevActive - 1
      );
    }
  };

  const translateValue = `translateX(-${active * 100}%)`;

  return (
    <div
      className="slider relative w-full h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="list flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: translateValue }}
      >
        {sliderImages.map((image, i) => (
          <div
            key={i}
            className="item flex-shrink-0 w-full h-full flex items-center justify-center"
          >
            <img
              src={image}
              alt={`Slide ${i}`}
              className="object-cover w-full h-full"
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </div>
      {sliderImages.length > 1 && (
        <div className="buttons absolute top-1/2 left-[5%] transform -translate-y-1/2 w-[90%] flex justify-between">
          <button
            onClick={() =>
              setActive((prevActive) =>
                prevActive - 1 < 0 ? sliderImages.length - 1 : prevActive - 1
              )
            }
            className="w-[52px] h-[52px] rounded-full bg-[#00000064] flex items-center justify-center"
          >
            <img
              src="/images/arrow-left.svg"
              className="w-[20.73px] h-[15.33px]"
              alt="Previous"
            />
          </button>
          <button
            onClick={() =>
              setActive((prevActive) =>
                prevActive + 1 >= sliderImages.length ? 0 : prevActive + 1
              )
            }
            className="w-[52px] h-[52px] rounded-full bg-[#00000064] flex items-center justify-center"
          >
            <img
              src="/images/arrow-right.svg"
              className="w-[20.73px] h-[15.33px]"
              alt="Next"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
