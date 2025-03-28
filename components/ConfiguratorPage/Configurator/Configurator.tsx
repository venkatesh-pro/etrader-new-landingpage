"use client";
import { formatNumberToCurrency } from "@/utils/functions";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ConfiguratorData } from "@/data";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

import { useGSAP } from "@gsap/react";
import InputField from "@/components/InputField/InputField";
import { useForm } from "react-hook-form";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

interface ConfiguratorProps {
  currentModel: string;
  isMirrored: boolean;
  configuratorData: ConfiguratorData;
  setConfiguratorData: (data: ConfiguratorData) => void;
  setSliderImages: (images: string[]) => void;
  setIsImageChangeScroll: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpenCarousel: React.Dispatch<React.SetStateAction<boolean>>;
  generateSliderImagesForInterior: (image: string) => string[];
  generateSolarImages: (image: string) => string[];
  generateEssentialImages: (image: string) => string[];
  totalPrice: number;
}

const Configurator: React.FC<ConfiguratorProps> = ({
  currentModel,
  isMirrored,
  configuratorData,
  setConfiguratorData,
  setSliderImages,
  setIsImageChangeScroll,
  generateSliderImagesForInterior,
  generateSolarImages,
  generateEssentialImages,
  setIsModalOpen,
  // setIsModalOpenCarousel,
  totalPrice,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitFunction = async () => {
    try {
      // console.log("data", data);

      window.location.href = "/configurator/confirmed";
    } catch (error) {
      console.log(error);
    }
  };
  const fadeOutImages = (onComplete?: () => void) => {
    gsap.to(".slider .list .item img", {
      duration: 0.2,
      opacity: 0,
      onComplete,
    });
  };

  const fadeInImages = () => {
    requestAnimationFrame(() => {
      gsap.fromTo(
        ".slider .list .item img",
        { opacity: 0 },
        { opacity: 1, duration: 0.2 }
      );
    });
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section3",
        start: "top center",
        end: "bottom-=25% center",
        scrub: true,
        // markers: true,
        scroller: ".left-scroll-area",
        onEnter: () => {
          console.log("Entered section3", currentModel);

          let selectedLayout;
          if (currentModel === "Space One") {
            selectedLayout = configuratorData.chooseYourLayoutFor16.find(
              (layout) => layout.isSelected
            );
          } else {
            selectedLayout = configuratorData.chooseYourLayoutFor25.find(
              (layout) => layout.isSelected
            );
          }
          console.log({ selectedLayout });

          // console.log({ selectedLayout });

          // setSliderImages(generateSliderImagesForInterior());
          fadeOutImages(() => {
            setSliderImages(
              generateSliderImagesForInterior(selectedLayout!.image)
            );
            fadeInImages();
          });
        },
        onLeave: () => {
          console.log("Left section3");
          // setIsImageChangeScroll((prev: boolean) => !prev);

          fadeOutImages(() => {
            setIsImageChangeScroll((prev: boolean) => !prev);
            // If this causes a new image set, fade them in after
            fadeInImages();
          });
        },
        onEnterBack: () => {
          console.log("Re-entering section3 from below");
          // setSliderImages([
          //   "/ConfiguratorImages/INTERIOR COMPRESSED 16:25/16-open.jpg",
          //   "/ConfiguratorImages/INTERIOR COMPRESSED 16:25/16-wardorbe.jpg",
          // ]);

          // setSliderImages(generateSliderImagesForInterior());

          // const selectedLayout = configuratorData.chooseYourLayoutFor16.find(
          //   (layout) => layout.isSelected
          // );
          let selectedLayout;
          if (currentModel === "Space One") {
            selectedLayout = configuratorData.chooseYourLayoutFor16.find(
              (layout) => layout.isSelected
            );
          } else {
            selectedLayout = configuratorData.chooseYourLayoutFor25.find(
              (layout) => layout.isSelected
            );
          }
          // console.log({ selectedLayout });

          fadeOutImages(() => {
            setSliderImages(
              generateSliderImagesForInterior(selectedLayout!.image)
            );

            fadeInImages();
          });
        },
        onLeaveBack: () => {
          console.log("Leaving section3 from above");

          // setIsImageChangeScroll((prev: boolean) => {
          //   console.log({ prev, currentModel, isMirrored });
          //   return !prev;
          // });

          fadeOutImages(() => {
            setIsImageChangeScroll((prev: boolean) => {
              console.log({ prev, currentModel, isMirrored });
              return !prev;
            });
            fadeInImages();
          });
        },
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section5tl2",
        // start: "top+=50% center+=45%",
        // end: "bottom bottom-=10%",
        // start: "top+=50% bottom-=10%",
        // end: "bottom+10% bottom-=5%",
        start: "top 96%",
        end: "bottom 20%",
        once: true,
        // markers: true,
        scroller: ".left-scroll-area",
        onEnter: () => {
          const tl = gsap.timeline();

          // Show loading spinner for 0.5s
          tl.to("#section5tl2-loader-container", {
            display: "block",
          });
          tl.to("#loading-spinner-1", {
            opacity: 1,
            duration: 0.5,
          });
          tl.to("#loading-spinner-1", {
            opacity: 0,
            display: "none",
          });
          tl.to("#section5", {
            display: "block",
            opacity: 1,
            duration: 0.5,
            // delay: 0.5,
          }); // Fade in section
        },
      },
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section5tl3-trigger",
        // start: "center-=30% center",
        // end: "bottom bottom",
        start: "top 80%",
        end: "bottom 20%",
        once: true,
        // markers: true,
        scroller: ".left-scroll-area",
        onEnter: () => {
          // alert("hi");
          const tl = gsap.timeline();

          tl.to("#section5tl3-loader-container", {
            display: "block",
          });
          tl.to("#loading-spinner-2", {
            opacity: 1,
            duration: 0.5,
          });
          tl.to("#loading-spinner-2", {
            opacity: 0,
            display: "none",
          });

          tl.to("#section5tl3", {
            display: "block",
            opacity: 1,
            duration: 0.5,
            // delay: 5.5,
          });
        },
      },
    });
    // ScrollTrigger.create({
    //   trigger: "#section5tl3-trigger", // The element before tl3
    //   start: "top 96%",
    //   end: "bottom 20%",
    //   once: true, // Ensures it runs only once
    //   markers: true,
    //   onEnter: () => {
    //     // Show loading animation
    //     alert("hi");
    //     gsap.to("#loading-spinner-2", {
    //       opacity: 1,
    //       duration: 1,
    //       onComplete: () => {
    //         // Hide loading and reveal tl3
    //         gsap.set("#loading-spinner-2", {
    //           display: "none",
    //           pointerEvents: "none",
    //         });
    //         gsap.set("#section5tl3", { pointerEvents: "auto" });

    //         // Start tl3 animation
    //         let tl3 = gsap.timeline();
    //         tl3.to("#section5tl3", { opacity: 1, duration: 1 }); // Fade in tl3
    //         // .to("#tl3-content", { y: 0, opacity: 1, duration: 1 }); // Animate content
    //       },
    //     });
    //   },
    // });
    return () => {
      tl.kill();
      tl2.kill();
      tl3.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    currentModel,
    isMirrored,
    configuratorData.chooseYourLayoutFor16,
    configuratorData.chooseYourLayoutFor25,
    configuratorData.bathroom,
    configuratorData,
  ]);

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // Delay recalculation slightly to ensure DOM is updated
  }, [configuratorData]);

  // useEffect(() => {
  //   const section5 = document.querySelector("#section5");

  //   if (section5) {
  //     const observer = new MutationObserver((mutations) => {
  //       mutations.forEach((mutation) => {
  //         if (
  //           mutation.attributeName === "style" &&
  //           getComputedStyle(section5).display === "block"
  //         ) {
  //           setTimeout(() => {
  //             ScrollTrigger.refresh();
  //           }, 100);
  //         }
  //       });
  //     });

  //     observer.observe(section5, {
  //       attributes: true,
  //       attributeFilter: ["style"],
  //     });

  //     return () => observer.disconnect();
  //   }
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     ScrollTrigger.refresh();
  //   }, 100);
  // }, [configuratorData]);

  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const [currentInterior, setCurrentInterior] = useState("");

  useEffect(() => {
    if (currentModel === "Space One") {
      const selectedInterior = configuratorData.chooseYourLayoutFor16.find(
        (d) => d.isSelected
      );

      setCurrentInterior(selectedInterior?.name ?? "");
    } else {
      const selectedInterior = configuratorData.chooseYourLayoutFor25.find(
        (d) => d.isSelected
      );

      setCurrentInterior(selectedInterior?.name ?? "");
    }
  }, [
    configuratorData.chooseYourLayoutFor16,
    configuratorData.chooseYourLayoutFor25,
    currentModel,
  ]);

  // useeffect for the solar
  useEffect(() => {
    const solar = configuratorData.solar.find((d) => d.isSelected);

    if (solar?.name === "Solar Package") {
      fadeOutImages(() => {
        setSliderImages(generateSolarImages(solar!.image));
        fadeInImages();
      });
    } else {
      fadeOutImages(() => {
        setIsImageChangeScroll((prev: boolean) => !prev);
        // If this causes a new image set, fade them in after
        fadeInImages();
      });
    }
  }, [configuratorData.solar]);

  // useeffect for the essentials

  const [essentialNameSelected, setEssentialNameSelected] = useState("");
  useEffect(() => {
    const essentials = configuratorData.essentials.find(
      (d) => d.name === essentialNameSelected
    );
    console.log({ essentialNameSelected });

    if (essentialNameSelected === "Translucent glass") {
      fadeOutImages(() => {
        setSliderImages(generateEssentialImages(essentials!.image));
        fadeInImages();
      });
    } else if (essentialNameSelected === "Sliding door insect screen") {
      fadeOutImages(() => {
        setSliderImages(generateEssentialImages(essentials!.image));
        fadeInImages();
      });
    } else {
      fadeOutImages(() => {
        setIsImageChangeScroll((prev: boolean) => !prev);
        // If this causes a new image set, fade them in after
        fadeInImages();
      });
    }
  }, [essentialNameSelected, configuratorData.essentials]);

  // useEffect for bathroom upgrades
  useEffect(() => {
    const selectedBathroom = configuratorData.bathroom.find(
      (d) => d.isSelected
    );

    if (selectedBathroom?.name === "No Bathroom") {
      const updatedData = {
        ...configuratorData,
        bathroomUpgrades: configuratorData.bathroomUpgrades.map((d) => ({
          ...d,
          isSelected: false, // Set all upgrades to false
        })),
      };
      setConfiguratorData(updatedData); // Update the state
    }
  }, [configuratorData.bathroom]);

  // useEffect for bathroom
  useEffect(() => {
    let selectedInterior;
    if (currentModel === "Space One") {
      selectedInterior = configuratorData.chooseYourLayoutFor16.find(
        (d) => d.isSelected
      );
    } else {
      selectedInterior = configuratorData.chooseYourLayoutFor25.find(
        (d) => d.isSelected
      );
    }

    if (selectedInterior?.name === "Open Plan") {
      const updatedData = {
        ...configuratorData,
        bathroom: configuratorData.bathroom.map((d) => ({
          ...d,
          isSelected: d.name === "No Bathroom", // True for "No Bathroom", false for "Bathroom"
        })),
      };
      setConfiguratorData(updatedData); // Update the state
    }
  }, [
    configuratorData.chooseYourLayoutFor16,
    configuratorData.chooseYourLayoutFor25,
  ]);

  return (
    <>
      {/* section 1 */}
      <section className="section section1 " id="section1">
        <span className="text-dark-red text-[17px]">New</span>
        <h1 className="text-mobile-header-lg font-[450] leading-[50px] mt-[10px]">
          Customize your Space One
        </h1>
        <p className="text-desktop-body-xl font-[450] mt-[30px]">
          <span>Make it yours.</span>
          <span className="text-light-silver">
            {" "}
            Configure your exterior and interior layout.
          </span>
        </p>
        <div>
          <p className="text-[18px] font-[400] text-silver mt-[20px]">
            Available now in the following states:
          </p>

          <ul className="list-disc font-[400] text-silver list-inside mt-[10px]">
            <li>
              <span className="ml-[-4px]">New South Wales</span>
            </li>
            <li>
              <span className="ml-[-4px]">Victoria</span>
            </li>
            <li>
              <span className="ml-[-4px]">Queensland</span>
            </li>
            <li>
              <span className="ml-[-4px]">South Australia</span>
            </li>
          </ul>
        </div>
        <p className="text-desktop-body-xl font-[450] mt-[100px]">Model</p>
        <div>
          {configuratorData.chooseYourModel.map((d, i) => {
            return (
              <div
                key={i}
                style={{
                  borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                  outline: d.isSelected ? "1px solid #0071e3" : "none",
                  border: d.isSelected
                    ? "1px solid #0071e3"
                    : "1px solid #c4c4c4",
                }}
                className={`flex justify-between p-[18px] min-h-[64px] rounded-xl  cursor-pointer mt-[16px]`}
                onClick={() => {
                  const updatedData: ConfiguratorData = {
                    ...configuratorData,
                    chooseYourModel: configuratorData.chooseYourModel.map(
                      (model) =>
                        model.name === d.name
                          ? { ...model, isSelected: true }
                          : { ...model, isSelected: false }
                    ),
                  };

                  setConfiguratorData(updatedData);
                }}
              >
                <div>
                  <p className="text-black font-[450] text-[17px]">
                    {d.length}
                  </p>
                </div>
                <div>
                  {d.price > 0 && (
                    <p className="">
                      <span className="text-[14px] text-silver font-[400]">
                        {d.price > 0 && formatNumberToCurrency(d.price)}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="bg-[#f4f4f4] flex mt-[16px] p-[16px] min-h-[94px] rounded-xl cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <div className="group flex w-full justify-between">
            <div className="">
              <p className="text-[17px] font-[450] leading-[16px]">
                Compare models
              </p>
              <p className="text-[14px] font-[400] max-w-[250px] mt-[14px] pr-[20px] text-silver leading-[18px]">
                Get a better understanding of how much space you’ll need
              </p>
            </div>
            <div className="mt-[4px]">
              {/* <div>
                <img
                  src="/circle-plus-icon.svg"
                  className=""
                  alt="circle-plus-icon"
                />
              </div> */}

              <div className="w-[17.33px] h-[17.33px]">
                <img
                  src="/circle-plus-icon.svg"
                  className="group-hover:hidden w-full h-full"
                  alt="circle-plus-icon"
                />
                <img
                  src="/circle-plus-icon-fill.svg"
                  className="hidden group-hover:block w-full h-full"
                  alt="circle-plus-icon-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="section" id="section2">
        {/* Choose your orientation */}
        <p className="text-desktop-body-xl mt-[60px] md:mt-[160px]">Layout</p>
        {configuratorData.chooseYourOrientation.map((d, i) => {
          return (
            <div
              key={i}
              style={{
                borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                outline: d.isSelected ? "1px solid #0071e3" : "none",
                border: d.isSelected
                  ? "1px solid #0071e3"
                  : "1px solid #c4c4c4",
              }}
              className={`p-[18px] min-h-[64px] rounded-xl  cursor-pointer mt-[16px]`}
              onClick={() => {
                const updatedData: ConfiguratorData = {
                  ...configuratorData,
                  chooseYourOrientation:
                    configuratorData.chooseYourOrientation.map((model) =>
                      model.name === d.name
                        ? { ...model, isSelected: true }
                        : { ...model, isSelected: false }
                    ),
                };

                setConfiguratorData(updatedData);
              }}
            >
              <p className="font-[450] text-[17px]">{d.name}</p>
              {/* <p className="text-[#808080] text-[14px]">{d.description}</p> */}
            </div>
          );
        })}

        <p className="text-[17px] mt-[60px] md:mt-[160px] font-[450]">
          Base Color
        </p>
        <div>
          {configuratorData.chooseYourFinish.map((d, i) => {
            return (
              d.isSelected && (
                <p
                  className="mt-[10px] font-[450] text-[24px] capitalize"
                  key={i}
                >
                  {d.name.charAt(0).toUpperCase() +
                    d.name.slice(1).toLowerCase()}
                </p>
              )
            );
          })}
        </div>
        <p className="text-[17px] text-silver mt-[10px] font-[450]">Included</p>
        <div className={`flex max-w-[290px] mt-[20px]`}>
          {configuratorData.chooseYourFinish.map((d, i) => {
            return (
              <div
                key={i}
                className={`cursor-pointer ${
                  i === 0 ? "ml-[0px]" : "ml-[7px] "
                }`}
                onClick={() => {
                  const updatedData: ConfiguratorData = {
                    ...configuratorData,
                    chooseYourFinish: configuratorData.chooseYourFinish.map(
                      (model) =>
                        model.name === d.name
                          ? { ...model, isSelected: true }
                          : { ...model, isSelected: false }
                    ),
                  };

                  setConfiguratorData(updatedData);
                }}
              >
                <div
                  className={` flex items-center justify-center p-1 border-2 border-transparent  ${
                    d.isSelected ? "border-2 rounded-full border-black" : ""
                  }`}
                  style={{
                    border: `${
                      d.isSelected
                        ? "2px solid #0071e3"
                        : "2px solid transparent"
                    }`,
                  }}
                >
                  <div
                    className={` w-[38px] h-[38px] rounded-full`}
                    style={{
                      background: d.color,
                    }}
                  ></div>
                </div>

                {/* <p className="mt-2 text-sm text-center capitalize">{d.name}</p> */}
                {/* <p className="text-sm text-center">${data.price}</p> */}
              </div>
            );
          })}
        </div>

        {/* deck color */}
        {/* 
        <p className="text-[17px] mt-[60px] md:mt-[160px] font-[450]">
          Deck Color
        </p>
        <div>
          {configuratorData.chooseYourFinishDeck.map((d, i) => {
            return (
              d.isSelected && (
                <p
                  className="mt-[10px] font-[450] text-[24px] capitalize"
                  key={i}
                >
                  {d.name.charAt(0).toUpperCase() +
                    d.name.slice(1).toLowerCase()}
                </p>
              )
            );
          })}
        </div>
        <p className="text-[17px] text-silver mt-[10px] font-[450]">Included</p>
        <div className={`flex max-w-[290px] mt-[20px]`}>
          {configuratorData.chooseYourFinishDeck.map((d, i) => {
            return (
              <div
                key={i}
                className={`cursor-pointer ${
                  i === 0 ? "ml-[0px]" : "ml-[7px] "
                }`}
                onClick={() => {
                  const updatedData: ConfiguratorData = {
                    ...configuratorData,
                    chooseYourFinishDeck:
                      configuratorData.chooseYourFinishDeck.map((model) =>
                        model.name === d.name
                          ? { ...model, isSelected: true }
                          : { ...model, isSelected: false }
                      ),
                  };

                  setConfiguratorData(updatedData);
                }}
              >
                <div
                  className={` flex items-center justify-center p-1 border-2 border-transparent  ${
                    d.isSelected ? "border-2 rounded-full border-black" : ""
                  }`}
                  style={{
                    border: `${
                      d.isSelected
                        ? "2px solid #0071e3"
                        : "2px solid transparent"
                    }`,
                  }}
                >
                  <div
                    className={` w-[38px] h-[38px] rounded-full`}
                    style={{
                      background: d.color,
                    }}
                  ></div>
                </div>

              </div>
            );
          })}
        </div> */}

        {/* glass */}
        <p className="text-desktop-body-xl mt-[60px] md:mt-[160px]">Glass</p>
        <div>
          {configuratorData.chooseYourGlass.map((d, i) => {
            return (
              <div
                key={i}
                style={{
                  borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                  outline: d.isSelected ? "1px solid #0071e3" : "none",
                  border: d.isSelected
                    ? "1px solid #0071e3"
                    : "1px solid #c4c4c4",
                }}
                className={`flex justify-between p-[18px] min-h-[64px] rounded-xl  cursor-pointer mt-[16px]`}
                onClick={() => {
                  const updatedData: ConfiguratorData = {
                    ...configuratorData,
                    chooseYourGlass: configuratorData.chooseYourGlass.map(
                      (model) =>
                        model.name === d.name
                          ? { ...model, isSelected: true }
                          : { ...model, isSelected: false }
                    ),
                  };

                  setConfiguratorData(updatedData);
                }}
              >
                <div>
                  <p className="text-black font-[450] text-[17px]">{d.name}</p>
                </div>
                <div>
                  {d.price > 0 ? (
                    <p className="font-[400]">
                      <span className="text-[14px] text-silver font-[400]">
                        {d.price > 0 && formatNumberToCurrency(d.price)}
                      </span>
                    </p>
                  ) : (
                    <p className="font-[400]">
                      <span className="text-[14px] text-silver font-[400]">
                        Included
                      </span>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* section 3 */}
      <section className="section mb-[80px] md:mb-[160px]" id="section3">
        <p className="text-[22px] mt-[80px] md:mt-[160px]">Interior </p>
        {currentModel === "Space One"
          ? configuratorData.chooseYourLayoutFor16.map((d, i) => {
              return (
                <div
                  onClick={() => {
                    const updatedData: ConfiguratorData = {
                      ...configuratorData,
                      chooseYourLayoutFor16:
                        configuratorData.chooseYourLayoutFor16.map((model) =>
                          model.name === d.name
                            ? { ...model, isSelected: true }
                            : { ...model, isSelected: false }
                        ),
                    };

                    setConfiguratorData(updatedData);
                  }}
                  key={i}
                  className={` p-4 min-h-[60px] rounded-xl mt-[16px] cursor-pointer`}
                  style={{
                    borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                    outline: d.isSelected ? "1px solid #0071e3" : "none",
                    border: d.isSelected
                      ? "1px solid #0071e3"
                      : "1px solid #c4c4c4",
                  }}
                >
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="font-[450] text-[17px]">{d.name}</p>
                    </div>
                    <div>
                      {d?.price > 0 ? (
                        <p className="">
                          <span className="text-[14px] text-silver">
                            {d.price > 0 && formatNumberToCurrency(d.price)}
                          </span>
                        </p>
                      ) : (
                        <p className="font-[400]">
                          <span className="text-[14px] text-silver font-[400]">
                            Included
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    {/* {d?.details && (
                      <hr className="my-[20px] h-[1.5px] bg-[#CCCCCCCC]" />
                    )} */}
                    <ul
                      className={`mt-[${
                        i !== 0 && "20px"
                      }] list-disc list-inside`}
                    >
                      {d?.details?.map((val, i) => {
                        return (
                          <li
                            className={`text-[14px] text-silver ${
                              i > 0 && " mt-[5px]"
                            }`}
                            key={val}
                          >
                            {" "}
                            {val}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })
          : configuratorData.chooseYourLayoutFor25.map((d, i) => {
              return (
                <div
                  onClick={() => {
                    const updatedData: ConfiguratorData = {
                      ...configuratorData,
                      chooseYourLayoutFor25:
                        configuratorData.chooseYourLayoutFor25.map((model) =>
                          model.name === d.name
                            ? { ...model, isSelected: true }
                            : { ...model, isSelected: false }
                        ),
                    };

                    setConfiguratorData(updatedData);
                  }}
                  key={i}
                  className={` p-4 min-h-[60px] rounded-xl mt-[16px] cursor-pointer`}
                  style={{
                    borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                    outline: d.isSelected ? "1px solid #0071e3" : "none",
                    border: d.isSelected
                      ? "1px solid #0071e3"
                      : "1px solid #c4c4c4",
                  }}
                >
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="font-[450] text-[17px]">{d.name}</p>
                    </div>
                    <div>
                      {d?.price > 0 ? (
                        <p className="">
                          <span className="text-[14px] text-silver">
                            {d.price > 0 && formatNumberToCurrency(d.price)}
                          </span>
                        </p>
                      ) : (
                        <p className="font-[400]">
                          <span className="text-[14px] text-silver font-[400]">
                            Included
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    {/* {d?.details && (
                      <hr className="my-[20px] h-[1.5px] bg-[#CCCCCCCC]" />
                    )} */}
                    <ul
                      className={`mt-[${
                        i !== 0 && "20px"
                      }] list-disc list-inside`}
                    >
                      {d?.details?.map((val, i) => {
                        return (
                          <li
                            className={`text-[14px] text-silver ${
                              i > 0 && " mt-[5px]"
                            }`}
                            key={val}
                          >
                            {" "}
                            {val}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}

        {/* <div
          className="bg-[#f4f4f4] flex mt-[16px] px-[16px] items-center h-[94px] rounded-xl cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <div className="group flex w-full justify-between">
            <div className="">
              <p className="text-[17px] font-[450]">Explore layouts</p>
              <p className="text-[14px] font-[400] max-w-[250px] mt-[8px] pr-[0px] text-silver">
                Take a look at the floor plans from above
              </p>
            </div>
            <div className="mt-[4px]">
              <div className="w-[17.33px] h-[17.33px]">
                <img
                  src="/circle-plus-icon.svg"
                  className="group-hover:hidden w-full h-full"
                  alt="circle-plus-icon"
                />
                <img
                  src="/circle-plus-icon-fill.svg"
                  className="hidden group-hover:block w-full h-full"
                  alt="circle-plus-icon-fill"
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* Bathroom */}
        {currentModel === "Space One Plus" &&
          currentInterior !== "Open Plan" && (
            <>
              <p className="text-[22px] mt-[80px] md:mt-[160px]">Bathroom</p>
              {configuratorData.bathroom.map((d, i) => {
                return (
                  <div
                    onClick={() => {
                      const updatedData: ConfiguratorData = {
                        ...configuratorData,
                        bathroom: configuratorData.bathroom.map((model) =>
                          model.name === d.name
                            ? { ...model, isSelected: true }
                            : { ...model, isSelected: false }
                        ),
                      };

                      setConfiguratorData(updatedData);
                    }}
                    key={i}
                    className={` p-4 min-h-[60px] rounded-xl mt-[16px] cursor-pointer`}
                    style={{
                      borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                      outline: d.isSelected ? "1px solid #0071e3" : "none",
                      border: d.isSelected
                        ? "1px solid #0071e3"
                        : "1px solid #c4c4c4",
                    }}
                  >
                    <div className="flex justify-between w-full">
                      <div>
                        <p className="font-[400] text-[17px]">{d.name}</p>
                      </div>
                      <div>
                        {(d?.price ?? 0) > 0 && (
                          <p className="">
                            <span className="text-[14px] text-silver">
                              {formatNumberToCurrency(d.price ?? 0)}
                            </span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      {/* {d?.details && (
                        <hr className="my-[20px] h-[1.5px] bg-[#CCCCCCCC]" />
                      )} */}
                      <ul
                        className={`mt-[${
                          i === 0 && "20px"
                        }] list-disc list-inside`}
                      >
                        {d?.details?.map((val, i) => {
                          return (
                            <li
                              className={`text-[14px] text-silver ${
                                i > 0 && " mt-[5px]"
                              }`}
                              key={val}
                            >
                              {" "}
                              {val}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}

              {/* Bathroom upgrades */}
              {configuratorData.bathroom.find(
                (d) => d.name === "Bathroom" && d.isSelected === true
              ) && (
                <>
                  <p className="text-[22px] mt-[80px] md:mt-[160px]">
                    Bathroom Upgrades
                  </p>
                  {configuratorData.bathroomUpgrades.map((d, i) => {
                    return (
                      <div
                        style={{
                          borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                          outline: d.isSelected ? "1px solid #0071e3" : "none",
                          border: d.isSelected
                            ? "1px solid #0071e3"
                            : "1px solid #c4c4c4",
                        }}
                        onClick={() => {
                          // const updatedData: ConfiguratorData = {
                          //   ...configuratorData,
                          //   bathroomUpgrades:
                          //     configuratorData.bathroomUpgrades.map((model) => ({
                          //       ...model,
                          //       isSelected:
                          //         model.name === d.name ? !model.isSelected : false,
                          //     })),
                          // };

                          // setConfiguratorData(updatedData);

                          const updatedData: ConfiguratorData = {
                            ...configuratorData,
                            bathroomUpgrades:
                              configuratorData.bathroomUpgrades.map(
                                (model) =>
                                  model.name === d.name
                                    ? {
                                        ...model,
                                        isSelected: !model.isSelected,
                                      } // Toggle isSelected for the clicked option
                                    : model // Leave other options unchanged
                              ),
                          };

                          setConfiguratorData(updatedData);
                        }}
                        key={i}
                        className={`flex justify-between items-center p-4 rounded-xl mt-[16px] cursor-pointer`}
                      >
                        <div>
                          <p className="font-[450] text-[17px]">{d.name}</p>
                          <p className=" text-[14px] mt-[8px]">
                            {d.isSelected ? (
                              <span className="text-black flex">
                                {/* <img src="/tick-icon.svg" alt="" /> */}
                                <span className="text-blue">Added</span>
                              </span>
                            ) : (
                              <span className="text-blue">Add</span>
                            )}
                          </p>
                        </div>
                        <div className="">
                          {d.price > 0 && (
                            <p className="">
                              <span className="text-[14px]">
                                {d.price > 0 && formatNumberToCurrency(d.price)}
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </>
          )}
        {/* Choose your orientation */}
        <p className="text-[22px] mt-[80px] md:mt-[160px]">Interior Upgrades</p>
        {configuratorData.optionalUpgradesForLayout.map((d, i) => {
          return (
            <div
              style={{
                borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                outline: d.isSelected ? "1px solid #0071e3" : "none",
                border: d.isSelected
                  ? "1px solid #0071e3"
                  : "1px solid #c4c4c4",
              }}
              onClick={() => {
                // const updatedData: ConfiguratorData = {
                //   ...configuratorData,
                //   optionalUpgradesForLayout:
                //     configuratorData.optionalUpgradesForLayout.map((model) => ({
                //       ...model,
                //       isSelected:
                //         model.name === d.name ? !model.isSelected : false,
                //     })),
                // };

                // setConfiguratorData(updatedData);

                const updatedData: ConfiguratorData = {
                  ...configuratorData,
                  optionalUpgradesForLayout:
                    configuratorData.optionalUpgradesForLayout.map(
                      (model) =>
                        model.name === d.name
                          ? { ...model, isSelected: !model.isSelected } // Toggle isSelected for the clicked option
                          : model // Leave other options unchanged
                    ),
                };

                setConfiguratorData(updatedData);
              }}
              key={i}
              className={`flex justify-between items-center p-4 rounded-xl mt-[16px] cursor-pointer`}
            >
              <div>
                <p className="font-[450] text-[17px]">{d.name}</p>
                <p className=" text-[14px] mt-[8px]">
                  {d.isSelected ? (
                    <span className="text-black flex">
                      {/* <img src="/tick-icon.svg" alt="" /> */}
                      <span className="text-blue">Added</span>
                    </span>
                  ) : (
                    <span className="text-blue">Add</span>
                  )}
                </p>
              </div>
              <div className="">
                {d.price > 0 && (
                  <p className="">
                    <span className="text-[14px]">
                      {d.price > 0 && formatNumberToCurrency(d.price)}
                    </span>
                  </p>
                )}
              </div>
            </div>
          );
        })}

        {/* <button
          onClick={() => {
            setIsModalOpenCarousel(true);
          }}
          className=" flex items-center bg-[#F4F4F4] text-[#808080] rounded-[12px] mt-[20px] px-[20px] py-[12px] h-[44px] text-[16px]"
        >
          Feature Details
        </button> */}

        {/* solar system */}

        <p className="text-[22px] mt-[80px] md:mt-[160px]">Sound System</p>
        {configuratorData.chooseYourEnergy.map((d, i) => {
          return (
            <div
              onClick={() => {
                const updatedData: ConfiguratorData = {
                  ...configuratorData,
                  chooseYourEnergy: configuratorData.chooseYourEnergy.map(
                    (model) =>
                      model.name === d.name
                        ? { ...model, isSelected: true }
                        : { ...model, isSelected: false }
                  ),
                };

                setConfiguratorData(updatedData);
              }}
              key={i}
              className={` p-4 min-h-[60px] rounded-xl mt-[16px] cursor-pointer`}
              style={{
                borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                outline: d.isSelected ? "1px solid #0071e3" : "none",
                border: d.isSelected
                  ? "1px solid #0071e3"
                  : "1px solid #c4c4c4",
              }}
            >
              <div className="flex justify-between w-full">
                <div>
                  <p className="font-[400] text-[17px]">{d.name}</p>
                </div>
                <div>
                  {(d?.price ?? 0) > 0 && (
                    <p className="">
                      <span className="text-[14px] text-silver">
                        {formatNumberToCurrency(d.price ?? 0)}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                {/* {d?.details && (
                  <hr className="my-[20px] h-[1.5px] bg-[#CCCCCCCC]" />
                )} */}
                {/* <ul className="list-disc list-inside"> */}
                <ul
                  className={`mt-[${i === 0 && "20px"}] list-disc list-inside`}
                >
                  {d?.details?.map((val, i) => {
                    return (
                      <li
                        className={`text-[14px] text-silver ${
                          i > 0 && " mt-[5px]"
                        }`}
                        key={val}
                      >
                        {" "}
                        {val}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}

        {/* Solar */}
        <p className="text-[22px] mt-[80px] md:mt-[160px]">Solar</p>
        {configuratorData.solar.map((d, i) => {
          return (
            <div
              onClick={() => {
                const updatedData: ConfiguratorData = {
                  ...configuratorData,
                  solar: configuratorData.solar.map((model) =>
                    model.name === d.name
                      ? { ...model, isSelected: true }
                      : { ...model, isSelected: false }
                  ),
                };

                setConfiguratorData(updatedData);
              }}
              key={i}
              className={` p-4 min-h-[60px] rounded-xl mt-[16px] cursor-pointer`}
              style={{
                borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                outline: d.isSelected ? "1px solid #0071e3" : "none",
                border: d.isSelected
                  ? "1px solid #0071e3"
                  : "1px solid #c4c4c4",
              }}
            >
              <div className="flex justify-between w-full">
                <div>
                  <p className="font-[400] text-[17px]">{d.name}</p>
                </div>
                <div>
                  {(d?.price ?? 0) > 0 && (
                    <p className="">
                      <span className="text-[14px] text-silver">
                        {formatNumberToCurrency(d.price ?? 0)}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                {/* {d?.details && (
                  <hr className="my-[20px] h-[1.5px] bg-[#CCCCCCCC]" />
                )} */}
                <ul
                  className={`mt-[${i === 0 && "20px"}] list-disc list-inside`}
                >
                  {" "}
                  {d?.details?.map((val, i) => {
                    return (
                      <li
                        className={`text-[14px] text-silver ${
                          i > 0 && " mt-[5px]"
                        }`}
                        key={val}
                      >
                        {" "}
                        {val}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}

        {/* Essentials */}
        <p className="text-[22px] mt-[80px] md:mt-[160px]">Essentials</p>
        {configuratorData.essentials.map((d, i) => {
          return (
            <div
              style={{
                borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                outline: d.isSelected ? "1px solid #0071e3" : "none",
                border: d.isSelected
                  ? "1px solid #0071e3"
                  : "1px solid #c4c4c4",
              }}
              onClick={() => {
                // const updatedData: ConfiguratorData = {
                //   ...configuratorData,
                //   essentials:
                //     configuratorData.essentials.map((model) => ({
                //       ...model,
                //       isSelected:
                //         model.name === d.name ? !model.isSelected : false,
                //     })),
                // };

                // setConfiguratorData(updatedData);

                const updatedData: ConfiguratorData = {
                  ...configuratorData,
                  essentials: configuratorData.essentials.map((model) => {
                    if (model.name === d.name) {
                      if (!model.isSelected) {
                        setEssentialNameSelected(d.name); // Set only if first time selecting
                      } else {
                        setEssentialNameSelected("");
                      }
                    }
                    return model.name === d.name
                      ? { ...model, isSelected: !model.isSelected } // Toggle isSelected for the clicked option
                      : model; // Leave other options unchanged
                  }),
                };

                console.log("updatedData=>>>>", updatedData);

                setConfiguratorData(updatedData);
              }}
              key={i}
              className={`flex justify-between items-center p-4 rounded-xl mt-[16px] cursor-pointer`}
            >
              <div>
                <p className="font-[450] text-[17px]">{d.name}</p>
                <p className=" text-[14px] mt-[8px]">
                  {d.isSelected ? (
                    <span className="text-black flex">
                      {/* <img src="/tick-icon.svg" alt="" /> */}
                      <span className="text-blue">Added</span>
                    </span>
                  ) : (
                    <span className="text-blue">Add</span>
                  )}
                </p>
              </div>
              <div className="">
                {d.price > 0 && (
                  <p className="">
                    <span className="text-[14px]">
                      {d.price > 0 && formatNumberToCurrency(d.price)}
                    </span>
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </section>
      {/*  section 5 */}

      <div id="endOfPricing">
        <div
          id="section5tl2-loader-container"
          className="hidden text-center mb-[20px] md:mb-0"
        >
          <LoadingSpinner id={"1"} />
        </div>
        {/* make this effect */}
        <div id="section5tl2" className=""></div>
        <section className="section hidden" id="section5">
          <p className="font-[450]  text-[40px] leading-[30px]">Summary</p>
          <p className="text-desktop-body-xl leading-[20px] font-[450] mt-[40px]">
            <span>Your new Space One.</span>
          </p>
          <p className="text-desktop-body-xl font-[450] ">
            <span className="text-light-silver">
              {" "}
              Just the way you want it.{" "}
            </span>
          </p>
          <p className="mt-[20px] text-[14px] font-[400] text-light-silver">
            Review your configuration below. You’ll be able to finalize your
            order once it’s time for production.
          </p>
          {/* 1 */}
          <div className="mt-[60px] md:mt-[60px] flex justify-between">
            <div>
              <p className="text-[14px] font-[400]  text-silver">
                {configuratorData.chooseYourModel.find((d) => d.isSelected)
                  ?.name === "Space One"
                  ? "Space One 16 Square Meters"
                  : "Space One Plus 25 Square Meters"}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-[400] text-[14px]">
                {(() => {
                  const selectedModel = configuratorData.chooseYourModel.find(
                    (d) => d.isSelected
                  );
                  const price = selectedModel?.price;

                  return price === 0
                    ? "Included"
                    : price && formatNumberToCurrency(price);
                })()}
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="mt-[15px] flex justify-between">
            <div>
              <p className="text-[14px] font-[400]  text-silver">
                {`${
                  configuratorData.chooseYourFinish.find((d) => d.isSelected)
                    ?.name
                } Base Color`}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] font-[400]  text-silver">Included</p>
            </div>
          </div>
          {/* 3
          <div className="mt-[15px] flex justify-between">
            <div>
              <p className="text-[14px] font-[400]  text-silver">
                {`${
                  configuratorData.chooseYourFinishDeck.find(
                    (d) => d.isSelected
                  )?.name
                } Deck Color`}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] font-[400]  text-silver">Included</p>
            </div>
          </div> */}
          {/* 4 */}
          <div className="mt-[15px] flex justify-between">
            <div>
              <p className="text-[14px] font-[400]  text-silver">
                {`${
                  configuratorData.chooseYourOrientation.find(
                    (d) => d.isSelected
                  )?.name
                }`}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] font-[400]  text-silver">Included</p>
            </div>
          </div>
          {/* 5 */}
          <div className="mt-[15px] flex justify-between">
            <div>
              <p className="text-[14px] font-[400]  text-silver">
                {`${
                  configuratorData.chooseYourGlass.find((d) => d.isSelected)
                    ?.name
                }`}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] font-[400]  text-silver">
                {(() => {
                  const selectedModel = configuratorData.chooseYourGlass.find(
                    (d) => d.isSelected
                  );
                  const price = selectedModel?.price;

                  return price === 0
                    ? "Included"
                    : price && formatNumberToCurrency(price);
                })()}
              </p>
            </div>
          </div>
          {/* 6 */}
          <div className="mt-[15px] flex justify-between">
            <div>
              <p className="text-[14px] font-[400]  text-silver">
                {`${
                  configuratorData.chooseYourLayoutFor16.find(
                    (d) => d.isSelected
                  )?.name
                } Interior`}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] font-[400]  text-silver">
                {(() => {
                  const selectedModel =
                    configuratorData.chooseYourLayoutFor16.find(
                      (d) => d.isSelected
                    );
                  const price = selectedModel?.price;

                  return price === 0
                    ? "Included"
                    : price && formatNumberToCurrency(price);
                })()}
              </p>
            </div>
          </div>
          {/* 7 */}
          <div className="">
            {configuratorData.optionalUpgradesForLayout.map((d, i) => {
              return (
                d.isSelected && (
                  <div key={i} className={`flex justify-between mt-[15px]`}>
                    <div>
                      <p className="text-[14px] font-[400]  text-silver">
                        {d?.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] font-[400]  text-silver">
                        {formatNumberToCurrency(d?.price)}
                      </p>
                    </div>
                  </div>
                )
              );
            })}
          </div>
          {/* 8 */}
          <div className="">
            {(() => {
              const selectedBathroom = configuratorData.bathroom.find(
                (d) => d.isSelected
              );

              return selectedBathroom?.name === "Bathroom" ? (
                <div className="mt-[15px] flex justify-between">
                  <div>
                    <p className="text-[14px] font-[400] text-silver">
                      {selectedBathroom.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-[400] text-silver">
                      {selectedBathroom.price &&
                        formatNumberToCurrency(selectedBathroom.price)}
                    </p>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
          {/* 9 */}
          <div className="">
            {configuratorData.bathroomUpgrades.map((d, i) => {
              return (
                d.isSelected && (
                  <div key={i} className={`flex justify-between mt-[15px]`}>
                    <div>
                      <p className="text-[14px] font-[400]  text-silver">
                        {d?.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] font-[400]  text-silver">
                        {formatNumberToCurrency(d?.price)}
                      </p>
                    </div>
                  </div>
                )
              );
            })}
          </div>
          {/* 10 */}
          <div className="">
            {(() => {
              const selectedSolar = configuratorData.solar.find(
                (d) => d.isSelected
              );

              return selectedSolar?.name === "Solar Package" ? (
                <div className="mt-[15px] flex justify-between">
                  <div>
                    <p className="text-[14px] font-[400] text-silver">
                      {selectedSolar.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-[400] text-silver">
                      {selectedSolar.price &&
                        formatNumberToCurrency(selectedSolar.price)}
                    </p>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
          {/* 11 */}
          <div className="">
            {configuratorData.essentials.map((d, i) => {
              return (
                d.isSelected && (
                  <div key={i} className={`flex justify-between mt-[15px]`}>
                    <div>
                      <p className="text-[14px] font-[400]  text-silver">
                        {d?.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] font-[400]  text-silver">
                        {formatNumberToCurrency(d?.price)}
                      </p>
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <div>
            <hr className="my-[20px] h-[1.5px] bg-[#C4C4C4]" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-[400]  text-silver">Est. Price</p>
            <p className="text-[14px] font-[400]  text-silver">
              {formatNumberToCurrency(totalPrice)}
            </p>
          </div>
          <div className="mt-[40px] flex items-center justify-between">
            <p className="text-[24px] font-[450]">Est. Price</p>
            <p className="text-[24px] font-[450]">
              {formatNumberToCurrency(totalPrice)}
            </p>
          </div>
          <div className="mb-[100px] ">
            <p className="text-[12px] mt-[20px] font-[400]  text-light-silver">
              Illustrative model shown. Pricing does not include on-site
              installation or groundworks. Delivery schedule and final pricing
              are subject to local permits and delivery location.
            </p>
          </div>
        </section>
        {/* TODO: */}
        <div id="section5tl3-trigger" className="opacity-0">
          test
        </div>{" "}
        {/* main section */}
        <div
          id="section5tl3-loader-container"
          className="hidden text-center mb-[20px] md:mb-0"
        >
          <LoadingSpinner id={"2"} />
        </div>
        <section id="section5tl3" className="hidden mt-[-78px] md:mt-0">
          {/* section 6 */}
          <section className="section" id="section6">
            {/* delivery details */}
            <div>
              <p className="text-[24px] font-[450]">
                Enter your delivery address:
              </p>

              <div className="mt-[20px] ">
                <InputField
                  id="1"
                  type="text"
                  label="streetAddress"
                  placeholder="Street Address"
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>
              {errors.streetAddress && (
                <p className="text-[12px] mt-[8px] text-[400] text-red-500">
                  {errors.streetAddress.message as string}
                </p>
              )}

              <div className="mt-[16px]">
                <InputField
                  id="2"
                  type="text"
                  label="apt"
                  placeholder="Apt, Suite, Building (Optional)"
                  register={register}
                  errors={errors}
                  isRequired={false}
                />
                {errors.apt && (
                  <p className="text-[12px] mt-[8px] text-[400] text-red-500">
                    {errors.apt.message as string}
                  </p>
                )}
              </div>

              <div className="mt-[16px]">
                <InputField
                  id="3"
                  type="text"
                  label="suburb"
                  placeholder="Suburb"
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>

              {errors.suburb && (
                <p className="text-[12px] mt-[8px] text-[400] text-red-500">
                  {errors.suburb.message as string}
                </p>
              )}
              <div className="mt-[16px]">
                <InputField
                  id="4"
                  type="text"
                  label="state"
                  placeholder="State"
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>
              {errors.state && (
                <p className="text-[12px] mt-[8px] text-[400] text-red-500">
                  {errors.state.message as string}
                </p>
              )}

              <div className="mt-[16px]">
                <InputField
                  id="5"
                  type="number"
                  label="postalCode"
                  placeholder="Postal Code"
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>

              {errors.postalCode && (
                <p className="text-[12px] mt-[8px] text-[400] text-red-500">
                  {errors.postalCode.message as string}
                </p>
              )}
              <div className="mt-[16px]">
                <InputField
                  id="6"
                  type="text"
                  label="country"
                  placeholder="Country"
                  isFixed={true}
                  fixedValue={"Australia"}
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>
              {errors.country && (
                <p className="text-[12px] mt-[8px] text-[400] text-red-500">
                  {errors.country.message as string}
                </p>
              )}
            </div>

            <div>
              <p className="text-[22px] font-[450] mt-[80px]">
                What is your contact information?
              </p>
              <div className="mt-[20px]">
                <InputField
                  id="contact-info-1"
                  type="text"
                  label="firstName"
                  placeholder="First Name"
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>
              {errors.firstName && (
                <p className="text-[12px] mt-[8px] text-[400] text-red-500">
                  {errors.firstName.message as string}
                </p>
              )}
              <div className="mt-[16px]">
                <InputField
                  id="contact-info-2"
                  type="text"
                  label="lastName"
                  placeholder="Last Name"
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>
              {errors.lastName && (
                <p className="text-[12px] mt-[8px] text-[400] text-red-500">
                  {errors.lastName.message as string}
                </p>
              )}
              <div className="mt-[16px]">
                <InputField
                  id="contact-info-3"
                  type="text"
                  label="company"
                  placeholder="Company"
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>
              {errors.company && (
                <p className="text-[12px] mt-[8px] text-[400] text-red-500">
                  {errors.company.message as string}
                </p>
              )}

              <div className="mt-[16px]">
                <InputField
                  id="contact-info-4"
                  type="text"
                  label="role"
                  placeholder="Role"
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>
              {errors.role && (
                <p className="text-[12px] mt-[8px] text-[400] text-red-500">
                  {errors.role.message as string}
                </p>
              )}
              <div className="mt-[16px]">
                <InputField
                  id="contact-info-5"
                  type="email"
                  label="email"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  placeholder="Email Address"
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>
              {errors.email && (
                <p className="text-[12px] mt-[8px] text-[400] text-red-500">
                  {errors.email.message as string}
                </p>
              )}
              <div className="mt-[16px]">
                <InputField
                  id="contact-info-6"
                  type="email"
                  label="confirmEmail"
                  placeholder="Confirm Email Address"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>
              {errors.confirmEmail && (
                <p className="text-[12px] mt-[8px] text-[400] text-red-500">
                  {errors.confirmEmail.message as string}
                </p>
              )}
              <div className="mt-[16px]">
                <InputField
                  id="contact-info-7"
                  type="number"
                  label="phoneNumber"
                  placeholder="Phone Number"
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-[12px] mt-[8px] text-[400] text-red-500">
                  {errors.phoneNumber.message as string}
                </p>
              )}
            </div>
          </section>
          <p className="text-[12px] text-light-silver mt-[40px]">
            By entering my contact information above, I authorize Space to
            contact me about this request and Space Updates including other
            Space products, services and events. I can opt out by unsubscribing.
            This is not a purchase requirement.
          </p>
          <button
            onClick={handleSubmit(handleSubmitFunction)}
            className="mt-[40px] w-full p-4 min-h-[60px] text-white rounded-xl bg-[#0071e3]"
          >
            Submit
          </button>
          {/* extra space */}
          <div className="block h-[170px] md:h-[200px]"></div>
        </section>
        <div className="h-[51px] "></div>
      </div>
    </>
  );
};

export default Configurator;

//  <div>
//    {JSON.stringify(
//      configuratorData.chooseYourModel.find((d) => d.isSelected)
//    )}
//    {JSON.stringify(
//      configuratorData.chooseYourFinish.find((d) => d.isSelected)
//    )}
//    {JSON.stringify(
//      configuratorData.chooseYourOrientation.find((d) => d.isSelected)
//    )}
//    {JSON.stringify(
//      configuratorData.chooseYourLayoutFor16.find((d) => d.isSelected)
//    )}
//    {JSON.stringify(
//      configuratorData.chooseYourLayoutFor25.find((d) => d.isSelected)
//    )}
//    {JSON.stringify(
//      configuratorData.optionalUpgradesForLayout.find((d) => d.isSelected)
//    )}
//    {JSON.stringify(
//      configuratorData.chooseYourEnergy.find((d) => d.isSelected)
//    )}
//    {JSON.stringify(
//      configuratorData.optionalUpgradesForEnergy.find((d) => d.isSelected)
//    )}
//  </div>;
