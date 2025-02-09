import React from "react";
import Section1 from "./HomePageSection/Section1";
import Section2 from "./HomePageSection/Section2";

const Homepage = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      {/* section 1 */}
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Homepage;
