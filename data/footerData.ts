
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import type { FooterColumn, Socials } from "../types/footerType";

export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    items: ["About Us", "Blog", "Services", "FAQ's", "Terms", "Contact Us"],
  },
  {
    title: "Quick Links",
    items: ["Get in Touch", "Help center", "Live Chat", "FAQs", "How it works"],
  },
  {
    title: "Our Brands",
    items: ["Toyota", "Porsche", "Audi", "BMW", "Ford", "Nissan", "Peugeot", "Volkswagen"],
  },
  {
    title: "Vehicles Type",
    items: ["Sedan", "Hatchback", "SUV", "Hybrid", "Electric", "Coupe", "Truck", "Convertible"],
  },
  {
    title: "Sale Hours",
    items: ["Monday – Friday: 09:00AM – 09:00 PM", "Saturday: 09:00AM – 07:00PM", "Sunday: Closed"],
  },
];

// Socials under Sale Hours
export const socials: Socials = {
    title: "Connect With Us",
    items: [
      { icon: FaFacebookF, label: "Facebook" },
      { icon: FaTwitter, label: "Twitter" },
      { icon: FaInstagram, label: "Instagram" },
      { icon: FaLinkedinIn, label: "LinkedIn" },
    ],
  };