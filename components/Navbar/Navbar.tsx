"use client";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

const Navbar = () => {
  const navLinks = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  function onToggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

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
      className={`h-[50px] flex items-center w-full lg:px-[60px] px-[20px] transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 bg-black z-20`}
    >
      <div className="flex  items-center text-center ">
        <Link href={"/"}>
          <img src="/logo.svg" className=""></img>
        </Link>
      </div>
      <header className="w-full">
        <nav>
          <div className="flex items-center justify-between md:justify-center">
            <div
              ref={navLinks}
              className={`nav-links bg-black z-10 lg:px-[60px] px-[20px]  md:static absolute md:min-h-fit min-h-[230px] left-0 md:w-auto w-full flex items-center  ${
                isMenuOpen && isNavbarVisible ? "top-[50px]" : "top-[-1000%]"
              }`}
            >
              <ul className="text-[14px] flex md:flex-row flex-col md:items-center md:gap-[30px] gap-8">
                <li>
                  <a className="hover:text-gray-500 text-white" href="#">
                    Space One
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500 text-white" href="#">
                    Space Lounge
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500 text-white" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500 text-white" href="#">
                    News
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* hamburger */}
      <div
        className="flex items-center cursor-pointer gap-6 md:hidden"
        onClick={onToggleMenu}
      >
        <div className=" ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="15"
              width="17.5"
              height="1.5"
              rx="0.75"
              fill="white"
            />
            <rect
              x="3"
              y="8"
              width="17.5"
              height="1.5"
              rx="0.75"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
