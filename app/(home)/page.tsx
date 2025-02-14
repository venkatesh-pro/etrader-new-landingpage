import Footer from "@/components/Footer/Footer";
import Homepage from "@/components/Homepage/Homepage";
import Navbar from "@/components/Navbar/Navbar";
import NavbarNotification from "@/components/Navbar/NavbarNotification";
import React from "react";

const page = () => {
  return (
    <div className="">
      <NavbarNotification />
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
};

export default page;
