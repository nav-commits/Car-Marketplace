import type { NavLink } from "../types/navTypes";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "#",
    subMenu: [
      { name: "Home 1", href: "#" },
      { name: "Home 2", href: "#" },
    ],
    icon: true,
  },
  {
    name: "Listing",
    href: "#",
    subMenu: [
      { name: "Listing Grid", href: "#" },
      { name: "Listing List", href: "#" },
    ],
    icon: true,
  },
  {
    name: "Blog",
    href: "#",
    subMenu: [
      { name: "Blog Grid", href: "#" },
      { name: "Blog List", href: "#" },
    ],
    icon: true,
  },
  {
    name: "Pages",
    href: "#",
    subMenu: [
      { name: "Page 1", href: "#" },
      { name: "Page 2", href: "#" },
    ],
    icon: true,
  },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Sign In", href: "#", userIcon: true },
];
