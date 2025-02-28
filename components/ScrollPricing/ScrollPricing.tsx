import { useState, useEffect } from "react";

const ScrollPricing = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const endSection = document.getElementById("section5");
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
      className={`bg-[#f4f4f4] w-[390px] h-[91px] transition-opacity duration-500 fixed top-0 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error
      omnis necessitatibus asperiores sequi dolorum. Minus suscipit corporis
      asperiores ad.
    </div>
  );
};

export default ScrollPricing;
