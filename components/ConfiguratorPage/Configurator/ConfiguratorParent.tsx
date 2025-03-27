"use client";

import React, { useEffect, useRef, useState } from "react";
import Configurator from "./Configurator";
import { ConfiguratorData, data } from "@/data";
import Slider from "../Slider/Slider";
// import usePreloadImages from "@/hooks/usePreloadImages";
// import { gsap } from "gsap/dist/gsap";
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
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  // const [navbarHeight] = useState(42);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenCarousel, setIsModalOpenCarousel] = useState(false);

  const BRAKE_POINT = 640;

  const [sliderImages, setSliderImages] = useState([
    "/ConfiguratorImages/BLACK_COMPRESSED_16_25/16-black-1.jpg",
    "/ConfiguratorImages/BLACK_COMPRESSED_16_25/16-black-2.jpg",
  ]);

  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const hasScrolled = useRef(false);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= BRAKE_POINT);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically calculate navbar height with a delay to ensure rendering
  // useEffect(() => {
  //   const calculateHeight = () => {
  //     if (navbarRef.current) {
  //       // const height = navbarRef.current.offsetHeight;
  //       setNavbarHeight(height);
  //     }
  //   };
  //   calculateHeight();
  //   window.addEventListener("resize", calculateHeight);
  //   return () => window.removeEventListener("resize", calculateHeight);
  // }, [isMobile, isNavbarVisible]);

  // Scroll to top on mount with a delay to ensure ref is ready
  useEffect(() => {
    const scrollToTop = () => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTop = 0;
        setIsNavbarVisible(true);
      }
    };
    setTimeout(scrollToTop, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  // Handle navbar visibility on scroll (mobile only)
  useEffect(() => {
    if (!isMobile) {
      setIsNavbarVisible(true);
      return;
    }

    const handleScroll = () => {
      if (scrollAreaRef.current) {
        const currentScrollY = scrollAreaRef.current.scrollTop;
        hasScrolled.current = true;

        if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
          setIsNavbarVisible(false);
        } else if (currentScrollY === 0) {
          setIsNavbarVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    const scrollElement = scrollAreaRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isMobile]);

  // Wheel and touch handling (desktop and mobile)
  useEffect(() => {
    let touchStartY = 0;
    let touchDeltaY = 0;
    let isTouching = false;

    const handleWheel = (e: WheelEvent) => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };

    const handleNavbarWheel = (e: WheelEvent) => {
      if (scrollAreaRef.current && !isMobile) {
        scrollAreaRef.current.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!scrollAreaRef.current) return;
      touchStartY = e.touches[0].clientY;
      isTouching = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!scrollAreaRef.current || !isTouching) return;
      const currentY = e.touches[0].clientY;
      touchDeltaY = touchStartY - currentY;
      scrollAreaRef.current.scrollTop += touchDeltaY;
      touchStartY = currentY;
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      isTouching = false;
      touchDeltaY = 0;
    };

    const sliderElement = sliderRef.current;
    const navbarElement = navbarRef.current;

    if (sliderElement) {
      sliderElement.addEventListener("wheel", handleWheel);
      sliderElement.addEventListener("touchstart", handleTouchStart);
      sliderElement.addEventListener("touchmove", handleTouchMove);
      sliderElement.addEventListener("touchend", handleTouchEnd);
    }

    if (navbarElement && !isMobile) {
      navbarElement.addEventListener("wheel", handleNavbarWheel);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("wheel", handleWheel);
        sliderElement.removeEventListener("touchstart", handleTouchStart);
        sliderElement.removeEventListener("touchmove", handleTouchMove);
        sliderElement.removeEventListener("touchend", handleTouchEnd);
      }
      if (navbarElement && !isMobile) {
        navbarElement.removeEventListener("wheel", handleNavbarWheel);
      }
    };
  }, [isMobile]);

  // Image generation functions
  const generateSliderImages = (
    model: Model | undefined,
    color: Color | undefined,
    orientation: Orientation | undefined
  ) => {
    if (!color || !orientation || !model) return [];
    const basePath = `/ConfiguratorImages/${color.imageFolderName}_COMPRESSED_16_25`;
    const mirroredPath = `/MIRRORED`;
    const orientationPath =
      orientation.name === "Standard layout" ? "" : mirroredPath;
    const modelPrefix = model.name === "Space One Plus" ? "25" : "16";

    return Array.from({ length: 3 }, (_, index) => {
      const imageIndex = index + 1;
      return `${basePath}${orientationPath}/${modelPrefix}-${color.imageFolderName.toLowerCase()}-${imageIndex}.jpg`;
    });
  };

  const generateSliderImagesForInterior = (image: string) => {
    const selectedBathroom = configuratorData.bathroom.find(
      (d) => d.isSelected
    );
    const basePath = `/ConfiguratorImages/INTERIOR_COMPRESSED_16_25`;

    if (isMirrored) {
      if (selectedBathroom?.name === "Bathroom") {
        if (image === "25-open.jpg") return [`${basePath}/MIRRORED/${image}`];
        else if (image === "25-wardrobe.jpg")
          return [`${basePath}/MIRRORED/25-wardrobe-bathroom.jpg`];
        else if (image === "25-kitchen.jpg")
          return [`${basePath}/MIRRORED/25-kitchen-bathroom.jpg`];
      } else {
        return [`${basePath}/MIRRORED/${image}`];
      }
    } else {
      if (selectedBathroom?.name === "Bathroom") {
        if (image === "25-open.jpg") return [`${basePath}/${image}`];
        else if (image === "25-wardrobe.jpg")
          return [`${basePath}/25-wardrobe-bathroom.jpg`];
        else if (image === "25-kitchen.jpg")
          return [`${basePath}/25-kitchen-bathroom.jpg`];
      } else {
        return [`${basePath}/${image}`];
      }
    }
    return [];
  };

  const generateSolarImages = (image: string) => {
    const basePath = `/ConfiguratorImages/SOLAR`;
    return [`${basePath}/${image}`];
  };

  const generateEssentialImages = (image: string) => {
    const basePath = `/ConfiguratorImages/ESSENTIALS`;
    return [`${basePath}/${image}`];
  };

  const imageStoreInStateFunction = () => {
    const selectedModel = configuratorData.chooseYourModel.find(
      (d) => d.isSelected
    );
    if (selectedModel) setCurrentModel(selectedModel.name);

    const selectedColor = configuratorData.chooseYourFinish.find(
      (d) => d.isSelected
    );
    const selectedOrientation = configuratorData.chooseYourOrientation.find(
      (d) => d.isSelected
    );
    if (selectedOrientation)
      setIsMirrored(selectedOrientation.name !== "Standard layout");

    setSliderImages(
      generateSliderImages(selectedModel, selectedColor, selectedOrientation)
    );
  };

  useEffect(() => {
    if (configuratorData) imageStoreInStateFunction();
  }, [
    configuratorData.chooseYourModel,
    configuratorData.chooseYourFinish,
    configuratorData.chooseYourOrientation,
    isImageChangeScroll,
  ]);

  // const imagesLoaded = usePreloadImages(sliderImages);

  // // Loading overlay
  // const loadingOverlayRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (loadingOverlayRef.current) {
  //     if (!imagesLoaded) {
  //       gsap.set(loadingOverlayRef.current, { display: "flex" });
  //       gsap.to(loadingOverlayRef.current, { opacity: 1, duration: 0.2 });
  //     } else {
  //       gsap.to(loadingOverlayRef.current, {
  //         opacity: 0,
  //         duration: 0.2,
  //         onComplete: () =>
  //           gsap.set(loadingOverlayRef.current, { display: "none" }),
  //       });
  //     }
  //   }
  // }, [imagesLoaded]);

  // Scroll and touch handling
  useEffect(() => {
    let touchStartY = 0;
    let touchDeltaY = 0;
    let isTouching = false;

    const handleWheel = (e: WheelEvent) => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!scrollAreaRef.current) return;
      touchStartY = e.touches[0].clientY;
      isTouching = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!scrollAreaRef.current || !isTouching) return;
      const currentY = e.touches[0].clientY;
      touchDeltaY = touchStartY - currentY;
      scrollAreaRef.current.scrollTop += touchDeltaY;
      touchStartY = currentY;
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      isTouching = false;
      touchDeltaY = 0;
    };

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener("wheel", handleWheel);
      sliderElement.addEventListener("touchstart", handleTouchStart);
      sliderElement.addEventListener("touchmove", handleTouchMove);
      sliderElement.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("wheel", handleWheel);
        sliderElement.removeEventListener("touchstart", handleTouchStart);
        sliderElement.removeEventListener("touchmove", handleTouchMove);
        sliderElement.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  // Fix slider position
  useEffect(() => {
    const fixSliderPosition = () => {
      if (sliderRef.current)
        sliderRef.current.style.transform = "translateZ(0)";
    };
    window.addEventListener("resize", fixSliderPosition);
    fixSliderPosition();
    return () => window.removeEventListener("resize", fixSliderPosition);
  }, []);

  // Calculate total price
  useEffect(() => {
    const totalPrice = calculateTotalPrice(configuratorData);
    setTotalPrice(totalPrice);
  }, [configuratorData]);

  return (
    <>
      {/* {!isMobile && <ConfiguratorNavbar />} */}
      <div className="relative min-h-screen m-0 p-0">
        {/* Navbar */}
        <div
          ref={navbarRef}
          className={`sticky top-0 left-0 w-full z-40 bg-white transition-transform duration-300 m-0 p-0 ${
            isMobile && !isNavbarVisible ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <ConfiguratorNavbar />
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-between gap-0 m-0 p-0">
          {/* Slider Section */}
          <div
            ref={sliderRef}
            className={`${
              isMobile
                ? `fixed left-0 w-full h-[252px] z-30 bg-white transition-[top] duration-300 ease-in-out top-[42px] m-0 p-0`
                : "sticky top-0 w-full desktop:min-w-[1242px] lapS:w-[72%] sm:h-[380px] h-[252px] lapS:h-[100vh] desktopG:w-[72vw] z-30 bg-white m-0 p-0"
            }`}
            style={isMobile ? { top: isNavbarVisible ? `${42}px` : "0px" } : {}}
          >
            <Slider sliderImages={sliderImages} />
          </div>

          {/* Scrollable Configurator Section */}
          <div
            ref={scrollAreaRef}
            className={`overflow-y-auto absolute top-0 h-[100vh] z-20 desktop:w-[438px] desktopG:w-[28%] lapS:w-[28%] lapS:right-0 left-scroll-area w-full m-0 pt-[332px] sm:pt-[460px] lapS:pt-[140px]`}
            // style={!isMobile ? { paddingTop: `11${navbarHeight}px` } : {}}
          >
            <div className="px-[28px] desktop:px-[48px] desktopG:px-[48px] ">
              <Configurator
                currentModel={currentModel}
                isMirrored={isMirrored}
                configuratorData={configuratorData}
                setConfiguratorData={setConfiguratorData}
                setSliderImages={setSliderImages}
                setIsImageChangeScroll={setIsImageChangeScroll}
                generateSliderImagesForInterior={
                  generateSliderImagesForInterior
                }
                generateSolarImages={generateSolarImages}
                generateEssentialImages={generateEssentialImages}
                setIsModalOpen={setIsModalOpen}
                setIsModalOpenCarousel={setIsModalOpenCarousel}
                totalPrice={totalPrice}
              />
            </div>
            <ScrollPricing totalPrice={totalPrice} />
          </div>
        </div>

        {/* Modals */}
        <FeatureModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <FeatureModalCarousel
          isModalOpenCarousel={isModalOpenCarousel}
          setIsModalOpenCarousel={setIsModalOpenCarousel}
        />
      </div>
    </>
  );
};

export default ConfiguratorParent;
