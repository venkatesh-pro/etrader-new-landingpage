import React from "react";

const Navbar = () => {
  return (
    <div className="w-full px-[20px] md:px-[30px] desktop:px-[48px] h-[42px] bg-button-b-o30 flex justify-between items-center">
      <p className="text-white text-[17px]">Space One</p>
      <button className="text-[12px] text-center h-[28px] w-[93px] rounded-[35px] bg-[#3788F7] text-white ">
        Design Yours
      </button>
    </div>
  );
};

export default Navbar;
