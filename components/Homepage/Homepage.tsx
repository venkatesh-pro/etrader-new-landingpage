import React from "react";
import Section1 from "./HomePageSection/Section1";
import Section2 from "./HomePageSection/Section2";
import Section3 from "./HomePageSection/Section3";
import Section4 from "./HomePageSection/Section4";
import Section5 from "./HomePageSection/Section5";
import Section6 from "./HomePageSection/Section6";

const Homepage = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      {/* section 1 */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <div id="endScrollToIcon"></div>
    </div>
  );
};

export default Homepage;
