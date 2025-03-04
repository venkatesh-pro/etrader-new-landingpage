import { ConfiguratorData } from "@/data";

export const formatNumberToCurrency = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    trailingZeroDisplay: "stripIfInteger", // This is probably what most people
  });

  // Use the formatter with the value of an input.
  return formatter.format(price);
};

export const calculateTotalPrice = (configuratorData: ConfiguratorData) => {
  let totalPrice = 0;

  if (configuratorData) {
    // Iterate through each key in the data object
    for (const key of Object.keys(configuratorData) as Array<
      keyof ConfiguratorData
    >) {
      if (Array.isArray(configuratorData[key])) {
        // Filter for items where `isSelected` is true and have a `price` property
        const selectedItems = configuratorData[key].filter(
          (item) =>
            item.isSelected && "price" in item && typeof item.price === "number"
        );

        // Add their prices to the total
        selectedItems.forEach((item) => {
          // TODO: verify it
          totalPrice += (item as unknown as { price: number }).price;
        });
      }
    }

    return totalPrice;
  } else {
    return 0;
  }
};
