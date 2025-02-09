import Carousel from "@/components/Carousel/Carousel";
import React from "react";

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

  return (
    <div className="mt-[180px] ">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <button className="text-[18px]  h-[53px] w-[98px] border-[2px] border-black rounded-[35px]">
            Interior
          </button>
          <h2 className="text-desktop-header-xl my-[40px]">
            All-new interior.
          </h2>
          <p className="text-desktop-body-xl max-w-[920px]">
            Refined materials integrate seamlessly with smart automation{" "}
            <span className="text-color-dark">
              to create a reimagined environment that changes your perception of
              what a premium space should feel like.
            </span>
          </p>
        </div>

        <div className="mt-[100px] mx-[48px]">
          <div className="">
            <img
              src="/homepageImages/section-4.png"
              className="h-full w-full object-contain "
              alt="image"
            />
          </div>
        </div>
        <div className="mt-[140px] ">
          <div className="flex flex-col items-center ">
            <div>
              <h3 className="text-desktop-header-lg">
                Expansive architecture.
              </h3>
              <p className="text-desktop-body-lg max-w-[840px] mt-[40px]">
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

              <div className="flex justify-between max-w-[920px] mt-[100px]">
                <div className="min-w-[260px]">
                  <hr className="border-divider-a border-[.5px]" />
                  <p className="text-desktop-header-lg mt-[30px]">2x</p>
                  <p className="text-desktop-body-lg text-color-dark mt-[-10px]">
                    More Deck Area<sup>6</sup>
                  </p>
                </div>
                <div className="min-w-[260px] ml-[119px]">
                  <hr className="border-divider-a border-[.5px]" />
                  <p className="text-desktop-header-lg mt-[30px]">33%</p>
                  <p className="text-desktop-body-lg text-color-dark mt-[-10px]">
                    Increased Depth<sup>6</sup>
                  </p>
                </div>
                <div className="min-w-[260px] ml-[119px]">
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

        {/* neee */}

        <div className="mx-[210px]  ">
          <div className="mt-[180px] mb-[140px]">
            <img
              src="/homepageImages/section-4.1.png"
              className="h-full w-full object-contain "
              alt="image"
            />
          </div>
          <h3 className="text-desktop-header-lg">
            Amenities for every occasion.
          </h3>

          <div className="mt-[60px] flex  justify-between items-center">
            <div className="">
              <div className="max-w-[850px] overflow-hidden ">
                <Carousel images={images} />
              </div>
            </div>
            <div className="flex flex-col justify-between h-[519px]">
              <div className="ml-[89px]">
                <div className="">
                  <img src="/images/open-plan.svg" alt="image" />
                </div>
                <p className="text-desktop-body-lg">
                  Open Plan.{" "}
                  <span className="text-color-dark">
                    A seamless, elegant, and versatile canvas for personalized
                    interior design.{" "}
                  </span>
                </p>
              </div>
              <div className="ml-[89px]">
                <div className="">
                  <img src="/images/wardrobe.svg" alt="image" />
                </div>
                <p className="text-desktop-body-lg">
                  Wardrobe.{" "}
                  <span className="text-color-dark">
                    High-quality open shelving, hanging space, and smart
                    storage.
                  </span>
                </p>
              </div>
              <div className="ml-[89px]">
                <div className="">
                  <img src="/images/kitchen.svg" alt="image" />
                </div>
                <p className="text-desktop-body-lg">
                  Kitchen.{" "}
                  <span className="text-color-dark">
                    Spacious, flowing design with seamless cooking, dining, and
                    entertaining space.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="my-[180px] flex items-center">
            <div className="mr-[40px]">
              <p className="text-desktop-header-sm">
                Space that makes you feel good.
              </p>
              <p className="text-desktop-body-lg text-color-dark">
                Step inside, close the sliding door and experience the vast
                silence offered by double glazed toughened glass. Queue up your
                favorite songs and listen as your space turns into your own
                private sound studio. <sup>3</sup>
              </p>
            </div>
            <div className="min-w-[860px]">
              <div>
                <img
                  src="/homepageImages/section-4.2.png"
                  className="h-full w-full object-contain "
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
