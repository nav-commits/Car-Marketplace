export type CarLabel = "Great Price" | "Low Mileage" | string;

export type Car = {
  id: number;
  title: string;
  description: string;
  fuel: string;
  transmission: string;
  miles: number;
  price: number;
  label?: CarLabel;
  image: string;
  inStock: boolean;
  category: "Sedan" | "SUV" | "Convertible" | "Other";
  createdAt?: string; 
  admin?: string;
};
