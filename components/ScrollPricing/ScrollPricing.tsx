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
      className={`desktop:w-[438px] right-0 desktopG:w-[28%] md:w-[28%] z-[10001] transition-opacity duration-500 fixed bottom-0  ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-[23px] bg-[#f4f4f4]  h-[91px] rounded-tl-[20px] rounded-tr-[20px]  px-[24px] py-[20px]">
        <div className="flex justify-between">
          <div>
            <p className="text-[24px] font-[450]  text-silver">
              {formatNumberToCurrency(totalPrice)}
            </p>
            <p className="text-[14px] font-[400]  text-light-silver">
              Est. Configuration Price
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollPricing;
