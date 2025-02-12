import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-background-alt-a pt-[40px]  md:pt-[80px] pb-[80px] md:pb-[80px]">
      <div className="max-w-[800px] mx-[20px] md:mx-[0px]">
        <p className="text-mobile-body-lg md:text-desktop-body-xl">
          To create a sustainable future, we must democratize construction. We
          do this by making space more robust, efficient and relocatable. Space
          One makes this future possible, today.
        </p>

        <ul className="text-mobile-body-sm md:text-desktop-body-sm text-color-dark list-decimal ml-[20px] my-[40px]">
          <li>
            Pricing shown for Space One and Space One Plus is subject to change
            based on delivery location and availability. Permits, groundworks,
            on-site installation, and third-party certification is not included.
          </li>
          <li>
            SpaceOS is available in beta on Space One and Space Plus models in
            Australia and United States, with device language set to English
            (Australia, Canada, Ireland, New Zealand, South Africa, UK, or
            U.S.). SpaceOS may not be available in all languages or in all
            areas, and features may vary by area and selections. Internet access
            required. Cellular data charges may apply. Requires connection to
            power. Connection and response times vary based on location, site
            conditions and other factors.
          </li>
          <li>
            Optional upgrade for an additional cost. Specifications may change
            at any time and are subject to location and availability.
          </li>
          <li>
            Optional upgrade for an additional cost at a later date.
            Specifications may change at any time and are subject to location
            and availability.
          </li>
          <li>
            Images shown for illustrative purposes only and may not reflect the
            standard model or inclusions. Actual model may vary. Exact
            dimensions and weight vary by configuration and manufacturing
            process. Dimensions and square meterage pertain to the external
            measurements.
          </li>
          <li>
            Specifications are based on theoretical testing conducted by
            third-party assessments and may vary.
          </li>
          <li>Space One is not available to order in Tasmania.</li>
        </ul>
        <p className="text-mobile-body-sm md:text-desktop-body-sm text-color-dark">
          Space Buildings © All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
