import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full px-[20px] md:px-[30px] desktop:px-[48px] h-[42px] bg-button-b-o30 flex justify-between items-center">
      <p className="text-white text-[17px]">Space One</p>

      <Link
        href={"/configurator"}
        className="text-[12px] items-center flex justify-center text-center h-[28px] w-[93px] rounded-[35px] bg-button-a hover:bg-button-a-hover text-white transition-all duration-300 ease-in-out"
      >
        Design Yours
      </Link>
    </div>
  );
};

export default Navbar;
