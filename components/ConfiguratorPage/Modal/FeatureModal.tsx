import React, { useEffect, useState } from "react";
interface FeatureModelProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const FeatureModal = ({ isModalOpen, setIsModalOpen }: FeatureModelProps) => {
  const [isVisible, setIsVisible] = useState(isModalOpen);

  useEffect(() => {
    if (isModalOpen) {
      setIsVisible(true);
    } else {
      // Wait for fade-out animation before unmounting
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isModalOpen]);

  if (!isVisible) return null;

  return (
    <div
      className="flex overflow-y-auto bg-[#00000079] backdrop-blur-[3px] fixed inset-0 z-50 justify-center items-center w-full cursor-pointer"
      onClick={() => setIsModalOpen(false)} // Close modal when clicking on the background
    >
      <div
        className={`relative p-4 w-full max-w-2xl max-h-full mt-[120px] cursor-default ${
          isModalOpen ? "animate-fadeIn" : "animate-fadeOut"
        }`}
      >
        <div
          className="relative bg-white rounded-[24px] shadow"
          onClick={(e) => e.stopPropagation()} // Prevent click events on Swiper from closing the modal
        >
          <div className="flex items-center justify-between border-b rounded-t relative">
            <div>
              <img
                className="rounded-t-[24px]"
                src="/ConfiguratorImages/popup/SO-FD-I-min.jpg"
                alt="image"
              />
            </div>
            <button
              onClick={() => {
                setIsModalOpen(false);
              }}
              type="button"
              className="w-[52px] h-[52px] flex absolute rounded-full top-[20px] right-[20px] text-white text-sm justify-center items-center bg-[#0000002e]"
            >
              <img
                src="/images/cancel-icon.svg"
                className="w-[18.19px] h-[18.2px]"
                alt="Previous"
              />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-[50px]">
            <div>
              <p className="text-[28px]">
                Ultra-sleek exterior, robust architecture.
              </p>
              <p className="text-[17px] mt-[15px] text-[#808080]">
                Space One is the first fully-relocatable structure in Australia
                built from commercial-grade steel. Available in two sizes with
                ready-to-go amenities — it’s the first of its kind, offering
                greater space and flexibility to your parcel with the tall
                spacial ceilings and six interior layouts for commercial and
                hospitality needs. Space One models are 33% wider than standard
                tiny homes on trailers and offer 25% more height than standard
                portable cabins, while being able to be craned in and out from
                one location to another. Setup with ease in various locations as
                short term premium accommodation or long term space.
              </p>
            </div>

            <div className="mt-[40px]">
              <p className="text-[19px]">Here are the key differences: </p>
              <p className="text-[17px] mt-[15px] text-[#808080]">
                Space One has an expansive 16-square-metre footprint, making it
                ideal for smaller parcels and it’s easier to set up in limited
                spaces.
              </p>
              <p className="text-[17px] mt-[15px] text-[#808080]">
                Space One Plus has a more spacious 25-square-metre footprint,
                perfect for larger parcels and providing extra space for a
                multitude of uses.
              </p>
            </div>
            <div className="mt-[60px]">
              <img src="/ConfiguratorImages/popup/cad1.png" alt="" />

              <div className="mt-[20px]">
                <p className="text-[17px]">Space One</p>
                <p className="text-[17px] text-[#808080]">5000 x 3200 mm</p>
              </div>
            </div>

            <div className="mt-[60px]">
              <img src="/ConfiguratorImages/popup/cad2.png" alt="" />

              <div className="mt-[20px]">
                <p className="text-[17px]">Space One Plus</p>
                <p className="text-[17px] text-[#808080]">8000 x 3200 mm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80px]"></div>
      </div>
    </div>
  );
};

export default FeatureModal;
