"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ConfiguratorSubmitNavbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and user has scrolled enough
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`h-[42px] flex items-center w-full lg:px-[48px] px-[20px] transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      } md:translate-y-0 fixed top-0 left-0  bg-[rgba(244,244,244,0.3)] backdrop-blur-2xl z-40`}
    >
      <div className="flex items-center text-center justify-between w-full">
        <div className="flex items-center text-center ">
          <Link href={"/"}>
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

export default ConfiguratorSubmitNavbar;
