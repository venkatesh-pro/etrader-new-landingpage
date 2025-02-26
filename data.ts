export const data = {
  chooseYourModel: [
    {
      name: "Space One",
      length: "16 Square Meters",
      price: 59990,
      priceCycle: "week",
      isSelected: true,
    },
    {
      name: "Space One Plus",
      length: "25 Square Meters",
      price: 89990,
      priceCycle: "week",
      isSelected: false,
    },
  ],

  chooseYourFinish: [
    { color: "#000000", name: "BLACK", isSelected: true },
    { color: "#E8E8E8", name: "WHITE", isSelected: false },
    // { color: "#BCB7AD", name: "DESERT", isSelected: false },
    // { color: "#565656", name: "SPACE", isSelected: false },
    // { color: "#344C3F", name: "SAGE", isSelected: false },
  ],
  chooseYourOrientation: [
    {
      name: "Standard",
      description: "Canopy eave on the left",
      isSelected: true,
    },
    {
      name: "Mirrored",
      description: "Canopy eave on the right",
      isSelected: false,
    },
  ],

  // for interiors
  chooseYourLayoutFor16: [
    {
      name: "Open",
      description: "Mesa décor",
      price: 0,
      priceCycle: "week",
      image: "SO-I-I-min.jpg",
      isSelected: true,
    },
    {
      name: "Wardrobe",
      description: "Mesa Oak décor",
      price: 125,
      priceCycle: "week",
      image: "SO-I-II-min.jpg",
      isSelected: false,
    },
    {
      name: "Kitchen",
      description: "Mesa Oak décor",
      price: 195,
      priceCycle: "week",
      image: "SO-I-III-min.jpg",
      isSelected: false,
    },
  ],
  // chooseYourLayoutFor25: [
  //   {
  //     name: "Bedoom suite",
  //     description: "Mesa décor",
  //     price: 0,
  //     isSelected: true,
  //   },
  //   {
  //     name: "Bedroom ensuite",
  //     description: "Mesa Oak décor",
  //     price: 14000,
  //     isSelected: false,
  //   },
  //   {
  //     name: "Studio ensuite",
  //     description: "Mesa Oak décor",
  //     price: 28000,
  //     isSelected: false,
  //   },
  // ],
  optionalUpgradesForLayout: [
    {
      name: "Guest key",
      description: "Invite more people",
      price: 10,
      priceCycle: "week",
      isSelected: false,
      image: "/ConfiguratorImages/popup/SO-FD-V-min.jpg",
    },
    {
      name: "Privacy screen",
      description: "",
      price: 25,
      priceCycle: "week",
      isSelected: false,
      image: "/ConfiguratorImages/popup/SO-FD-III-min.jpg",
    },
    {
      name: "Ceiling fan",
      description: "",
      price: 25,
      priceCycle: "week",
      isSelected: false,
      image: "/ConfiguratorImages/popup/SO-FD-IV-min.jpg",
    },
  ],
  chooseYourEnergy: [
    {
      name: "No solar",
      description: "Power with existing utilities",
      isSelected: true,
    },
    {
      name: "Full solar",
      description: "Tesla Powerwall 3 and solar array",
      price: 28000,
      isSelected: false,
    },
  ],
  optionalUpgradesForEnergy: [
    {
      name: "Security screens",
      description: "Deters bugs and insects",
      price: 3100,
      isSelected: false,
    },
  ],
  terms: [
    {
      name: "12 months",
      description: "",
      isSelected: false,
    },
    {
      name: "24 months",
      description: "",
      isSelected: false,
    },
    {
      name: "36 months",
      description: "",
      isSelected: false,
    },
    {
      name: "Custom",
      description: "",
      isSelected: false,
    },
  ],
  quantityOfUnit: [
    {
      name: "1-5",
      isSelected: false,
    },
    {
      name: "5-10",
      isSelected: false,
    },
    {
      name: "10+",
      isSelected: false,
    },
  ],
  parcelType: [
    {
      name: "Commercial",
      isSelected: false,
    },
    {
      name: "Domestic",
      isSelected: false,
    },
  ],
};

export interface ConfiguratorData {
  chooseYourModel: Array<{
    name: string;
    length: string;
    price: number;
    priceCycle: string;
    isSelected: boolean;
  }>;
  chooseYourFinish: Array<{
    color: string;
    name: string;
    isSelected: boolean;
  }>;
  chooseYourOrientation: Array<{
    name: string;
    description: string;
    isSelected: boolean;
  }>;
  chooseYourLayoutFor16: Array<{
    name: string;
    description: string;
    price: number;
    priceCycle: string;
    isSelected: boolean;
    image: string;
  }>;
  // chooseYourLayoutFor25: Array<{
  //   name: string;
  //   description: string;
  //   price: number;
  //   isSelected: boolean;
  // }>;
  optionalUpgradesForLayout: Array<{
    name: string;
    description: string;
    price: number;
    priceCycle: string;
    isSelected: boolean;
    image: string;
  }>;
  chooseYourEnergy: Array<{
    name: string;
    description: string;
    price?: number | undefined; // Optional since "No solar" doesn't have a price
    isSelected: boolean;
  }>;
  optionalUpgradesForEnergy: Array<{
    name: string;
    description: string;
    price: number;
    isSelected: boolean;
  }>;
  terms: Array<{
    name: string;
    description: string;
    isSelected: boolean;
  }>;
  quantityOfUnit: Array<{
    name: string;
    isSelected: boolean;
  }>;
  parcelType: Array<{
    name: string;
    isSelected: boolean;
  }>;
}
