import { formatNumberToCurrency } from "@/utils/functions";
import { useState, useEffect } from "react";

const ScrollPricing = ({ totalPrice }: { totalPrice: number }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const endSection = document.getElementById("endOfPricing");
    if (!endSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection Observer triggered:", entry.isIntersecting);
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null, // Observe relative to the viewport
        threshold: 0.1, // Trigger when 10% of #section5 is visible
      }
    );

    observer.observe(endSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`w-full desktop:w-[438px] desktopG:w-full z-[10001] transition-opacity duration-500 ${
        isVisible ? "fixed opacity-100" : "opacity-0 hidden pointer-events-none"
      } fixed bottom-0 left-0 md:sticky md:bottom-0`}
    >
      <div className="md:mx-[23px] bg-[#D4D4D4]/30 backdrop-blur-2xl h-[91px] rounded-tl-[12px] rounded-tr-[12px] px-[24px] py-[20px]">
        <div className="flex justify-between">
          <div>
            <p className="text-[24px] font-[450] text-silver">
              {formatNumberToCurrency(totalPrice)}
            </p>
            <p className="text-[14px] font-[400] text-light-silver">
              Est. Price
            </p>
          </div>
          <div>
            <button>
              <img src="/images/chatbox.svg" alt="image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollPricing;
