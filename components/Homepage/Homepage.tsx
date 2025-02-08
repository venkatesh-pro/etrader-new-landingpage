import React from "react";
import Footer from "../Footer/Footer";
import Section1 from "./HomePageSection/Section1";
import Section2 from "./HomePageSection/Section2";
import Section3 from "./HomePageSection/Section3";
import Section4 from "./HomePageSection/Section4";
import Section5 from "./HomePageSection/Section5";
import Section6 from "./HomePageSection/Section6";
import Section7 from "./HomePageSection/Section7";
import Section8 from "./HomePageSection/Section8";
import Section9 from "./HomePageSection/Section9";
import Section10 from "./HomePageSection/Section10";

const Homepage = () => {
  return (
    <div>
      {/* section 1 */}
      <Section1 />

      {/* section 2 */}
      <Section2 />

      {/* section 3 */}
      <Section3 />

      {/* section 4 */}
      <Section4 />

      {/* section 5 */}
      <Section5 />

      {/* section 6 */}
      <Section6 />

      {/* section 7 */}
      <Section7 />

      {/* section 8 */}
      <Section8 />

      {/* section 9 */}
      <Section9 />

      {/* section 10 */}
      <Section10 />

      <div className="px-[30px] md:px-[60px] mt-[40px]">
        <p className="text-[12px] text-[#808080]">
          Space Haven assume no responsibility for any such errors or omissions
          that might exist. Not all buildings, customers or rent options will be
          eligible. Estimated Space One price does not include installation.
          Price does not include delivery to site or any submission to local
          town planning. Final pricing subject to change. Additional costs and
          fees may apply.<sup className="text-[10px]">1</sup> Subject to
          location and availability. Images displayed are for illustrative
          purposes only and may not reflect standard inclusions.
          <sup className="text-[10px]">2</sup>
        </p>
      </div>
      <div className="mt-[40px] mb-[60px]">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
