// /data/carFilters.ts
export const usedCarsOptions = [
    { label: "New Cars", value: "new" },
    { label: "Used Cars", value: "used" },
    { label: "Certified Pre-Owned", value: "cpo" },
  ];
  
  export const makesOptions = [
    { label: "Toyota", value: "toyota" },
    { label: "Honda", value: "honda" },
    { label: "Ford", value: "ford" },
    { label: "BMW", value: "bmw" },
    { label: "Mercedes", value: "mercedes" },
  ];
  
  export const modelsOptions = [
    { label: "Corolla", value: "corolla" },
    { label: "Civic", value: "civic" },
    { label: "Mustang", value: "mustang" },
    { label: "3 Series", value: "3series" },
    { label: "C-Class", value: "cclass" },
  ];
  
  export const priceOptions = [
    { label: "Under $10,000", value: "under-10000" },
    { label: "$10,000 - $20,000", value: "10000-20000" },
    { label: "$20,000 - $30,000", value: "20000-30000" },
    { label: "Above $30,000", value: "above-30000" },
  ];

  export const selectOptions = [
    { placeholder: "Used Cars", options: usedCarsOptions },
    { placeholder: "Any Makes", options: makesOptions },
    { placeholder: "Any Models", options: modelsOptions },
    { placeholder: "All Prices", options: priceOptions },
  ];
   