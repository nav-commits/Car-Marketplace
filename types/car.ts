export type Car = {
    id: number;
    title: string;
    description: string;
    fuel: string;
    transmission: string;
    miles: number;
    price: number;
    label?: string;
    image: string;
    inStock: boolean;
    category: "Sedan" | "SUV" | "Convertible" | "Other";
  };
  