"use client";
import React, { useState } from "react";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";
import { navLinks } from "../../../data/navData";
import { NavLinksProps } from "@/types/navType";
import clsx from "clsx";

const NavLinks: React.FC<NavLinksProps> = ({ isMobile }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdown = (linkName: string) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName);
  };

  return (
    <nav>
      <ul
        className={clsx(
          isMobile ? "flex flex-col space-y-2" : "flex space-x-6"
        )}
      >
        {navLinks.map((link, index) => (
          <li key={index} className="relative">
            {!link.subMenu ? (
              <Link
                href={link.href}
                className={clsx("flex items-center", isMobile && "py-2")}
              >
                {link.userIcon && <UserIcon className="w-5 h-5 mr-1" />}
                {link.name}
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => handleDropdown(link.name)}
                  className={clsx(
                    "flex items-center justify-between w-full",
                    isMobile && "py-2"
                  )}
                >
                  {link.name}
                  {link.icon && (
                    <img
                      src="/Icons/arrow-down.svg"
                      alt="arrow-down"
                      className={clsx(
                        "ml-1 transition-transform duration-200",
                        openDropdown === link.name ? "rotate-180" : ""
                      )}
                    />
                  )}
                </button>
                {openDropdown === link.name && link.subMenu && (
                  <ul
                    className={clsx(
                      isMobile
                        ? "flex flex-col ml-4 mt-1 space-y-1"
                        : "absolute left-0 mt-2 bg-white shadow-md rounded min-w-[150px] z-50"
                    )}
                  >
                    {link.subMenu.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subLink.href}
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
