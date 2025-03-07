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
    { color: "#000000", name: "Space Black", isSelected: true }, // to image work you need to change to Black, remame the folder
    { color: "#ECECE7", name: "Cloud White", isSelected: false },
    { color: "#343C3D", name: "Midnight Silver", isSelected: false },
    { color: "#CAC1AF", name: "Desert Mist", isSelected: false },
    { color: "#3E4B41", name: "Sage Green", isSelected: false },
  ],

  chooseYourFinishDeck: [
    { color: "#876F57", name: "Golden Teak", isSelected: true }, // to image work you need to change to Black, remame the folder
    { color: "#594C35", name: "Walnut Ember", isSelected: false },
  ],
  chooseYourOrientation: [
    {
      name: "Standard layout",
      description: "Canopy eave on the left",
      isSelected: true,
    },
    {
      name: "Mirrored layout",
      description: "Canopy eave on the right",
      isSelected: false,
    },
  ],
  chooseYourGlass: [
    {
      name: "Single Glazed Glass",
      description: "Canopy eave on the left",
      isSelected: true,
      price: 0,
    },
    {
      name: "Double Glazed Glass",
      description: "Canopy eave on the right",
      isSelected: false,
      price: 3500,
    },
  ],

  // for interiors
  chooseYourLayoutFor16: [
    {
      name: "Open Plan",
      description: "Mesa décor",
      price: 0,
      priceCycle: "week",
      image: "SO-I-I-min.jpg",
      isSelected: true,
    },
    {
      name: "Wardrobe",
      description: "Mesa Oak décor",
      details: [
        "Natural light oak finish",
        "Top shelve",
        "Satin black handles",
      ],
      price: 6200,
      priceCycle: "week",
      image: "SO-I-II-min.jpg",
      isSelected: false,
    },
    {
      name: "Kitchen",
      description: "Mesa Oak décor",
      details: [
        "Natural light oak finish",
        "Satin black handles",
        "2 burner electric cooktop",
        "Stone splash back",
        "Undermount sink",
        "Satin black faucet",
      ],
      price: 9500,
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
      name: "Ceiling fan",
      description: "",
      price: 550,
      priceCycle: "week",
      isSelected: false,
      image: "/ConfiguratorImages/popup/SO-FD-IV-min.jpg",
    },
    {
      name: "Roller Blinds",
      description: "",
      price: 1950,
      priceCycle: "week",
      isSelected: false,
      image: "/ConfiguratorImages/popup/SO-FD-IV-min.jpg",
    },
  ],
  chooseYourEnergy: [
    {
      name: "Sound System",
      description: "Tesla Powerwall 3 and solar array",
      details: [
        "Immersive audio and bass",
        "2 in-ceiling speakers",
        "Signature aluminum grill",
      ],
      price: 3750,
      isSelected: false,
    },
    {
      name: "No Sound System",
      description: "Power with existing utilities",
      isSelected: true,
      price: 0,
    },
  ],

  solar: [
    {
      name: "Solar Package",
      details: ["Tesla Powerwall 3", "Solar roof array"],
      price: 32000,
      isSelected: false,
    },
    {
      name: "No Solar Package",
      isSelected: true,
      price: 0,
    },
  ],

  bathroom: [
    {
      name: "Bathroom",

      details: [
        "Shower",
        "Floating vanity",
        "Round basin",
        "Panoramic mirror",
        "Water closet suite",
        "Privacy glass louvers",
        "Towel rail",
        "Robe hook",
      ],
      price: 9200,
      isSelected: false,
    },
    {
      name: "No Bathroom",
      isSelected: true,
      price: 0,
    },
  ],

  bathroomUpgrades: [
    {
      name: "Accessibility rails",
      description: "",
      price: 450,
      priceCycle: "week",
      isSelected: false,
    },
    {
      name: "Dyson Airblade V",
      description: "",
      price: 1450,
      priceCycle: "week",
      isSelected: false,
    },
  ],

  essentials: [
    {
      name: "Guest key",
      description: "",
      price: 65,
      priceCycle: "week",
      isSelected: false,
    },
    {
      name: "Translucent glass",
      description: "",
      price: 850,
      priceCycle: "week",
      isSelected: false,
    },
    {
      name: "Sliding door insect screen",
      description: "",
      price: 1050,
      priceCycle: "week",
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
  chooseYourFinishDeck: Array<{
    color: string;
    name: string;
    isSelected: boolean;
  }>;
  chooseYourOrientation: Array<{
    name: string;
    description: string;
    isSelected: boolean;
  }>;
  chooseYourGlass: Array<{
    name: string;
    description: string;
    isSelected: boolean;
    price: number;
  }>;
  chooseYourLayoutFor16: Array<{
    name: string;
    description: string;
    details?: string[];
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
  bathroomUpgrades: Array<{
    name: string;
    description: string;
    price: number;
    priceCycle: string;
    isSelected: boolean;
  }>;
  essentials: Array<{
    name: string;
    description: string;
    price: number;
    priceCycle: string;
    isSelected: boolean;
  }>;
  chooseYourEnergy: Array<{
    name: string;
    description: string;
    details?: string[];
    price?: number | undefined; // Optional since "No solar" doesn't have a price
    isSelected: boolean;
  }>;
  solar: Array<{
    name: string;
    details?: string[];
    price?: number | undefined; // Optional since "No solar" doesn't have a price
    isSelected: boolean;
  }>;
  bathroom: Array<{
    name: string;
    details?: string[];
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
