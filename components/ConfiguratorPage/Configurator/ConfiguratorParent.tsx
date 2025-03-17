"use client";

import React, { useEffect, useRef, useState } from "react";
import Configurator from "./Configurator";
import { ConfiguratorData, data } from "@/data";
import Slider from "../Slider/Slider";
import usePreloadImages from "@/hooks/usePreloadImages";
import { gsap } from "gsap/dist/gsap";
import FeatureModal from "../Modal/FeatureModal";
import FeatureModalCarousel from "../Modal/FeatureModalCarousel";
import ConfiguratorNavbar from "@/components/Navbar/ConfiguratorNavbar";
import ScrollPricing from "@/components/ScrollPricing/ScrollPricing";
import { calculateTotalPrice } from "@/utils/functions";

type Model = { name: string };
type Color = { name: string; imageFolderName: string };
type Orientation = { name: string };

const ConfiguratorParent = () => {
  const [configuratorData, setConfiguratorData] =
    useState<ConfiguratorData>(data);
  const [totalPrice, setTotalPrice] = useState(0);

  const [isImageChangeScroll, setIsImageChangeScroll] =
    useState<boolean>(false);
  const [currentModel, setCurrentModel] = useState("");
  const [isMirrored, setIsMirrored] = useState(false);

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenCarousel, setIsModalOpenCarousel] = useState(false);

  const [sliderImages, setSliderImages] = useState([
    "/ConfiguratorImages/BLACK COMPRESSED 16:25/16-black-1.jpg",
    "/ConfiguratorImages/BLACK COMPRESSED 16:25/16-black-2.jpg",
  ]);

  const generateSliderImages = (
    model: Model | undefined,
    color: Color | undefined,
    orientation: Orientation | undefined
  ) => {
    if (!color || !orientation || !model) return [];
    console.log("colorrrr", color);

    const basePath = `/ConfiguratorImages/${color.imageFolderName} COMPRESSED 16:25`;
    const mirroredPath = `/MIRRORED`;
    const orientationPath =
      orientation.name === "Standard layout" ? "" : mirroredPath;
    const modelPrefix = model.name === "Space One Plus" ? "25" : "16";

    return Array.from({ length: 2 }, (_, index) => {
      const imageIndex = index + 1;
      return `${basePath}${orientationPath}/${modelPrefix}-${color.imageFolderName.toLowerCase()}-${imageIndex}.jpg`;
    });
  };

  // const generateSliderImagesForInterior = (image: string) => {
  //   const basePath = `/ConfiguratorImages/INTERIOR COMPRESSED 16:25`;
  //   console.log({ image });

  //   if (isMirrored) {
  //     return [`${basePath}/MIRRORED/${image}`];
  //   } else {
  //     return [`${basePath}/${image}`];
  //   }
  // };

  const generateSliderImagesForInterior = () => {
    const basePath = `/ConfiguratorImages/INTERIOR COMPRESSED 16:25`;
    const modelPrefix = currentModel === "Space One Plus" ? "25" : "16";

    if (modelPrefix === "16") {
      if (isMirrored) {
        return [
          `${basePath}/MIRRORED/16-open.jpg`,
          `${basePath}/MIRRORED/16-wardrobe.jpg`,
          `${basePath}/MIRRORED/16-kitchen.jpg`,
        ];
      } else {
        return [
          `${basePath}/16-open.jpg`,
          `${basePath}/16-wardrobe.jpg`,
          `${basePath}/16-kitchen.jpg`,
        ];
      }
    } else {
      if (isMirrored) {
        return [
          `${basePath}/MIRRORED/25-open.jpg`,
          `${basePath}/MIRRORED/25-wardrobe.jpg`,
          `${basePath}/MIRRORED/25-kitchen.jpg`,
          `${basePath}/MIRRORED/25-wardrobe-bathroom.jpg`,
          `${basePath}/MIRRORED/25-kitchen-bathroom.jpg`,
        ];
      } else {
        return [
          `${basePath}/25-open.jpg`,
          `${basePath}/25-wardrobe.jpg`,
          `${basePath}/25-kitchen.jpg`,
          `${basePath}/25-wardrobe-bathroom.jpg`,
          `${basePath}/25-kitchen-bathroom.jpg`,
        ];
      }
    }
  };

  const imageStoreInStateFunction = () => {
    const selectedModel = configuratorData.chooseYourModel.find(
      (d) => d.isSelected
    );
    if (selectedModel) {
      setCurrentModel(selectedModel.name);
    }

    const selectedColor = configuratorData.chooseYourFinish.find(
      (d) => d.isSelected
    );
    const selectedOrientation = configuratorData.chooseYourOrientation.find(
      (d) => d.isSelected
    );
    if (selectedOrientation) {
      setIsMirrored(selectedOrientation.name !== "Standard layout");
    }

    // const isSolar = configuratorData.chooseYourEnergy.find((d) => d.isSelected);

    setSliderImages(
      generateSliderImages(selectedModel, selectedColor, selectedOrientation)
    );

    console.log(
      "fffff",
      generateSliderImages(selectedModel, selectedColor, selectedOrientation)
    );
  };

  useEffect(() => {
    if (configuratorData) {
      imageStoreInStateFunction();
    }
  }, [
    configuratorData.chooseYourModel,
    configuratorData.chooseYourFinish,
    configuratorData.chooseYourOrientation,
    isImageChangeScroll,
  ]);

  const imagesLoaded = usePreloadImages(sliderImages);
  console.log({ imagesLoaded });

  // useEffect(() => {
  //   console.log("changed");
  // }, [sliderImages]);

  // Ref for the Loading Overlay
  const loadingOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadingOverlayRef.current) {
      if (!imagesLoaded) {
        // When images start loading, fade in the loading overlay
        gsap.set(loadingOverlayRef.current, { display: "flex" }); // Ensure it's visible
        gsap.to(loadingOverlayRef.current, {
          opacity: 1,
          duration: 0.2,
        });
      } else {
        // When images are loaded, fade out the loading overlay
        gsap.to(loadingOverlayRef.current, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            gsap.set(loadingOverlayRef.current, { display: "none" });
          },
        });
      }
    }
  }, [imagesLoaded]);

  // new
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  // only cursor scroll
  // useEffect(() => {
  //   const handleScroll = (e: WheelEvent) => {
  //     if (scrollAreaRef.current) {
  //       scrollAreaRef.current.scrollTop += e.deltaY; // Access scrollTop safely
  //       e.preventDefault(); // Prevent default behavior
  //     }
  //   };

  //   const sliderElement = sliderRef.current;

  //   if (sliderElement) {
  //     sliderElement.addEventListener("wheel", handleScroll); // Attach event
  //   }

  //   return () => {
  //     if (sliderElement) {
  //       sliderElement.removeEventListener("wheel", handleScroll); // Cleanup
  //     }
  //   };
  // }, []);

  // with scroll as well as touch
  useEffect(() => {
    let touchStartY = 0; // Track the starting Y position
    let touchDeltaY = 0; // Track the movement delta
    let isTouching = false; // Flag for touch status

    const handleWheel = (e: WheelEvent) => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTop += e.deltaY; // Scroll based on wheel delta
        e.preventDefault(); // Prevent default browser scrolling
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!scrollAreaRef.current) return;
      touchStartY = e.touches[0].clientY; // Store the initial touch Y position
      isTouching = true; // Set touching to true
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!scrollAreaRef.current || !isTouching) return;

      const currentY = e.touches[0].clientY; // Get current touch Y position
      touchDeltaY = touchStartY - currentY; // Calculate touch delta
      scrollAreaRef.current.scrollTop += touchDeltaY; // Update scroll position
      touchStartY = currentY; // Reset start position for the next frame
      e.preventDefault(); // Prevent default touch behavior
    };

    const handleTouchEnd = () => {
      isTouching = false; // Reset the touch status
      touchDeltaY = 0; // Reset delta
    };

    const sliderElement = sliderRef.current;

    if (sliderElement) {
      // Add wheel and touch events
      sliderElement.addEventListener("wheel", handleWheel);
      sliderElement.addEventListener("touchstart", handleTouchStart);
      sliderElement.addEventListener("touchmove", handleTouchMove);
      sliderElement.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (sliderElement) {
        // Remove wheel and touch events
        sliderElement.removeEventListener("wheel", handleWheel);
        sliderElement.removeEventListener("touchstart", handleTouchStart);
        sliderElement.removeEventListener("touchmove", handleTouchMove);
        sliderElement.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  // Ensure the slider section doesn't shift due to browser behavior
  useEffect(() => {
    const fixSliderPosition = () => {
      if (sliderRef.current) {
        sliderRef.current.style.transform = "translateZ(0)";
      }
    };

    window.addEventListener("resize", fixSliderPosition);
    fixSliderPosition(); // Apply on mount

    return () => {
      window.removeEventListener("resize", fixSliderPosition);
    };
  }, []);
  useEffect(() => {
    console.log("changed=>>>");

    const totalPrice = calculateTotalPrice(configuratorData);
    setTotalPrice(totalPrice);
  }, [configuratorData]);
  return (
    <>
      {/* overlay component */}
      <ScrollPricing totalPrice={totalPrice}></ScrollPricing>

      {scrollAreaRef.current && (
        <ConfiguratorNavbar
          scrollAreaRef={scrollAreaRef as React.RefObject<HTMLDivElement>}
        />
      )}
      <div className="flex flex-col justify-between">
        {/* Slider Section */}
        <div
          className="sticky z-30 bg-white top-0 w-full desktop:min-w-[1242px] md:w-[72%] sm:h-[40vh] h-[280px] md:h-[100vh]"
          ref={sliderRef}
        >
          <Slider sliderImages={sliderImages} />
        </div>

        {/* Configurator Section */}
        <div
          className="md:mt-[0px] mt-[50px] overflow-y-auto h-[100vh] pt-[290px] md:pt-[50px] absolute z-20 desktop:w-[438px] desktopG:w-[28%] md:w-[28%] right-0 px-[28px] md:px-[48px] left-scroll-area"
          ref={scrollAreaRef}
        >
          <Configurator
            currentModel={currentModel}
            isMirrored={isMirrored}
            configuratorData={configuratorData}
            setConfiguratorData={setConfiguratorData}
            setSliderImages={setSliderImages}
            setIsImageChangeScroll={setIsImageChangeScroll}
            generateSliderImagesForInterior={generateSliderImagesForInterior}
            setIsModalOpen={setIsModalOpen}
            setIsModalOpenCarousel={setIsModalOpenCarousel}
            totalPrice={totalPrice}
          />
        </div>
      </div>
      {/* modal */}

      <FeatureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <FeatureModalCarousel
        isModalOpenCarousel={isModalOpenCarousel}
        setIsModalOpenCarousel={setIsModalOpenCarousel}
      />
    </>
  );
};

export default ConfiguratorParent;

//  <div className="relative w-full h-full lg:pl-[60px] md:pl-[20px] md:py-[20px] p-0 ">
