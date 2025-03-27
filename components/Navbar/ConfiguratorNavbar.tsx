"use client";
import Link from "next/link";
import React from "react";

// interface ConfiguratorNavbarProps {
//   scrollAreaRef: React.RefObject<HTMLDivElement> | null;
// }

const ConfiguratorNavbar = ({}) => {
  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  // const lastScrollYRef = useRef(0); //  to track the last scroll position.
  // const [isMobileView, setIsMobileView] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobileView(global.innerWidth < 768);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!isMobileView) return; // Disable sticky behavior for desktop screens

  //   const handleScroll = () => {
  //     const scrollElement = scrollAreaRef?.current;
  //     if (!scrollElement) return;

  //     const currentScrollY = scrollElement.scrollTop;

  //     if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
  //       // Scrolling down
  //       setIsNavbarVisible(false);
  //     } else {
  //       // Scrolling up
  //       setIsNavbarVisible(true);
  //     }

  //     lastScrollYRef.current = currentScrollY; // Update the last scroll position
  //   };

  //   const scrollElement = scrollAreaRef?.current;
  //   scrollElement?.addEventListener("scroll", handleScroll);

  //   return () => {
  //     scrollElement?.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isMobileView, scrollAreaRef]);

  return (
    <div
      className={`w-full h-[42px] md:fixed flex items-center lg:px-[48px] px-[20px] transition-transform duration-300  top-0 left-0 z-40  bg-[rgba(244,244,244,0.3)] backdrop-blur-2xl`}
    >
      <div className="flex items-center text-center justify-between w-full">
        <div>
          <Link href="/">
            <img src="/logo.svg" className="w-[70px]" alt="Logo" />
          </Link>
        </div>
        <div className="flex items-center">
          <div>
            <img
              src="/globe-icon.svg"
              className="w-[19px] h-[19px]"
              alt="globe-icon"
            />
          </div>
          <div className="ml-[9px] text-[14px]">AU</div>
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorNavbar;
