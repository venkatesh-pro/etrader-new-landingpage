import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
const [finalPosition, setFinalPosition] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const startDiv = document.getElementById("scrollToTopTechSpecs");
      if (!startDiv) return;
      const divPosition = startDiv.offsetTop;

      const targetDiv = document.getElementById("endScrollToIcon");
      if (!targetDiv) return;

      const rect = targetDiv.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Show button after scrolling past startDiv
      setShowButton(window.scrollY > divPosition);
      const offset = window.innerWidth < 768 ? 80 : 180;

      // If end div enters viewport, stop the button from moving
      if (rect.top <= windowHeight) {
        setIsFixed(false);
        setFinalPosition(targetDiv.offsetTop - offset);
      } else {
        setIsFixed(true);
        setFinalPosition(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const startDiv = document.getElementById("tech-specs");
    if (startDiv) {
      startDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={`w-[34px] h-[34px] md:w-[60px] rounded-[50%] p-[11px] md:h-[60px] text-center flex items-center justify-center bg-button-b-o30 text-green-600  transition-all duration-300 ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      style={{
        position: isFixed ? "fixed" : "absolute",
        bottom: isFixed ? "12px" : "auto",
        top: isFixed ? "auto" : `${finalPosition}px`,
        left: "50%",
        transform: "translateX(-50%)",
      }}
      onClick={scrollToTop}
    >
      <img
        src="/images/arrow-up.svg"
        alt="image"
        className="h-[11.43px] w-[15.7px] md:h-[21.76px] md:w-[29.44px]"
      />
    </button>
  );
};

export default ScrollToTopButton;
