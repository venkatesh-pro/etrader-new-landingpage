import React from "react";

const Section6 = () => {
  const section6TitleDescriptionData = {
    spaceOne: {
      Dimensions: [
        {
          title: "Lenght",
          description: "5000 mm (16.40 foot)",
        },
        {
          title: "Depth",
          description: "3200 mm (10.49 foot)",
        },
        {
          title: "Height",
          description: "3000 mm (9.84 foot)",
        },
      ],
      Layouts: [
        { title: "Open plan" },
        { title: "Open plan, wardrobe" },
        { title: "Open plan, kitchen" },
      ],
      Orientation: [
        { title: "Standard (canopy eave on the left)" },
        { title: "Mirrored (canopy eave on the right)" },
      ],

      Structure: [{ title: "Galvanized light-gauge steel frame" }],
      Cladding: [
        { title: "Textured vertical eco timber wall panelling" },
        { title: "Powder coated vertical architectural steel panels" },
        { title: "Base color-matched aluminum flashing trim" },
      ],
      Roof: [{ title: "Corrugated steel roof with angled pitch" }],
      Canopy: [
        { title: "Base color-matched aluminum entry canopy" },
        { title: "Signature LED ambient lighting" },
        { title: "Textured vertical eco timber wall panelling" },
        { title: "Textured horizontal eco timber ceiling panelling" },
        { title: "Eco timber composite deck" },
        { title: "Privacy Upgrade: Metal insect screen for sliding door3" },
      ],
      Glass: [
        { title: "Double glazed toughened glass" },
        { title: "Powder coated black aluminum frame" },
        { title: "One dual panel sliding door entry" },
        { title: "One expansive facade picture window" },
        { title: "Premium ironmongery and key lock" },
        { title: null },
      ],

      Interior: [
        { title: "2600 mm (8.53 foot) peak ceiling height5" },
        { title: "Natural light oak composite flooring" },
        { title: "Natural light oak textured wall panels" },
        { title: "White smooth-textured ceiling panels" },
        { title: null },
      ],

      Kitchen: [
        {
          title:
            "Custom-designed kitchen with high quality surfaces and mechanisms",
        },
        {
          title:
            "Solid surface stone bench top with black under counter sink design and black faucet",
        },
        { title: "Textured stone splash back" },
        { title: "Spacious upper and lower cabinetry storage" },
        { title: "Two-burner induction cooktop" },
        { title: "Integrated smoke alarm" },
        {
          title:
            "Kitchen Upgrade: Integrated LED task lighting above bench top3",
        },
      ],

      Bathroom: [{ title: null }],

      Insulation: [
        {
          title: "Non-combustible high-thermal insulation in walls and roof",
        },
        {
          title: "Standard sound absorption",
        },
      ],
      Mechanical: [
        {
          title: "LED studio lighting with translucent channel tint",
        },
        {
          title: "Assorted power outlets and light switches",
        },
        {
          title:
            "Air Purification Upgrade: Integrated air filtration system and barometer4",
        },
      ],
      Tech: [
        {
          title: "SpaceOS (beta)2",
        },
        {
          title: "11-inch wall-mounted touchscreen display",
        },
        {
          title: "First-generation hardware",
        },
        {
          title: "Space One graphic",
        },
        {
          title: "Customizable smart controls",
        },
        {
          title: "Over-the-air updates4",
        },
        {
          title: "Bluetooth connectivity4",
        },
        {
          title:
            "Sound System Upgrade: Two in-ceiling speakers with sublime audio and bass3",
        },
        {
          title: "Net Zero Upgrade: Tesla Powerwall 3 and solar array3",
        },
      ],
    },
    spaceOnePlus: {
      Dimensions: [
        {
          title: "Lenght",
          description: "8000 mm (26.24 foot)",
        },
        {
          title: "Depth",
          description: "3200 mm (10.49 foot)",
        },
        {
          title: "Height",
          description: "3000 mm (9.84 foot)",
        },
      ],
      Layouts: [
        { title: "Open plan" },
        { title: "Open plan, wardrobe" },
        { title: "Open plan, kitchen" },
        { title: "Open plan, bathroom, wardrobe" },
        { title: "Open plan, bathroom, kitchen" },
      ],
      Orientation: [
        { title: "Standard (canopy eave on the left)" },
        { title: "Mirrored (canopy eave on the right)" },
      ],

      Structure: [{ title: "Galvanized light-gauge steel frame" }],
      Cladding: [
        { title: "Textured vertical eco timber wall panelling" },
        { title: "Powder coated vertical architectural steel panels" },
        { title: "Base color-matched aluminum flashing trim" },
      ],
      Roof: [{ title: "Corrugated steel roof with angled pitch" }],
      Canopy: [
        { title: "Base color-matched aluminum entry canopy" },
        { title: "Signature LED ambient lighting" },
        { title: "Textured vertical eco timber wall panelling" },
        { title: "Textured horizontal eco timber ceiling panelling" },
        { title: "Eco timber composite deck" },
        { title: "Privacy Upgrade: Metal insect screen for sliding door3" },
      ],
      Glass: [
        { title: "Double glazed toughened glass" },
        { title: "Powder coated black aluminum frame" },
        { title: "One dual panel sliding door entry" },
        { title: "One expansive facade picture window" },
        { title: "Premium ironmongery and key lock" },
        { title: "Bathroom: One louvre window with privacy glass" },
      ],

      Interior: [
        { title: "2600 mm (8.53 foot) peak ceiling height5" },
        { title: "Natural light oak composite flooring" },
        { title: "Natural light oak textured wall panels" },
        { title: "White smooth-textured ceiling panels" },
        {
          title:
            "Bathroom: Matching natural light oak textured internal swing door",
        },
      ],

      Kitchen: [
        {
          title:
            "Custom-designed kitchen with high quality surfaces and mechanisms",
        },
        {
          title:
            "Solid surface stone bench top with black under counter sink design and black faucet",
        },
        { title: "Textured stone splash back" },
        { title: "Spacious upper and lower cabinetry storage" },
        { title: "Two-burner induction cooktop" },
        { title: "Integrated smoke alarm" },
        {
          title:
            "Kitchen Upgrade: Integrated LED task lighting above bench top3",
        },
      ],

      Bathroom: [
        {
          title:
            "Custom-designed vanity with white round infinity sink and black mixer",
        },
        {
          title: "Walk-in shower with seamless linear drain",
        },
        {
          title: "White floor standing water closet suite",
        },
        {
          title: "Textured porcelain tiles to floor and walls",
        },
        {
          title: "Wall-mounted panoramic vanity mirror",
        },
        {
          title: "Black toilet paper holder and black towel rail",
        },
      ],

      Insulation: [
        {
          title: "Non-combustible high-thermal insulation in walls and roof",
        },
        {
          title: "Standard sound absorption",
        },
      ],
      Mechanical: [
        {
          title: "LED studio lighting with translucent channel tint",
        },
        {
          title: "Assorted power outlets and light switches",
        },
        {
          title:
            "Air Purification Upgrade: Integrated air filtration system and barometer4",
        },
      ],
      Tech: [
        {
          title: "SpaceOS (beta)2",
        },
        {
          title: "11-inch wall-mounted touchscreen display",
        },
        {
          title: "First-generation hardware",
        },
        {
          title: "Space One graphic",
        },
        {
          title: "Customizable smart controls",
        },
        {
          title: "Over-the-air updates4",
        },
        {
          title: "Bluetooth connectivity4",
        },
        {
          title:
            "Sound System Upgrade: Two in-ceiling speakers with sublime audio and bass3",
        },
        {
          title: "Net Zero Upgrade: Tesla Powerwall 3 and solar array3",
        },
      ],
    },
  };
  return (
    <div className="my-[180px] mx-[210px] ">
      <div className="">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <button className="text-[18px]  h-[53px] w-[134px] border-[2px] border-black rounded-[35px]">
              Tech Specs
            </button>
          </div>
          <h2 className="text-desktop-header-lg mt-[40px] text-center">
            Keep exploring Space One.
          </h2>

          <div className="flex justify-between w-full mt-[80px] max-w-[800px] ">
            <div>
              {/* section 1.1 */}
              <div className="w-[350px]">
                <div>
                  <img
                    src="/homepageImages/section-6.1.png"
                    className="h-full w-full object-contain "
                    alt="image"
                  />
                </div>

                <div className="flex mt-[25px]">
                  <div className="w-[24px] h-[24px] bg-[#1A1A1A] rounded-full"></div>
                  <div className="w-[24px] h-[24px] bg-[#ECECE7] rounded-full ml-[10px]"></div>
                  <div className="w-[24px] h-[24px] bg-[#343C3D] rounded-full ml-[10px]"></div>
                  <div className="w-[24px] h-[24px] bg-[#B9A98C] rounded-full ml-[10px]"></div>
                  <div className="w-[24px] h-[24px] bg-[#3E4B41] rounded-full ml-[10px]"></div>
                </div>

                <div>
                  <h4 className="my-[25px] text-desktop-header-md">
                    Space One
                  </h4>
                  <p className="text-desktop-body-md">16 square meters</p>
                  <p className="text-desktop-body-md mt-[5px]">
                    From $56,990 or $495/wk for 12 mo.1
                  </p>
                </div>

                <div>
                  <button className="text-[16px]  h-[51px] w-[156px] border-[2px] rounded-[35px]  mt-[25px]  bg-button-a text-white flex  items-center text-">
                    <span className="ml-[21px]">Design Yours</span>{" "}
                    <img
                      src="/images/arrow-right-btn.svg"
                      alt="icon"
                      className="w-[14px] h-[13.73px] ml-[9px]"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="ml-[100px]">
              {/* section 2.1 */}
              <div className="w-[350px]">
                <div>
                  <img
                    src="/homepageImages/section-6.1.png"
                    className="h-full w-full object-contain "
                    alt="image"
                  />
                </div>

                <div className="flex mt-[25px]">
                  <div className="w-[24px] h-[24px] bg-[#1A1A1A] rounded-full"></div>
                  <div className="w-[24px] h-[24px] bg-[#ECECE7] rounded-full ml-[10px]"></div>
                  <div className="w-[24px] h-[24px] bg-[#343C3D] rounded-full ml-[10px]"></div>
                  <div className="w-[24px] h-[24px] bg-[#B9A98C] rounded-full ml-[10px]"></div>
                  <div className="w-[24px] h-[24px] bg-[#3E4B41] rounded-full ml-[10px]"></div>
                </div>

                <div>
                  <h4 className="my-[25px] text-desktop-header-md">
                    Space One Plus
                  </h4>
                  <p className="text-desktop-body-md">25.6 square meters</p>
                  <p className="text-desktop-body-md mt-[5px]">
                    From $74,990 or $725/wk for 12 mo.1
                  </p>
                </div>

                <div>
                  <button className="text-[16px]  h-[51px] w-[156px] border-[2px] mt-[25px] rounded-[35px] bg-button-a text-white flex  items-center text-">
                    <span className="ml-[21px]">Design Yours</span>{" "}
                    <img
                      src="/images/arrow-right-btn.svg"
                      alt="icon"
                      className="w-[14px] h-[13.73px] ml-[9px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" min-w-[800px] max-w-[800px] mb-[100px]">
            <Section6TitleDescription
              title={"Dimensions"}
              data={section6TitleDescriptionData}
            />
            <Section6TitleDescription
              title={"Layouts"}
              data={section6TitleDescriptionData}
            />
            <Section6TitleDescription
              title={"Orientation"}
              data={section6TitleDescriptionData}
            />
            <Section6TitleDescription
              title={"Structure"}
              data={section6TitleDescriptionData}
            />
            <Section6TitleDescription
              title={"Cladding"}
              data={section6TitleDescriptionData}
            />
            <Section6TitleDescription
              title={"Roof"}
              data={section6TitleDescriptionData}
            />
            <Section6TitleDescription
              title={"Canopy"}
              data={section6TitleDescriptionData}
            />
            <Section6TitleDescription
              title={"Glass"}
              data={section6TitleDescriptionData}
            />
            <Section6TitleDescription
              title={"Interior"}
              data={section6TitleDescriptionData}
            />
            <Section6TitleDescription
              title={"Kitchen"}
              data={section6TitleDescriptionData}
            />
            <Section6TitleDescription
              title={"Bathroom"}
              data={section6TitleDescriptionData}
            />
            <Section6TitleDescription
              title={"Insulation"}
              data={section6TitleDescriptionData}
            />
            <Section6TitleDescription
              title={"Mechanical"}
              data={section6TitleDescriptionData}
            />
            <Section6TitleDescription
              title={"Tech"}
              data={section6TitleDescriptionData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;

const Section6TitleDescription = ({ title, data }) => {
  console.log("ifif", data, data[title]);

  return (
    <div className="mt-[100px]">
      <h4 className="text-desktop-header-sm">{title}</h4>
      <hr className="border-divider-a border-[.5px] mt-[20px]" />
      <div className="mt-[40px] flex justify-between">
        <div className="w-[350px] mt-[-20px]">
          {/* space one */}

          {data.spaceOne[title]?.map((d, i) => {
            return (
              <div
                key={i}
                className={title === "Dimensions" ? "mt-[20px]" : "mt-[10px]"}
              >
                <p className="text-desktop-body-md">
                  {d.title === null ? (
                    <span className="text-[30px] leading-[30px]">-</span>
                  ) : (
                    d.title
                  )}
                </p>
                <p className="text-desktop-body-md mt-[5px]">{d.description}</p>
              </div>
            );
          })}
        </div>
        <div className="w-[350px] mt-[-20px]">
          {/* space one plus */}

          {data.spaceOnePlus[title]?.map((d, i) => {
            console.log(title, "data.spaceOnePlus[title] ");

            return (
              <div
                key={i}
                className={title === "Dimensions" ? "mt-[20px]" : "mt-[10px]"}
              >
                <p className="text-desktop-body-md">
                  {d.title === null ? (
                    <span className="text-[30px] leading-[30px]">-</span>
                  ) : (
                    d.title
                  )}
                </p>
                <p className="text-desktop-body-md mt-[5px]">{d.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
