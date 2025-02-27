"use client";
import { formatNumberToCurrency } from "@/utils/functions";
import React, { useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ConfiguratorData } from "@/data";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

import { useGSAP } from "@gsap/react";

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
}

const Configurator: React.FC<ConfiguratorProps> = ({
  currentModel,
  isMirrored,
  configuratorData,
  setConfiguratorData,
  setSliderImages,
  setIsImageChangeScroll,
  generateSliderImagesForInterior,
  setIsModalOpen,
  setIsModalOpenCarousel,
}) => {
  const [isContinue, setIsContinue] = useState(false);

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
        end: "bottom center",
        scrub: true,
        // markers: true,
        scroller: ".left-scroll-area",
        onEnter: () => {
          console.log("Entered section3");
          const selectedLayout = configuratorData.chooseYourLayoutFor16.find(
            (layout) => layout.isSelected
          );

          console.log({ selectedLayout });

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

          const selectedLayout = configuratorData.chooseYourLayoutFor16.find(
            (layout) => layout.isSelected
          );

          console.log({ selectedLayout });

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

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [currentModel, isMirrored, configuratorData.chooseYourLayoutFor16]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    // Iterate through each key in the data object
    for (const key of Object.keys(configuratorData) as Array<
      keyof ConfiguratorData
    >) {
      if (Array.isArray(configuratorData[key])) {
        // Filter for items where `isSelected` is true and have a `price` property
        const selectedItems = configuratorData[key].filter(
          (item) =>
            item.isSelected && "price" in item && typeof item.price === "number"
        );

        // Add their prices to the total
        selectedItems.forEach((item) => {
          // TODO: verify it
          totalPrice += (item as unknown as { price: number }).price;
        });
      }
    }

    return totalPrice;
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* section 1 */}
      <section className="section section1 mt-[140px]" id="section1">
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
          className="bg-[#f4f4f4] flex mt-[16px] px-[16px] items-center h-[94px] rounded-xl cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <div className="flex w-full justify-between">
            <div className="">
              <p className="text-[17px] font-[450]">Compare models</p>
              <p className="text-[14px] font-[400] max-w-[250px] mt-[8px] pr-[20px] text-silver">
                Get a better understanding of how much space you’ll need
              </p>
            </div>
            <div className="mt-[4px]">
              <div>
                <img
                  src="/circle-plus-icon.svg"
                  className=""
                  alt="circle-plus-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="section" id="section2">
        {/* Choose your orientation */}
        <p className="text-desktop-body-xl mt-[60px] md:mt-[100px]">Layout</p>
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

                {/* <p className="mt-2 text-sm text-center capitalize">{d.name}</p> */}
                {/* <p className="text-sm text-center">${data.price}</p> */}
              </div>
            );
          })}
        </div>

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
      <section className="section" id="section3">
        <p className="text-[22px] mt-[60px] md:mt-[120px]">Interior </p>
        {configuratorData.chooseYourLayoutFor16.map((d, i) => {
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
                {d?.details && (
                  <hr className="my-[20px] h-[1.5px] bg-[#CCCCCCCC]" />
                )}
                <ul className="list-disc list-inside">
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

        <div
          className="bg-[#f4f4f4] flex mt-[16px] px-[16px] items-center h-[94px] rounded-xl cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <div className="flex w-full justify-between">
            <div className="">
              <p className="text-[17px] font-[450]">Explore layouts</p>
              <p className="text-[14px] font-[400] max-w-[250px] mt-[8px] pr-[0px] text-silver">
                Take a look at the floor plans from above
              </p>
            </div>
            <div className="mt-[4px]">
              <div>
                <img
                  src="/circle-plus-icon.svg"
                  className=""
                  alt="circle-plus-icon"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Choose your orientation */}
        <p className="text-[22px] mt-[60px] md:mt-[120px]">Interior Upgrades</p>
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
                      <img src="/tick-icon.svg" alt="" />
                      <span className="ml-[5px]">Added</span>
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

        <p className="text-[22px] mt-[60px] md:mt-[120px]">Sound System</p>
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
                  {d?.price > 0 && (
                    <p className="">
                      <span className="text-[14px] text-silver">
                        {d.price > 0 && formatNumberToCurrency(d.price)}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                {d?.details && (
                  <hr className="my-[20px] h-[1.5px] bg-[#CCCCCCCC]" />
                )}
                <ul className="list-disc list-inside">
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

        {/* Bathroom */}

        <p className="text-[22px] mt-[60px] md:mt-[120px]">Bathroom</p>
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
                  {d?.price > 0 && (
                    <p className="">
                      <span className="text-[14px] text-silver">
                        {d.price > 0 && formatNumberToCurrency(d.price)}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                {d?.details && (
                  <hr className="my-[20px] h-[1.5px] bg-[#CCCCCCCC]" />
                )}
                <ul className="list-disc list-inside">
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
        <p className="text-[22px] mt-[60px] md:mt-[120px]">Bathroom Upgrades</p>
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
                  bathroomUpgrades: configuratorData.bathroomUpgrades.map(
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
                      <img src="/tick-icon.svg" alt="" />
                      <span className="ml-[5px]">Added</span>
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

        {/* Solar */}
        <p className="text-[22px] mt-[60px] md:mt-[120px]">Solar</p>
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
                  {d?.price > 0 && (
                    <p className="">
                      <span className="text-[14px] text-silver">
                        {d.price > 0 && formatNumberToCurrency(d.price)}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                {d?.details && (
                  <hr className="my-[20px] h-[1.5px] bg-[#CCCCCCCC]" />
                )}
                <ul className="list-disc list-inside">
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
        <p className="text-[22px] mt-[60px] md:mt-[120px]">Essentials</p>
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
                  essentials: configuratorData.essentials.map(
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
                      <img src="/tick-icon.svg" alt="" />
                      <span className="ml-[5px]">Added</span>
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
      <section className="section" id="section5">
        <p className="font-[450] mt-[120px] md:mt-[120px] text-[40px] leading-[30px]">
          Summary
        </p>
        <p className="text-desktop-body-xl leading-[20px] font-[450] mt-[40px]">
          <span>Your new Space One.</span>
        </p>
        <p className="text-desktop-body-xl font-[450] ">
          <span className="text-light-silver"> Just the way you want it. </span>
        </p>

        <p className="mt-[20px] text-[14px] font-[400] text-light-silver">
          Review your configuration below. You’ll be able to finalize your order
          once it’s time for production.
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

        {/* 3 */}
        <div className="mt-[15px] flex justify-between">
          <div>
            <p className="text-[14px] font-[400]  text-silver">
              {`${
                configuratorData.chooseYourFinishDeck.find((d) => d.isSelected)
                  ?.name
              } Deck Color`}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] font-[400]  text-silver">Included</p>
          </div>
        </div>

        {/* 4 */}
        <div className="mt-[15px] flex justify-between">
          <div>
            <p className="text-[14px] font-[400]  text-silver">
              {`${
                configuratorData.chooseYourOrientation.find((d) => d.isSelected)
                  ?.name
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
                configuratorData.chooseYourGlass.find((d) => d.isSelected)?.name
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
                configuratorData.chooseYourLayoutFor16.find((d) => d.isSelected)
                  ?.name
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
            {formatNumberToCurrency(calculateTotalPrice())}
          </p>
        </div>

        <div className="mt-[40px] flex items-center justify-between">
          <p className="text-[24px] font-[450]  text-silver">Est. Price</p>
          <p className="text-[24px] font-[450]  text-silver">
            {formatNumberToCurrency(calculateTotalPrice())}
          </p>
        </div>

        <div>
          <p className="text-[12px] mt-[20px] font-[400]  text-light-silver">
            Illustrative model shown. Pricing does not include on-site
            installation or groundworks. Delivery schedule and final pricing are
            subject to local permits and delivery location.
          </p>
        </div>
        {/* TODO: */}
      </section>
      {/* main section */}
      {isContinue && (
        <section className={`${isContinue ? "animate-fadeInSection" : ""}`}>
          {/* section 6 */}
          <section className="section" id="section5">
            <p className="mt-[60px] md:mt-[120px] text-[38px] ">
              Confirm Availability
            </p>
            <p className="mt-[32px] text-[18px] text-[#808080]">
              Share your details to verify availability and refine your delivery
              estimate.{" "}
            </p>

            <p className="text-[22px] mt-[66px]">Term</p>

            <div>
              {configuratorData.terms.map((d, i) => {
                return (
                  <div
                    onClick={() => {
                      const updatedData: ConfiguratorData = {
                        ...configuratorData,
                        terms: configuratorData.terms.map((model) =>
                          model.name === d.name
                            ? { ...model, isSelected: true }
                            : { ...model, isSelected: false }
                        ),
                      };

                      setConfiguratorData(updatedData);
                    }}
                    key={i}
                    className={`flex justify-between p-4 min-h-[60px] rounded-xl mt-3 cursor-pointer`}
                    style={{
                      borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                      outline: d.isSelected ? "1px solid #0071e3" : "none",
                      border: d.isSelected
                        ? "1px solid #0071e3"
                        : "1px solid #c4c4c4",
                    }}
                  >
                    <div className="flex justify-between items-center w-full">
                      <p className="font-bold text-[20px]">{d.name}</p>
                      <p className="text-[#808080] text-[12px]">
                        {d.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-[#808080] text-[14px] mt-[16px]">
              Subject to location and availability.
            </p>
          </section>
          {/* section 7 */}
          <section className="section" id="section5">
            <p className="text-[22px] mt-[66px]">Quantity of units</p>
            <div>
              {configuratorData.quantityOfUnit.map((d, i) => {
                return (
                  <div
                    onClick={() => {
                      const updatedData: ConfiguratorData = {
                        ...configuratorData,
                        quantityOfUnit: configuratorData.quantityOfUnit.map(
                          (model) =>
                            model.name === d.name
                              ? { ...model, isSelected: true }
                              : { ...model, isSelected: false }
                        ),
                      };

                      setConfiguratorData(updatedData);
                    }}
                    key={i}
                    className={`flex justify-between p-4 min-h-[60px] rounded-xl mt-3 cursor-pointer`}
                    style={{
                      borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                      outline: d.isSelected ? "1px solid #0071e3" : "none",
                      border: d.isSelected
                        ? "1px solid #0071e3"
                        : "1px solid #c4c4c4",
                    }}
                  >
                    <div className="flex justify-between items-center w-full">
                      <p className="font-bold text-[20px]">{d.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          {/* section 8 */}
          <section className="section" id="section5">
            <p className="text-[22px] mt-[66px]">Parcel type</p>
            <div>
              {configuratorData.parcelType.map((d, i) => {
                return (
                  <div
                    onClick={() => {
                      const updatedData: ConfiguratorData = {
                        ...configuratorData,
                        parcelType: configuratorData.parcelType.map((model) =>
                          model.name === d.name
                            ? { ...model, isSelected: true }
                            : { ...model, isSelected: false }
                        ),
                      };

                      setConfiguratorData(updatedData);
                    }}
                    key={i}
                    className={`flex justify-between p-4 min-h-[60px] rounded-xl mt-3 cursor-pointer`}
                    style={{
                      borderColor: `${d.isSelected ? "#0071e3" : ""}`,
                      outline: d.isSelected ? "1px solid #0071e3" : "none",
                      border: d.isSelected
                        ? "1px solid #0071e3"
                        : "1px solid #c4c4c4",
                    }}
                  >
                    <div className="flex justify-between items-center w-full">
                      <p className="font-bold text-[20px]">{d.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          {/* section 9 */}
          <section className="section" id="section5">
            <p className="text-[22px] mt-[66px]">Enter account details</p>
            <div className="mt-[20px]">
              <input
                className="h-[54px] bg-[#F4F4F4] w-full p-4 rounded-[12px] border-2 border-transparent focus:border-[#0071e3] focus:outline-none"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="mt-[16px]">
              <input
                className="h-[54px] bg-[#F4F4F4] w-full p-4 rounded-[12px] border-2 border-transparent focus:border-[#0071e3] focus:outline-none"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="mt-[16px]">
              <input
                className="h-[54px] bg-[#F4F4F4] w-full p-4 rounded-[12px] border-2 border-transparent focus:border-[#0071e3] focus:outline-none"
                type="text"
                placeholder="Company"
              />
            </div>
            <div className="mt-[16px]">
              <input
                className="h-[54px] bg-[#F4F4F4] w-full p-4 rounded-[12px] border-2 border-transparent focus:border-[#0071e3] focus:outline-none"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="mt-[16px]">
              <input
                className="h-[54px] bg-[#F4F4F4] w-full p-4 rounded-[12px] border-2 border-transparent focus:border-[#0071e3] focus:outline-none"
                type="email"
                placeholder="Confirm Email Address"
              />
            </div>
            <div className="mt-[16px]">
              <input
                className="h-[54px] bg-[#F4F4F4] w-full p-4 rounded-[12px] border-2 border-transparent focus:border-[#0071e3] focus:outline-none"
                type="number"
                placeholder="Phone Number"
              />
            </div>
            {/* delivery details */}
            <p className="text-[22px] mt-[80px]">Enter delivery details</p>
            <div className="mt-[20px]">
              <input
                className="h-[54px] bg-[#F4F4F4] w-full p-4 rounded-[12px] border-2 border-transparent focus:border-[#0071e3] focus:outline-none"
                type="text"
                placeholder="Address Line 1"
              />
            </div>
            <div className="mt-[16px]">
              <input
                className="h-[54px] bg-[#F4F4F4] w-full p-4 rounded-[12px] border-2 border-transparent focus:border-[#0071e3] focus:outline-none"
                type="text"
                placeholder="Address Line 2"
              />
            </div>
            <div className="mt-[16px]">
              <input
                className="h-[54px] bg-[#F4F4F4] w-full p-4 rounded-[12px] border-2 border-transparent focus:border-[#0071e3] focus:outline-none"
                type="text"
                placeholder="Suburb"
              />
            </div>
            <div className="mt-[16px]">
              <input
                className="h-[54px] bg-[#F4F4F4] w-full p-4 rounded-[12px] border-2 border-transparent focus:border-[#0071e3] focus:outline-none"
                type="text"
                placeholder="State"
              />
            </div>
            <div className="mt-[16px]">
              <input
                className="h-[54px] bg-[#F4F4F4] w-full p-4 rounded-[12px] border-2 border-transparent focus:border-[#0071e3] focus:outline-none"
                type="number"
                placeholder="Postal Code"
              />
            </div>
          </section>
          <p className="text-[14px] text-[#808080] mt-[40px]">
            By entering my contact information above, I authorise Space Haven to
            contact me about this request and Space Haven Updates including
            other Space Haven products, services and events. I can opt out by
            unsubscribing.
          </p>
          <button
            onClick={() => {
              window.location.href = "/configurator/confirmed";
            }}
            className="mt-[40px] w-full p-4 min-h-[60px] text-white rounded-xl bg-[#0071e3]"
          >
            Submit
          </button>
          {/* extra space */}
          <div className="block h-[170px] md:h-[170px]"></div>
        </section>
      )}
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
