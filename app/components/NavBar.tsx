import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";

interface NavLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
  userIcon?: React.ReactNode;
  subMenu?: { name: string; href: string }[];
}

const navLinks: NavLink[] = [
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

const NavLinks: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-6">
        {navLinks.map((link, index) => (
          <li key={index} className="relative group">
            <Link href={link.href} className="flex items-center">
              {link.userIcon && <UserIcon className="w-5 h-5" />}
              {link.name}
              {link.icon && <ChevronDownIcon className="w-4 h-4" />}
            </Link>
            {/* {link.subMenu && (
              <ul className="absolute left-0 mt-2 text-sm rounded shadow-lg hidden group-hover:block">
                {link.subMenu.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subLink.href}
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      {subLink.name}
                    </a>
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
